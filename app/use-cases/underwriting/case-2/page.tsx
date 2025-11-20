"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiBarChartLine, RiMoneyDollarCircleLine, RiCheckboxCircleLine } from "react-icons/ri";

export default function Case2Page() {
  return (
    <CaseDetail
      title="Rapid Quote Generation & Optimization"
      backHref="/use-cases/underwriting"
      backLabel="Back to Underwriting"
      businessChallenge={{
        title: "Business Challenge",
        description: "Quote generation takes 2-3 hours with manual data entry and calculation. This results in 30% quote abandonment (customers go elsewhere), inconsistent pricing across agents, competitive disadvantage (slow response), lost revenue ($10M+ annually), poor customer experience, and high operational costs. Manual quoting process involves customer information entry, coverage selection, manual calculations, discount application, quote generation, and follow-up required."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium generates instant, optimized quotes. The system enables automated data collection with pre-fill from existing data, third-party data sources, vehicle/property databases, credit information, and claims history. It provides real-time pricing with risk-based pricing, market conditions, competitive analysis, discount optimization, and bundle pricing. The system includes competitive analysis with market rate comparison, win/loss analysis, price positioning, and competitive intelligence. It enables instant quote generation with multiple coverage options, side-by-side comparison, personalized recommendations, and bundle opportunities. The system supports multi-channel delivery through agent portal, customer self-service, mobile app, email, and SMS."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "95%",
          label: "Reduction in quote time"
        },
        {
          icon: RiBarChartLine,
          value: "50%",
          label: "Reduction in quote abandonment"
        },
        {
          icon: RiBarChartLine,
          value: "20%",
          label: "Improvement in conversion rates"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$4.2M",
          label: "Annual revenue increase"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Quote Request",
            description: "Customer requests quote"
          },
          {
            title: "Data Collection",
            description: "Gathers information from multiple sources"
          },
          {
            title: "Risk Assessment",
            description: "Calculates risk score"
          },
          {
            title: "Pricing Calculation",
            description: "Determines premium for each coverage option"
          },
          {
            title: "Market Analysis",
            description: "Compares to competitive rates"
          },
          {
            title: "Quote Generation",
            description: "Creates multiple coverage options"
          },
          {
            title: "Coverage Options",
            description: "Presents side-by-side comparison"
          },
          {
            title: "Customer Delivery",
            description: "Sends via preferred channel"
          }
        ]
      }}
    />
  );
}

