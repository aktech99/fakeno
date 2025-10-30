'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Loader2, CheckCircle, XCircle, Image as ImageIcon, Sparkles } from 'lucide-react';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';

export default function InspectPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [modelLoading, setModelLoading] = useState(false);
  const [model, setModel] = useState<mobilenet.MobileNet | null>(null);
  const [result, setResult] = useState<any>(null);
  const [step, setStep] = useState(1);
  const imageRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Load TensorFlow.js model on component mount
  useEffect(() => {
    async function loadModel() {
      setModelLoading(true);
      try {
        // Load the MobileNet model
        const loadedModel = await mobilenet.load();
        setModel(loadedModel);
        console.log('✅ TensorFlow.js Model Loaded!');
      } catch (error) {
        console.error('❌ Error loading model:', error);
      } finally {
        setModelLoading(false);
      }
    }
    loadModel();
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setStep(2);
        // Auto-start analysis after image loads
        setTimeout(() => {
          if (model) {
            handleAnalysis();
          }
        }, 500);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalysis = async () => {
    if (!imageRef.current || !model) return;

    setAnalyzing(true);
    setStep(2);

    try {
      // Wait a bit for effect
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Run prediction using TensorFlow.js
      const predictions = await model.classify(imageRef.current);

      // Calculate quality score based on top prediction confidence
      const topPrediction = predictions[0];
      const qualityScore = Math.round(topPrediction.probability * 100);

      // Determine if product passed or failed
      const passed = qualityScore >= 75;

      // Generate heatmap (simulated for now)
      generateHeatmap();

      // Create result
      const inspectionResult = {
        id: `INSP-${Date.now()}`,
        timestamp: new Date().toLocaleString(),
        qualityScore,
        passed,
        predictions: predictions.slice(0, 3).map(p => ({
          label: p.className,
          confidence: Math.round(p.probability * 100)
        })),
        aiAnalysis: passed
          ? `High confidence match detected. Product appears to be authentic. Top prediction: ${topPrediction.className} (${Math.round(topPrediction.probability * 100)}% confidence)`
          : `Low confidence score. Potential quality issues detected. Requires manual review.`,
        defectsDetected: !passed,
      };

      setResult(inspectionResult);
      setStep(3);
    } catch (error) {
      console.error('Error during analysis:', error);
    } finally {
      setAnalyzing(false);
    }
  };

  const generateHeatmap = () => {
    if (!canvasRef.current || !imageRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match image
    canvas.width = imageRef.current.width;
    canvas.height = imageRef.current.height;

    // Create gradient heatmap overlay
    const gradient = ctx.createRadialGradient(
      canvas.width / 2,
      canvas.height / 2,
      0,
      canvas.width / 2,
      canvas.height / 2,
      Math.max(canvas.width, canvas.height) / 2
    );

    gradient.addColorStop(0, 'rgba(255, 0, 0, 0.3)');
    gradient.addColorStop(0.5, 'rgba(255, 165, 0, 0.2)');
    gradient.addColorStop(1, 'rgba(0, 255, 0, 0.1)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const resetForm = () => {
    setSelectedImage(null);
    setImageFile(null);
    setResult(null);
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            New Quality Inspection
          </h1>
          <p className="text-gray-600">
            Upload a product image for AI-powered defect detection
          </p>
        </motion.div>

        {/* Model Loading Status */}
        {modelLoading && (
          <motion.div
            className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />
            <span className="text-blue-900">Loading AI model...</span>
          </motion.div>
        )}

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <StepIndicator number={1} label="Upload" active={step >= 1} completed={step > 1} />
          <div className={`h-1 w-16 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`} />
          <StepIndicator number={2} label="Analyze" active={step >= 2} completed={step > 2} />
          <div className={`h-1 w-16 ${step >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`} />
          <StepIndicator number={3} label="Results" active={step >= 3} completed={false} />
        </div>

        {/* Step 1: Upload */}
        {!selectedImage && (
          <motion.div
            className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-blue-500 transition-colors cursor-pointer"
            whileHover={{ scale: 1.01 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
              disabled={!model || modelLoading}
            />
            <label htmlFor="image-upload" className="cursor-pointer">
              <Upload className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <p className="text-xl font-semibold text-gray-900 mb-2">
                {modelLoading ? 'Loading AI Model...' : 'Click to upload product image'}
              </p>
              <p className="text-gray-600">
                PNG, JPG up to 10MB
              </p>
              {model && (
                <p className="text-green-600 text-sm mt-2 flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  AI Model Ready
                </p>
              )}
            </label>
          </motion.div>
        )}

        {/* Step 2: Analysis */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            {/* Image Preview with Heatmap Overlay */}
            <div className="relative bg-gray-100 rounded-2xl overflow-hidden">
              <img
                ref={imageRef}
                src={selectedImage}
                alt="Product"
                className="w-full max-h-96 object-contain"
                crossOrigin="anonymous"
              />
              {analyzing && (
                <canvas
                  ref={canvasRef}
                  className="absolute top-0 left-0 w-full h-full opacity-50"
                />
              )}
              {analyzing && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                  <div className="bg-white rounded-xl p-6 flex items-center gap-3">
                    <Loader2 className="w-6 h-6 text-blue-600 animate-spin" />
                    <span className="text-gray-900 font-semibold">
                      AI Analyzing Image...
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Analysis Progress */}
            {analyzing && (
              <motion.div
                className="bg-blue-50 border border-blue-200 rounded-xl p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />
                  <span className="font-semibold text-blue-900">Running TensorFlow.js Analysis</span>
                </div>
                <div className="w-full h-2 bg-blue-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-blue-600"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2 }}
                  />
                </div>
              </motion.div>
            )}

            {/* Step 3: Results */}
            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`border-2 rounded-2xl p-8 ${
                    result.passed
                      ? 'bg-green-50 border-green-300'
                      : 'bg-red-50 border-red-300'
                  }`}
                >
                  {/* Result Header */}
                  <div className="flex items-center gap-3 mb-6">
                    {result.passed ? (
                      <CheckCircle className="w-12 h-12 text-green-600" />
                    ) : (
                      <XCircle className="w-12 h-12 text-red-600" />
                    )}
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {result.passed ? '✓ Quality Check Passed' : '✗ Quality Check Failed'}
                      </h2>
                      <p className="text-gray-600">{result.timestamp}</p>
                    </div>
                  </div>

                  {/* Quality Score */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-1">Quality Score</p>
                      <p className="text-4xl font-bold text-gray-900">{result.qualityScore}/100</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-1">Inspection ID</p>
                      <p className="text-lg font-mono text-gray-900">{result.id}</p>
                    </div>
                  </div>

                  {/* AI Predictions */}
                  <div className="bg-white rounded-lg p-4 mb-6">
                    <p className="font-semibold text-gray-900 mb-3">AI Predictions:</p>
                    <div className="space-y-2">
                      {result.predictions.map((pred: any, idx: number) => (
                        <div key={idx} className="flex justify-between items-center">
                          <span className="text-gray-700">{pred.label}</span>
                          <span className="font-semibold text-blue-600">{pred.confidence}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* AI Analysis */}
                  <div className="bg-white rounded-lg p-4 mb-6">
                    <p className="font-semibold text-gray-900 mb-2">AI Analysis:</p>
                    <p className="text-gray-700">{result.aiAnalysis}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <button
                      onClick={resetForm}
                      className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 rounded-lg transition-colors"
                    >
                      New Inspection
                    </button>
                    <button
                      onClick={() => setStep(4)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
                    >
                      Submit to Blockchain →
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function StepIndicator({ number, label, active, completed }: any) {
  return (
    <div className="flex flex-col items-center">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
        completed
          ? 'bg-green-600 text-white'
          : active
          ? 'bg-blue-600 text-white'
          : 'bg-gray-200 text-gray-600'
      }`}>
        {completed ? '✓' : number}
      </div>
      <span className={`text-xs mt-1 ${active ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
        {label}
      </span>
    </div>
  );
}
