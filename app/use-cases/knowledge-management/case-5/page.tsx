"use client";

import CaseDetail from "@/components/case-detail";
import { RiCheckboxCircleLine, RiShieldLine, RiFocus3Line, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case5Page() {
  return (
    <CaseDetail
      title="Knowledge Retention & Succession Planning"
      backHref="/use-cases/knowledge-management"
      backLabel="Back to Knowledge Management"
      businessChallenge={{
        title: "Business Challenge",
        description: "Employee departures result in critical knowledge loss, project disruption, client relationship damage, reduced capability, and $2M+ annual impact. Knowledge retention challenges include undocumented expertise, limited knowledge transfer, poor succession planning, relationship dependencies, and capability gaps."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium preserves institutional knowledge with knowledge capture including automated documentation, expert interviews, project learnings, and client insights. The system provides succession planning with critical role identification, successor identification, knowledge transfer plans, and readiness assessment. It includes knowledge transfer with structured programs, mentoring facilitation, documentation, and validation. The system enables relationship mapping with client relationships, internal networks, expertise connections, and transition planning, plus risk assessment with departure risk, knowledge concentration, capability gaps, and mitigation planning."
      }}
      metrics={[
        {
          icon: RiCheckboxCircleLine,
          value: "90%",
          label: "Knowledge retention"
        },
        {
          icon: RiShieldLine,
          value: "Smoother",
          label: "Transitions"
        },
        {
          icon: RiFocus3Line,
          value: "Better",
          label: "Succession planning"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$2M",
          label: "Annual value protection"
        }
      ]}
    />
  );
}

