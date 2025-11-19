"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiCheckboxCircleLine, RiHeartLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case5Page() {
  return (
    <CaseDetail
      title="Post-Engagement Follow-Up & Value Tracking"
      backHref="/use-cases/client-delivery"
      backLabel="Back to Client Delivery"
      businessChallenge={{
        title: "Business Challenge",
        description: "Post-engagement activities are manual and inconsistent, limited value tracking, poor follow-up, missed opportunities, and low repeat business (30%). Follow-up challenges include time constraints, lack of automation, no value measurement, limited relationship building, and missed cross-sell."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium automates follow-up with automated follow-up including scheduled check-ins, value validation, satisfaction surveys, and relationship building. The system provides value tracking with implementation monitoring, outcome measurement, ROI calculation, and success stories. It includes opportunity identification with additional needs, cross-sell opportunities, referral potential, and expansion possibilities. The system enables relationship management with engagement tracking, touchpoint management, executive relationships, and account planning, plus referral generation with satisfaction-based requests, testimonial collection, case study development, and reference management."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "80%",
          label: "Increase in repeat business"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Better",
          label: "Client relationships"
        },
        {
          icon: RiHeartLine,
          value: "Higher",
          label: "Satisfaction"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$5M",
          label: "Annual revenue increase"
        }
      ]}
    />
  );
}

