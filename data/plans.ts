export interface PlanTier {
  name: string;
  limit: number;
  monthly: number;
  annuallyDiscounted: number;
  peopleMin: number;
}

export const planTiers: PlanTier[] = [
  { name: "10K", limit: 10000, monthly: 9, annuallyDiscounted: 8, peopleMin: 1 },
  { name: "100K", limit: 100000, monthly: 19, annuallyDiscounted: 16, peopleMin: 3 },
  { name: "300K", limit: 300000, monthly: 29, annuallyDiscounted: 24, peopleMin: 8 },
  { name: "500K", limit: 500000, monthly: 49, annuallyDiscounted: 41, peopleMin: 13 },
  { name: "1M", limit: 1000000, monthly: 79, annuallyDiscounted: 66, peopleMin: 26 },
  { name: "2.5M", limit: 2500000, monthly: 129, annuallyDiscounted: 108, peopleMin: 66 },
  { name: "5M", limit: 5000000, monthly: 229, annuallyDiscounted: 191, peopleMin: 132 },
  { name: "10M", limit: 10000000, monthly: 399, annuallyDiscounted: 283, peopleMin: 265 },
  { name: "15M", limit: 15000000, monthly: 549, annuallyDiscounted: 458, peopleMin: 397 },
  { name: "20M", limit: 20000000, monthly: 699, annuallyDiscounted: 583, peopleMin: 529 },
  { name: "25M", limit: 25000000, monthly: 889, annuallyDiscounted: 741, peopleMin: 661 },
];
