"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiShieldLine, RiCheckboxCircleLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case4Page() {
  return (
    <CaseDetail
      title="Risk Assessment & Mitigation"
      backHref="/use-cases/safety-compliance"
      backLabel="Back to Safety & Compliance"
      businessChallenge={{
        title: "Business Challenge",
        description: "Risk assessment involves manual processes, limited analysis depth, delayed assessments, inconsistent methodology, and ineffective mitigation. Assessment challenges include time-consuming work, limited tools, poor methodology, delayed actions, and ineffective solutions."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium accelerates risk assessment with AI-powered analysis including risk identification, probability calculation, impact assessment, and priority ranking. The system provides comprehensive assessment with multi-factor analysis, scenario modeling, relationship mapping, and trend analysis. It includes mitigation recommendations with specific actions, implementation plans, effectiveness prediction, and cost-benefit analysis. The system enables action tracking with implementation monitoring, effectiveness measurement, validation, and continuous improvement, plus knowledge capture with risk documentation, best practice capture, and prevention strategies."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "85%",
          label: "Faster risk identification"
        },
        {
          icon: RiShieldLine,
          value: "Effective",
          label: "Mitigation"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Reduced",
          label: "Safety risks"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$2M",
          label: "Annual value"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Risk Identification",
            description: "Identifies all potential safety risks"
          },
          {
            title: "AI-Powered Analysis",
            description: "Analyzes risk probability and impact"
          },
          {
            title: "Multi-Factor Assessment",
            description: "Evaluates contributing factors"
          },
          {
            title: "Risk Scoring",
            description: "Ranks risks by severity"
          },
          {
            title: "Mitigation Recommendation",
            description: "Suggests specific risk reduction actions"
          },
          {
            title: "Implementation Planning",
            description: "Develops action plans"
          },
          {
            title: "Mitigation Execution",
            description: "Implements risk reduction measures"
          },
          {
            title: "Validation & Tracking",
            description: "Verifies effectiveness and monitors risks"
          }
        ]
      }}
    />
  );
}

