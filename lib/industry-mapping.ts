// Mapping of department paths to industry IDs
export const departmentToIndustry: Record<string, string> = {
  // Banking & Finance
  "human-resources": "banking",
  "legal-compliance": "banking",
  "finance-operations": "banking",
  "operations": "banking",
  "risk-management": "banking",
  
  // Insurance
  "claims-processing": "insurance",
  "underwriting": "insurance",
  "customer-service": "insurance",
  "compliance-audit": "insurance",
  "sales-distribution": "insurance",
  
  // Retail
  "inventory-management": "retail",
  "customer-experience": "retail",
  "marketing-sales": "retail",
  "supply-chain": "retail",
  "analytics-insights": "retail",
  
  // Consulting
  "research-analysis": "consulting",
  "client-delivery": "consulting",
  "knowledge-management": "consulting",
  "proposal-development": "consulting",
  "resource-planning": "consulting",
  
  // Manufacturing
  "production": "manufacturing",
  "quality-control": "manufacturing",
  "supply-chain-manufacturing": "manufacturing",
  "maintenance": "manufacturing",
  "safety-compliance": "manufacturing",
};

export function getIndustryFromPath(path: string): string | null {
  // Extract department from path like "/use-cases/production" or "production"
  const parts = path.split("/");
  const department = parts[parts.length - 1] || parts[0];
  return departmentToIndustry[department] || null;
}

