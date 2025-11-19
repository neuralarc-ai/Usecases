"use client";

import CaseDetail from "@/components/case-detail";
import { RiCheckboxCircleLine, RiBarChartLine, RiFocus3Line, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case3Page() {
  return (
    <CaseDetail
      title="Automated Quality Testing & Validation"
      backHref="/use-cases/quality-control"
      backLabel="Back to Quality Control"
      businessChallenge={{
        title: "Business Challenge",
        description: "Quality testing involves manual processes taking 40+ hours per batch, inconsistent standards, limited coverage, high costs, and delayed results. Testing challenges include manual work, time-consuming processes, inconsistent criteria, limited automation, and delayed feedback."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium automates quality testing with automated test execution including test plan generation, automated test runs, result collection, and validation. The system provides intelligent analysis with test result interpretation, pass/fail determination, trend analysis, and anomaly detection. It includes standard compliance with regulatory requirements, industry standards, customer specifications, and internal standards. The system enables reporting automation with test reports, compliance certificates, trend analysis, and exception reporting, plus continuous improvement with test optimization, standard refinement, and process enhancement."
      }}
      metrics={[
        {
          icon: RiCheckboxCircleLine,
          value: "95%",
          label: "Automation of testing"
        },
        {
          icon: RiBarChartLine,
          value: "Consistent",
          label: "Quality standards"
        },
        {
          icon: RiFocus3Line,
          value: "Faster",
          label: "Results and feedback"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$6M",
          label: "Annual value"
        }
      ]}
    />
  );
}

