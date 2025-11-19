"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiTimeLine, RiMoneyDollarCircleLine, RiCheckboxCircleLine } from "react-icons/ri";

export default function Case3Page() {
  return (
    <CaseDetail
      title="Dynamic Credit Risk Scoring & Assessment"
      backHref="/use-cases/finance-operations"
      backLabel="Back to Finance Operations"
      businessChallenge={{
        title: "Business Challenge",
        description: "Static credit models update quarterly, missing 30% of early warning signals. Manual underwriting takes 5-7 days with only 65% approval rate (35% of good customers declined), incomplete risk assessment (limited data sources), loss of good customers to competitors who move faster, higher default rates (8-12% vs industry best of 3-5%), limited use of alternative data, inconsistent underwriting decisions, and regulatory compliance challenges."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium provides real-time, comprehensive credit risk assessment. The system uses 500+ data points including traditional credit data, bank account behavior, payment history patterns, cash flow analysis, social media signals, employment stability, education and skills, geographic factors, economic indicators, and alternative data (utility payments, rent payments, mobile phone payments, subscription services, gig economy income). It continuously monitors and updates scores as new information arrives, automatically approves low-risk applications instantly, provides explainable AI with clear reasoning for decisions, and tracks borrower risk throughout loan lifecycle."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "40%",
          label: "Increase in approval rates"
        },
        {
          icon: RiTimeLine,
          value: "85%",
          label: "Reduction in underwriting time"
        },
        {
          icon: RiBarChartLine,
          value: "25%",
          label: "Reduction in default rates"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$3.5M",
          label: "Annual revenue increase"
        }
      ]}
    />
  );
}

