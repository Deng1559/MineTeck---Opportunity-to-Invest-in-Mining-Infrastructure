export interface AssetSpec {
  label: string;
  value: string;
  unit?: string;
}

export interface Asset {
  id: string;
  name: string;
  type: string;
  status: 'OPERATIONAL' | 'COMMISSIONING' | 'MAINTENANCE';
  location: string;
  description: string;
  specs: AssetSpec[];
  imageUrl: string;
}

export interface ComparisonRow {
  factor: string;
  conventional: string;
  mineteck: string;
}

export interface NaicsCode {
  code: string;
  description: string;
}

export enum InquiryType {
  OWNER = 'ASSET_OWNER',
  INVESTOR = 'ACCREDITED_INVESTOR',
  GOV = 'GOVERNMENT_CONTRACTOR',
  PARTNER = 'GENERAL_PARTNER'
}