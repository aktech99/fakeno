export interface Product {
  id: string;
  name: string;
  manufacturer: string;
  description: string;
  category: string;
  batchNumber: string;
  manufactureDate: string;
  createdAt: number;
  qrCode?: string;
  blockHash: string;
  previousHash: string;
}

export interface Inspection {
  id: string;
  productId: string;
  inspectorName: string;
  inspectionDate: number;
  imageUrl?: string;
  defectsDetected: boolean;
  defectDetails?: string;
  aiAnalysis?: string;
  status: 'passed' | 'failed' | 'pending';
  blockHash: string;
  previousHash: string;
}

export interface AuditRecord {
  id: string;
  type: 'product_registration' | 'quality_inspection' | 'verification';
  timestamp: number;
  data: Product | Inspection;
  hash: string;
  previousHash: string;
  verified: boolean;
}
