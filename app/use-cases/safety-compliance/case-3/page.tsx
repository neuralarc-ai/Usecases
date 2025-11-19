"use client";

import CaseDetail from "@/components/case-detail";
import { RiCheckboxCircleLine, RiBarChartLine, RiTimeLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case3Page() {
  return (
    <CaseDetail
      title="Automated Safety Training & Certification"
      backHref="/use-cases/safety-compliance"
      backLabel="Back to Safety & Compliance"
      businessChallenge={{
        title: "Business Challenge",
        description: "Safety training involves manual administration, inconsistent delivery, limited tracking, certification gaps, and compliance risks. Training challenges include manual processes, time-consuming administration, inconsistent quality, limited tracking, and compliance gaps."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium automates safety training with automated administration including training assignment, scheduling, delivery, and tracking. The system provides personalized training with role-specific content, skill-based learning, adaptive delivery, and progress tracking. It includes certification management with automated certification, renewal tracking, compliance validation, and audit preparation. The system enables performance tracking with completion rates, assessment scores, knowledge retention, and effectiveness measurement, plus continuous improvement with content updates, delivery optimization, and effectiveness enhancement."
      }}
      metrics={[
        {
          icon: RiCheckboxCircleLine,
          value: "90%",
          label: "Training automation"
        },
        {
          icon: RiBarChartLine,
          value: "100%",
          label: "Certification compliance"
        },
        {
          icon: RiTimeLine,
          value: "Reduced",
          label: "Administrative burden"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$1.5M",
          label: "Annual value"
        }
      ]}
    />
  );
}

