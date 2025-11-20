"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiBarChartLine, RiMoneyDollarCircleLine, RiCheckboxCircleLine } from "react-icons/ri";

export default function Case4Page() {
  return (
    <CaseDetail
      title="Intelligent Claims Fraud Investigation"
      backHref="/use-cases/customer-service"
      backLabel="Back to Customer Service"
      businessChallenge={{
        title: "Business Challenge",
        description: "Claims fraud investigation is resource-intensive with 5% of claims flagged for investigation, 40 hours average per investigation, 60% of investigations find no fraud (false positives), $3M annual investigation costs, delayed legitimate claims, and customer dissatisfaction. Investigation challenges include manual evidence collection, limited data sources, time-consuming interviews, inconsistent processes, and poor documentation."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium streamlines fraud investigation. The system enables automated evidence collection with claim documentation, historical patterns, social media analysis, public records, and surveillance data. It constructs timelines with event sequencing, inconsistency identification, gap analysis, and witness correlation. The system provides relationship mapping with network visualization, connection identification, fraud ring detection, and pattern recognition. It identifies red flags including inconsistencies, suspicious patterns, known fraud indicators, and behavioral anomalies. The system includes investigation workflow with case management, task assignment, evidence tracking, and report generation. It provides outcome prediction with fraud likelihood, recovery potential, investigation priority, and resource allocation."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "75%",
          label: "Reduction in investigation time"
        },
        {
          icon: RiBarChartLine,
          value: "50%",
          label: "Reduction in false positives"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$2.2M",
          label: "Annual cost savings"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Faster",
          label: "Legitimate claim resolution"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Fraud Alert",
            description: "Claim flagged for investigation"
          },
          {
            title: "Automated Evidence Collection",
            description: "Gathers all relevant data"
          },
          {
            title: "Timeline Construction",
            description: "Builds event sequence"
          },
          {
            title: "Relationship Mapping",
            description: "Identifies connections"
          },
          {
            title: "Red Flag Analysis",
            description: "Highlights suspicious elements"
          },
          {
            title: "Investigation Assignment",
            description: "Routes to appropriate investigator"
          },
          {
            title: "Guided Investigation",
            description: "Provides structured workflow"
          },
          {
            title: "Resolution Documentation",
            description: "Records outcome and evidence"
          }
        ]
      }}
    />
  );
}

