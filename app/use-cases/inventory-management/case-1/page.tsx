"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiTimeLine, RiCheckboxCircleLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case1Page() {
  return (
    <CaseDetail
      title="AI-Powered Demand Forecasting & Stock Optimization"
      backHref="/use-cases/inventory-management"
      backLabel="Back to Inventory Management"
      businessChallenge={{
        title: "Business Challenge",
        description: "Traditional forecasting methods result in 30% stockouts (lost sales: $15M annually), 25% overstock (carrying costs: $8M annually), manual inventory planning taking 5 days per month, 40% forecast accuracy, excessive safety stock, and poor inventory turnover. Forecasting challenges include seasonal variations, trend changes, promotional impacts, competitor actions, economic factors, and weather effects."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium delivers 85% forecast accuracy through advanced forecasting with ML models analyzing 500+ demand factors including historical sales patterns, seasonal trends, promotional impacts, competitor pricing, economic indicators, weather patterns, and social media trends. The system provides real-time demand sensing with point-of-sale data, online traffic and searches, social media signals, market trends, and competitor actions. It enables automated replenishment with optimal order quantities, reorder point calculation, safety stock optimization, and lead time consideration. The system includes seasonal pattern recognition for holiday planning, back-to-school, weather-driven demand, and event-based spikes, plus supplier integration with automated ordering, lead time tracking, delivery scheduling, and performance monitoring."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "85%",
          label: "Forecast accuracy"
        },
        {
          icon: RiTimeLine,
          value: "70%",
          label: "Reduction in stockouts"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "60%",
          label: "Reduction in overstock"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$12M",
          label: "Annual inventory cost savings"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Historical Data Analysis",
            description: "Analyzes past sales and patterns"
          },
          {
            title: "External Data Integration",
            description: "Incorporates weather, trends, competitors"
          },
          {
            title: "ML Forecasting",
            description: "Generates demand forecasts by SKU"
          },
          {
            title: "Demand Sensing",
            description: "Adjusts for real-time signals"
          },
          {
            title: "Stock Optimization",
            description: "Calculates optimal inventory levels"
          },
          {
            title: "Replenishment Calculation",
            description: "Determines order quantities"
          },
          {
            title: "Automated Ordering",
            description: "Sends orders to suppliers"
          },
          {
            title: "Performance Tracking",
            description: "Monitors forecast accuracy"
          }
        ]
      }}
    />
  );
}

