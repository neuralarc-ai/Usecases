"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiCheckboxCircleLine, RiBarChartLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case2Page() {
  return (
    <CaseDetail
      title="Deliverable Creation & Quality Assurance"
      backHref="/use-cases/client-delivery"
      backLabel="Back to Client Delivery"
      businessChallenge={{
        title: "Business Challenge",
        description: "Deliverable creation takes 80-120 hours per engagement, manual document creation, inconsistent quality, limited reuse, and high costs. Deliverable challenges include starting from scratch, inconsistent formats, quality variations, limited templates, and time-consuming work."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium accelerates deliverable creation with template library including 500+ pre-built templates, industry-specific formats, best practice content, and customizable frameworks. The system provides AI-powered content generation with executive summaries, analysis sections, recommendations, and appendices. It includes automated quality checks with completeness validation, consistency checking, brand compliance, and error detection. The system enables collaboration tools with real-time co-editing, version control, comment management, and approval workflows, plus knowledge reuse with content library, best practice capture, similar project identification, and automated suggestions."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "60%",
          label: "Reduction in creation time"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Higher",
          label: "Quality and consistency"
        },
        {
          icon: RiBarChartLine,
          value: "Better",
          label: "Knowledge reuse"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$500K",
          label: "Annual value per 5 projects"
        }
      ]}
    />
  );
}

