"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiFocus3Line, RiCheckboxCircleLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case3Page() {
  return (
    <CaseDetail
      title="Customer Segmentation & Targeting"
      backHref="/use-cases/marketing-sales"
      backLabel="Back to Marketing & Sales"
      businessChallenge={{
        title: "Business Challenge",
        description: "Manual segmentation creates 10-15 broad segments, missing 85% of micro-targeting opportunities, campaigns showing 2% response rate, high marketing waste ($3M+ annually), poor personalization, and generic messaging. Segmentation challenges include limited granularity, static segments, manual updates, poor targeting, and wasted spend."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium creates micro-segments with AI-powered segmentation including 1000+ micro-segments, behavioral clustering, predictive attributes, and dynamic updates. The system provides real-time updates with behavior-based movement, purchase triggers, engagement changes, and life events. It includes predictive analytics with segment performance, response prediction, value forecasting, and churn risk. The system enables automated targeting with campaign assignment, channel selection, timing optimization, and message personalization, plus performance tracking with segment analytics, campaign effectiveness, ROI measurement, and optimization recommendations."
      }}
      metrics={[
        {
          icon: RiFocus3Line,
          value: "100x",
          label: "Increase in segmentation granularity"
        },
        {
          icon: RiBarChartLine,
          value: "600%",
          label: "Improvement in response rate"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "70%",
          label: "Reduction in marketing waste"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$12M",
          label: "Annual revenue increase"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Customer Data Analysis",
            description: "Analyzes all customer data"
          },
          {
            title: "Behavioral Clustering",
            description: "Groups by behavior and attributes"
          },
          {
            title: "Segment Creation",
            description: "Creates 1000+ micro-segments"
          },
          {
            title: "Predictive Scoring",
            description: "Scores segment performance potential"
          },
          {
            title: "Campaign Targeting",
            description: "Assigns campaigns to segments"
          },
          {
            title: "Message Personalization",
            description: "Customizes messaging"
          },
          {
            title: "Delivery Optimization",
            description: "Determines best channel and timing"
          },
          {
            title: "Performance Analysis",
            description: "Measures results and optimizes"
          }
        ]
      }}
    />
  );
}

