"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiTimeLine, RiMoneyDollarCircleLine, RiCheckboxCircleLine } from "react-icons/ri";

export default function Case1Page() {
  return (
    <CaseDetail
      title="Real-Time Market Risk Assessment & Monitoring"
      backHref="/use-cases/risk-management"
      backLabel="Back to Risk Management"
      businessChallenge={{
        title: "Business Challenge",
        description: "Market risk assessment updates daily at best, missing intraday market movements that can cause $10M+ in unexpected losses, limit breaches, regulatory violations, poor risk-adjusted returns, and inadequate hedging. Traditional Value-at-Risk (VaR) calculations use end-of-day positions, historical simulation methods, limited scenario analysis, no real-time updates, and miss intraday volatility."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium provides real-time market risk analytics. The system tracks positions in real-time with intraday position updates, mark-to-market valuation, P&L calculation, and exposure analysis, calculates advanced risk metrics (Value-at-Risk, Expected Shortfall, stress testing, scenario analysis, Greeks for options), integrates market data (real-time prices, volatility surfaces, correlation matrices, interest rate curves), monitors limits (position limits, loss limits, concentration limits, counterparty limits), generates alerts for limit breaches, unusual movements, correlation breaks, and stress scenarios, and provides hedging recommendations with optimal hedge ratios, hedge effectiveness, cost-benefit analysis, and execution strategies."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "Real-time",
          label: "Risk visibility"
        },
        {
          icon: RiBarChartLine,
          value: "85%",
          label: "Reduction in unexpected losses"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$15M",
          label: "Annual improvement in returns"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Proactive",
          label: "Limit management"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Position Capture",
            description: "Receives real-time position updates"
          },
          {
            title: "Market Data Integration",
            description: "Incorporates current prices and volatility"
          },
          {
            title: "Risk Calculation",
            description: "Computes VaR, ES, and other metrics"
          },
          {
            title: "Limit Monitoring",
            description: "Checks against all limits"
          },
          {
            title: "Alert Generation",
            description: "Notifies of breaches or issues"
          },
          {
            title: "Scenario Analysis",
            description: "Models various market scenarios"
          },
          {
            title: "Hedging Recommendations",
            description: "Suggests optimal hedges"
          },
          {
            title: "Performance Tracking",
            description: "Monitors risk-adjusted returns"
          }
        ]
      }}
    />
  );
}

