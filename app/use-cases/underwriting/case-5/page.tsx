"use client";

import CaseDetail from "@/components/case-detail";
import { RiCheckboxCircleLine, RiBarChartLine, RiMoneyDollarCircleLine, RiTimeLine } from "react-icons/ri";

export default function Case5Page() {
  return (
    <CaseDetail
      title="Continuous Risk Monitoring & Re-underwriting"
      backHref="/use-cases/underwriting"
      backLabel="Back to Underwriting"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Policies reviewed only at renewal (annually), missing 80% of risk changes during policy term",
          "Adverse selection costs ($25M+ annually) and unexpected losses from deteriorating risks",
          "Missed opportunities to adjust pricing, limited risk management, and competitive disadvantage",
          "Risk changes during policy term include property modifications, business changes, claims frequency, credit deterioration, geographic risks, and regulatory changes"
        ]
      }}
      toolsUsed={[
        {
          category: "Data Analysis & Visualization",
          tools: ["Tableau", "Power BI", "Looker"]
        },
        {
          category: "Market Research",
          tools: ["Gartner", "Forrester", "IDC"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Continuous Risk Monitoring",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "Real-Time Risk Change Detection",
          popularTools: "Gartner, Forrester, IDC",
          helium: true
        },
        {
          capability: "Automated Re-underwriting",
          popularTools: "Annual renewal only",
          helium: true
        },
        {
          capability: "Dynamic Pricing Adjustments",
          popularTools: "Fixed pricing",
          helium: true
        },
        {
          capability: "Proactive Risk Mitigation",
          popularTools: "Reactive approach",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium monitors risk continuously. The system provides continuous monitoring with IoT device data, telematics, property imagery, public records, credit monitoring, and claims patterns. It includes risk change detection with material changes, trend analysis, pattern recognition, and anomaly detection. The system performs impact assessment evaluating loss potential, pricing adequacy, coverage appropriateness, and reinsurance impact. It includes re-underwriting triggers with automated triggers for material changes, risk score updates, pricing adjustments, and coverage modifications. The system enables dynamic pricing with mid-term adjustments, renewal pricing optimization, risk-based pricing, and competitive positioning. It includes customer engagement with risk mitigation recommendations, loss prevention advice, coverage updates, and discount opportunities."
      }}
      metrics={[
        {
          icon: RiCheckboxCircleLine,
          value: "Real-time",
          label: "Risk visibility"
        },
        {
          icon: RiBarChartLine,
          value: "70%",
          label: "Reduction in adverse selection losses"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$20M",
          label: "Annual loss prevention"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Proactive",
          label: "Risk mitigation"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Continuous Data Collection",
            description: "Monitors risk factors throughout policy term"
          },
          {
            title: "Risk Change Detection",
            description: "Identifies material changes"
          },
          {
            title: "Impact Assessment",
            description: "Evaluates effect on loss potential"
          },
          {
            title: "Re-underwriting Trigger",
            description: "Initiates review for significant changes"
          },
          {
            title: "Pricing Adjustment",
            description: "Calculates new premium if needed"
          },
          {
            title: "Customer Communication",
            description: "Notifies of changes and recommendations"
          },
          {
            title: "Policy Modification",
            description: "Updates coverage or pricing"
          },
          {
            title: "Monitoring Continuation",
            description: "Continues tracking throughout term"
          }
        ]
      }}
    />
  );
}

