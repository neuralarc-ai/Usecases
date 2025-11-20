"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiMoneyDollarCircleLine, RiCheckboxCircleLine, RiBarChartLine } from "react-icons/ri";

export default function Case2Page() {
  return (
    <CaseDetail
      title="Computer Vision Damage Assessment"
      backHref="/use-cases/claims-processing"
      backLabel="Back to Claims Processing"
      businessChallenge={{
        title: "Business Challenge",
        description: "Physical damage assessment requires on-site inspections taking 3-5 days to schedule and complete, costing $200-$400 per claim, with inconsistent assessments (15% variance between adjusters), disputes in 15% of claims, customer frustration with delays, and high operational costs ($10M+ annually for 50K claims). Traditional process involves scheduling inspection, adjuster travels to site, manual damage assessment, photo documentation, repair estimate, and report writing."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium uses computer vision for instant damage assessment. The system provides AI-powered image analysis to identify damage type, assess severity, identify affected components, determine repair requirements, and detect safety hazards. It automates cost estimation with parts pricing, labor costs, material costs, total repair estimate, and confidence intervals. The system performs comparative analysis with historical claim comparison, similar damage patterns, repair cost validation, and fraud detection. It enables real-time assessment through mobile app submission, instant analysis, immediate estimate, and fast approval. The system also integrates with repair network for preferred vendor pricing, shop availability, quality ratings, and appointment scheduling."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "80%",
          label: "Reduction in assessment time"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "70%",
          label: "Cost reduction per assessment"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "95%",
          label: "Consistency in damage evaluation"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$4.5M",
          label: "Annual savings per 15K claims"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Photo Upload",
            description: "Customer submits damage photos via mobile app"
          },
          {
            title: "Computer Vision Analysis",
            description: "AI analyzes damage type and severity"
          },
          {
            title: "Damage Classification",
            description: "Categorizes damage (minor, moderate, severe, total loss)"
          },
          {
            title: "Cost Estimation",
            description: "Calculates repair costs using pricing database"
          },
          {
            title: "Historical Comparison",
            description: "Validates against similar claims"
          },
          {
            title: "Repair Recommendation",
            description: "Suggests repair approach and vendors"
          },
          {
            title: "Approval Workflow",
            description: "Routes for appropriate approval"
          },
          {
            title: "Settlement",
            description: "Processes payment"
          }
        ]
      }}
    />
  );
}

