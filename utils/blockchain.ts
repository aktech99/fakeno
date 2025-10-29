/**
 * Blockchain Simulation Utilities
 * Creates immutable audit trail using cryptographic hashing
 */

export interface BlockData {
  timestamp: number;
  data: any;
  previousHash: string;
}

export interface Block extends BlockData {
  hash: string;
}

/**
 * Creates a SHA-256 hash from input data
 */
export async function createHash(data: string): Promise<string> {
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);
  const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

/**
 * Creates a new block with cryptographic hash
 */
export async function createBlock(data: any, previousHash: string = '0'): Promise<Block> {
  const timestamp = Date.now();
  const blockData: BlockData = {
    timestamp,
    data,
    previousHash
  };

  // Create hash from block contents
  const blockString = JSON.stringify(blockData);
  const hash = await createHash(blockString);

  return {
    ...blockData,
    hash
  };
}

/**
 * Verifies the integrity of a block
 */
export async function verifyBlock(block: Block): Promise<boolean> {
  const { hash, ...blockData } = block;
  const blockString = JSON.stringify(blockData);
  const calculatedHash = await createHash(blockString);
  return calculatedHash === hash;
}

/**
 * Verifies a chain of blocks
 */
export async function verifyChain(blocks: Block[]): Promise<boolean> {
  for (let i = 0; i < blocks.length; i++) {
    // Verify block integrity
    const isValid = await verifyBlock(blocks[i]);
    if (!isValid) return false;

    // Verify chain linkage (except for first block)
    if (i > 0 && blocks[i].previousHash !== blocks[i - 1].hash) {
      return false;
    }
  }
  return true;
}

/**
 * Generates a unique product ID
 */
export function generateProductId(): string {
  return `PROD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
}
