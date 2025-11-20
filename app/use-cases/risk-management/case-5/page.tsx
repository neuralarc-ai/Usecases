"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiDatabaseLine, RiMoneyDollarCircleLine, RiCheckboxCircleLine } from "react-icons/ri";

export default function Case5Page() {
  return (
    <CaseDetail
      title="Integrated Risk Reporting & Governance"
      backHref="/use-cases/risk-management"
      backLabel="Back to Risk Management"
      businessChallenge={{
        title: "Business Challenge",
        description: "Risk reporting involves 50+ reports monthly, data from 20+ systems, manual consolidation (100+ hours), inconsistent definitions, limited analytics, and delayed insights. Manual reporting takes 5-7 days to produce, is outdated by publication, has limited drill-down, is inconsistent across risk types, and has high error rates (10-15%)."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium provides unified risk reporting. The system establishes a unified data layer (single source of truth, consistent definitions, real-time updates, data quality controls), automates reporting (50+ standard reports, custom report builder, scheduled distribution, multiple formats), provides interactive analytics (drill-down capability, trend analysis, peer comparison, scenario modeling), includes an executive dashboard (key risk indicators, heat maps, alerts and notifications, mobile access), and generates regulatory reporting (automated generation, validation controls, submission management, audit trail)."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "90%",
          label: "Reduction in reporting time"
        },
        {
          icon: RiDatabaseLine,
          value: "Single",
          label: "Source of truth"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "100%",
          label: "Data consistency"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$1.5M",
          label: "Annual cost savings"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Data Integration",
            description: "Consolidates from all systems"
          },
          {
            title: "Data Quality Validation",
            description: "Ensures accuracy"
          },
          {
            title: "Report Generation",
            description: "Creates all required reports"
          },
          {
            title: "Analytics Processing",
            description: "Performs trend and scenario analysis"
          },
          {
            title: "Dashboard Update",
            description: "Refreshes executive views"
          },
          {
            title: "Distribution",
            description: "Delivers reports to stakeholders"
          },
          {
            title: "Regulatory Submission",
            description: "Files required reports"
          },
          {
            title: "Audit Trail",
            description: "Documents all activities"
          }
        ]
      }}
    />
  );
}

