"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiMoneyDollarCircleLine, RiTimeLine, RiCheckboxCircleLine } from "react-icons/ri";

export default function Case4Page() {
  return (
    <CaseDetail
      title="Automated Policy Customization & Bundling"
      backHref="/use-cases/underwriting"
      backLabel="Back to Underwriting"
      businessChallenge={{
        title: "Business Challenge",
        description: "Policy customization requires manual underwriter review, limiting options to 5-10 standard packages. This results in missed cross-sell opportunities ($15M+ annually), poor customer satisfaction (one-size-fits-all), competitive disadvantage, limited product innovation, and low bundle penetration (15%). Manual customization takes 2-3 hours per policy, is limited to simple modifications, has inconsistent pricing, compliance risks, and high operational costs."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium enables dynamic policy customization. The system provides AI-powered recommendations with coverage gap analysis, personalized suggestions, bundle optimization, cross-sell opportunities, and upsell recommendations. It includes automated coverage gap analysis that identifies underinsured areas, suggests additional coverage, explains benefits, and quantifies risk. The system enables dynamic bundling with optimal product combinations, discount optimization, price sensitivity analysis, and competitive positioning. It provides personalized pricing with risk-based pricing for custom policies, bundle discounts, loyalty rewards, and real-time calculation. The system supports real-time configuration with instant quote updates, coverage modifications, limit adjustments, and deductible changes."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "300%",
          label: "Increase in customization options"
        },
        {
          icon: RiBarChartLine,
          value: "45%",
          label: "Improvement in cross-sell rates"
        },
        {
          icon: RiTimeLine,
          value: "70%",
          label: "Reduction in configuration time"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$18M",
          label: "Annual revenue increase"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Customer Profile Analysis",
            description: "Analyzes customer needs and risks"
          },
          {
            title: "Coverage Gap Identification",
            description: "Identifies underinsured areas"
          },
          {
            title: "Product Recommendation",
            description: "Suggests relevant products"
          },
          {
            title: "Bundle Optimization",
            description: "Creates optimal product combinations"
          },
          {
            title: "Pricing Calculation",
            description: "Calculates premiums with discounts"
          },
          {
            title: "Policy Configuration",
            description: "Configures custom policy"
          },
          {
            title: "Approval Workflow",
            description: "Routes for underwriter approval if needed"
          },
          {
            title: "Policy Issuance",
            description: "Issues customized policy"
          }
        ]
      }}
    />
  );
}

