"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiFocus3Line, RiMoneyDollarCircleLine, RiBarChartLine } from "react-icons/ri";

export default function Case4Page() {
  return (
    <CaseDetail
      title="Predictive Financial Forecasting & Planning"
      backHref="/use-cases/finance-operations"
      backLabel="Back to Finance Operations"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Quarterly forecasts take 3 weeks to produce and are outdated within days",
          "Static models miss 40% of market changes and trends, leading to $10M+ in missed opportunities or unexpected losses",
          "Limited scenario analysis (3-5 scenarios manually) and lack real-time updates (quarterly refresh cycle)",
          "Don't incorporate external factors (economic indicators, market data), require extensive manual data gathering and consolidation, and have limited collaboration across departments"
        ]
      }}
      toolsUsed={[
        {
          category: "Data Analysis & Visualization",
          tools: ["Tableau", "Power BI", "Looker"]
        },
        {
          category: "Market Research",
          tools: ["Gartner", "Forrester", "IDC"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Real-Time Forecasting",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "Multi-Scenario Analysis",
          popularTools: "Tableau, Power BI",
          helium: true
        },
        {
          capability: "External Data Integration",
          popularTools: "Gartner, Forrester, IDC",
          helium: true
        },
        {
          capability: "AI-Powered Predictions",
          popularTools: "Static models",
          helium: true
        },
        {
          capability: "Automated Updates",
          popularTools: "Manual consolidation",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium delivers dynamic, real-time financial forecasting. The system integrates multi-source data (internal financial data, operational metrics, market data, economic indicators, competitor information, regulatory changes), uses advanced ML models for forecasting (time series analysis, regression models, neural networks, ensemble methods), runs 1000+ scenarios automatically (base case, best case, worst case, stress scenarios, custom scenarios), explains forecast changes automatically with driver identification and impact quantification, incorporates market data (interest rate curves, credit spreads, market volatility, economic forecasts), refreshes forecasts continuously (daily for key metrics, weekly for detailed forecasts, monthly for comprehensive plans), and provides interactive executive dashboard with forecast vs actual, scenario comparison, and variance analysis."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "90%",
          label: "Reduction in forecast preparation time"
        },
        {
          icon: RiFocus3Line,
          value: "60%",
          label: "Improvement in forecast accuracy"
        },
        {
          icon: RiBarChartLine,
          value: "Real-time",
          label: "Updates vs quarterly cycles"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$8M",
          label: "Annual improvement"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Data Collection",
            description: "Gathers internal and external data automatically"
          },
          {
            title: "AI Model Training",
            description: "Trains on historical patterns and relationships"
          },
          {
            title: "Forecast Generation",
            description: "Creates multi-scenario forecasts"
          },
          {
            title: "Scenario Analysis",
            description: "Models various outcomes with probabilities"
          },
          {
            title: "Variance Detection",
            description: "Identifies changes from plan"
          },
          {
            title: "Alert Generation",
            description: "Notifies of significant variances"
          },
          {
            title: "Executive Dashboard",
            description: "Visualizes forecasts and scenarios interactively"
          },
          {
            title: "Model Refinement",
            description: "Improves accuracy over time based on outcomes"
          }
        ]
      }}
    />
  );
}

