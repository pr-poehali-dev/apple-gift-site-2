export interface DonateTier {
  id: number;
  title: string;
  price: number;
  description: string;
  features: string[];
  imageUrl?: string;
}

export interface PriceTiers {
  tier1: DonateTier[];
  tier2: DonateTier[];
  tier3: DonateTier[];
}
