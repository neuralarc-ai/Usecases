"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiFocus3Line, RiShieldLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case1Page() {
  return (
    <CaseDetail
      title="Automated Claims Triage & Routing"
      backHref="/use-cases/human-resources"
      backLabel="Back to Human Resources"
      businessChallenge={{
        title: "Business Challenge",
        description: "Claims adjusters spend 45 minutes per claim on initial assessment and routing. Manual triage misses 30% of fraud indicators and routes 25% of claims incorrectly."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium classifies claims and assesses severity using AI, detecting fraud indicators automatically. Intelligent routing to appropriate adjusters based on expertise, priority scoring for urgent claims, and automated customer communication streamline the entire process."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "90%",
          label: "Reduction in triage time"
        },
        {
          icon: RiFocus3Line,
          value: "95%",
          label: "Routing accuracy"
        },
        {
          icon: RiShieldLine,
          value: "85%",
          label: "Fraud indicator detection"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$2.8M",
          label: "Annual savings per 10K claims"
        }
      ]}
    />
  );
}

