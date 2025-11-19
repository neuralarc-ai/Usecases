"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiBarChartLine, RiCheckboxCircleLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case3Page() {
  return (
    <CaseDetail
      title="Expert Location & Collaboration"
      backHref="/use-cases/knowledge-management"
      backLabel="Back to Knowledge Management"
      businessChallenge={{
        title: "Business Challenge",
        description: "Finding the right expert takes 2-3 hours per search, limited visibility into expertise, missed collaboration opportunities, duplicated work, and inefficient resource use. Expert location challenges include no expertise directory, limited search, outdated information, poor visibility, and siloed knowledge."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium connects people and expertise with expertise mapping including skill identification, project history, publication tracking, and certification management. The system provides intelligent search with natural language queries, expertise matching, availability checking, and location consideration. It includes collaboration facilitation with expert introduction, project matching, team formation, and knowledge sharing. The system enables expertise development with skill gap identification, training recommendations, career pathing, and succession planning, plus analytics with expertise utilization, collaboration patterns, knowledge gaps, and investment priorities."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "90%",
          label: "Reduction in expert search time"
        },
        {
          icon: RiBarChartLine,
          value: "50%",
          label: "Increase in collaboration"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Better",
          label: "Resource utilization"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$1M",
          label: "Annual productivity gain"
        }
      ]}
    />
  );
}

