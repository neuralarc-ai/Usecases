"use client";

import CaseDetail from "@/components/case-detail";
import { RiCheckboxCircleLine, RiTimeLine, RiBarChartLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case2Page() {
  return (
    <CaseDetail
      title="AI-Powered Virtual Shopping Assistant"
      backHref="/use-cases/customer-experience"
      backLabel="Back to Customer Experience"
      businessChallenge={{
        title: "Business Challenge",
        description: "Customer service handles 100K+ inquiries monthly, with 70% being product questions, 8-minute average wait time, 30% cart abandonment from lack of assistance, $5M annual call center costs, and limited product expertise. Common questions include product features and specifications, size and fit guidance, availability and delivery, comparison and recommendations, and returns and exchanges."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium provides intelligent shopping assistance with natural language processing for product queries, intent understanding, context awareness, multi-turn conversations, and sentiment analysis. The system includes visual search with image-based search, similar product finding, style matching, and color and pattern recognition. It provides personalized styling with outfit suggestions, complementary items, style preferences, and occasion-based recommendations. The system enables size & fit recommendations with size prediction, fit analysis, return rate reduction, and customer measurements, plus seamless escalation with complex queries routed to agents, context preservation, priority routing, and warm handoff."
      }}
      metrics={[
        {
          icon: RiCheckboxCircleLine,
          value: "85%",
          label: "Automation of product inquiries"
        },
        {
          icon: RiTimeLine,
          value: "Zero",
          label: "Wait time for automated responses"
        },
        {
          icon: RiBarChartLine,
          value: "50%",
          label: "Reduction in cart abandonment"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$11M",
          label: "Annual value (revenue + savings)"
        }
      ]}
    />
  );
}

