'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { TrendingDown, TrendingUp, Activity, Users, Plus, BarChart3, Globe, Settings } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for the chart
const defectRateData = [
  { day: 'Day 1', rate: 2.4 },
  { day: 'Day 5', rate: 2.1 },
  { day: 'Day 10', rate: 2.3 },
  { day: 'Day 15', rate: 1.9 },
  { day: 'Day 20', rate: 1.8 },
  { day: 'Day 25', rate: 1.7 },
  { day: 'Day 30', rate: 1.8 },
];

// Mock recent inspections
const recentInspections = [
  { id: 'INSP-47582', productId: 'PROD-8472', status: 'passed', time: '2 minutes ago' },
  { id: 'INSP-47581', productId: 'PROD-8471', status: 'failed', time: '5 minutes ago' },
  { id: 'INSP-47580', productId: 'PROD-8470', status: 'passed', time: '8 minutes ago' },
  { id: 'INSP-47579', productId: 'PROD-8469', status: 'passed', time: '12 minutes ago' },
  { id: 'INSP-47578', productId: 'PROD-8468', status: 'passed', time: '15 minutes ago' },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome, PharmaCorp
          </h1>
          <p className="text-gray-600">
            Dashboard overview for today • {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Inspections Today */}
          <motion.div
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <div className="flex items-center justify-between mb-2">
              <Activity className="w-8 h-8 text-blue-600" />
              <span className="text-green-600 text-sm font-semibold flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                +12%
              </span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">2,847</h3>
            <p className="text-sm text-gray-600">Inspections Today</p>
          </motion.div>

          {/* Defect Rate */}
          <motion.div
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <div className="flex items-center justify-between mb-2">
              <BarChart3 className="w-8 h-8 text-red-600" />
              <span className="text-green-600 text-sm font-semibold flex items-center gap-1">
                <TrendingDown className="w-4 h-4" />
                -0.3%
              </span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">1.8%</h3>
            <p className="text-sm text-gray-600">Defect Rate</p>
          </motion.div>

          {/* Quality Score */}
          <motion.div
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <div className="flex items-center justify-between mb-2">
              <Activity className="w-8 h-8 text-green-600" />
              <span className="text-green-600 text-sm font-semibold flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                +2 pts
              </span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">94/100</h3>
            <p className="text-sm text-gray-600">Quality Score</p>
          </motion.div>

          {/* Network Rank */}
          <motion.div
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <div className="flex items-center justify-between mb-2">
              <Users className="w-8 h-8 text-purple-600" />
              <span className="text-blue-600 text-sm font-semibold">
                Top 3
              </span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">#2/12</h3>
            <p className="text-sm text-gray-600">Network Rank</p>
          </motion.div>
        </div>

        {/* Chart */}
        <motion.div
          className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Defect Rate Trend (Last 30 Days)
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={defectRateData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="day" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="rate"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Two Column Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Recent Inspections */}
          <motion.div
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Recent Inspections
            </h2>
            <div className="space-y-3">
              {recentInspections.map((inspection, index) => (
                <motion.div
                  key={inspection.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      inspection.status === 'passed' ? 'bg-green-500' : 'bg-red-500'
                    }`} />
                    <div>
                      <p className="font-semibold text-gray-900">{inspection.id}</p>
                      <p className="text-sm text-gray-600">{inspection.productId}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                      inspection.status === 'passed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {inspection.status.toUpperCase()}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">{inspection.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Quick Actions
            </h2>
            <div className="space-y-3">
              <Link
                href="/dashboard/inspect"
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
              >
                <Plus className="w-6 h-6" />
                <div>
                  <p className="font-bold">New Inspection</p>
                  <p className="text-sm text-blue-100">Upload and analyze a product</p>
                </div>
              </Link>

              <Link
                href="/dashboard/analytics"
                className="flex items-center gap-4 p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <BarChart3 className="w-6 h-6 text-gray-700" />
                <div>
                  <p className="font-bold text-gray-900">Analytics</p>
                  <p className="text-sm text-gray-600">View detailed reports</p>
                </div>
              </Link>

              <Link
                href="/network"
                className="flex items-center gap-4 p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <Globe className="w-6 h-6 text-gray-700" />
                <div>
                  <p className="font-bold text-gray-900">View Network</p>
                  <p className="text-sm text-gray-600">Federated learning status</p>
                </div>
              </Link>

              <Link
                href="/dashboard/settings"
                className="flex items-center gap-4 p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <Settings className="w-6 h-6 text-gray-700" />
                <div>
                  <p className="font-bold text-gray-900">Settings</p>
                  <p className="text-sm text-gray-600">Manage your account</p>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Federated Learning Status */}
        <motion.div
          className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-200 rounded-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">
              🤝 Federated Learning Status
            </h2>
            <Link
              href="/network"
              className="text-sm text-blue-600 hover:text-blue-700 font-semibold"
            >
              View Details →
            </Link>
          </div>
          <p className="text-gray-700 mb-3">
            Round #47 - Training in Progress
          </p>
          <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ width: '0%' }}
              animate={{ width: '80%' }}
              transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
            />
          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>80% complete</span>
            <span>~2 minutes remaining</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
