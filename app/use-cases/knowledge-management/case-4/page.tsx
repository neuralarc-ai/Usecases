"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiBarChartLine, RiCheckboxCircleLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case4Page() {
  return (
    <CaseDetail
      title="Content Recommendation & Discovery"
      backHref="/use-cases/knowledge-management"
      backLabel="Back to Knowledge Management"
      businessChallenge={{
        title: "Business Challenge",
        description: "Consultants spend 5-10 hours per project finding relevant content, limited awareness of available resources, duplicated research, missed insights, and inefficiency. Content discovery challenges include information overload, poor search, limited recommendations, no personalization, and time waste."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium recommends relevant content with context-aware recommendations including project-based suggestions, role-specific content, industry relevance, and timing optimization. The system provides personalization with individual preferences, usage history, expertise level, and learning style. It includes intelligent search with natural language, semantic understanding, relevance ranking, and similar content. The system enables content curation with quality scoring, freshness tracking, usage analytics, and expert validation, plus learning paths with skill development, topic mastery, certification prep, and career advancement."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "80%",
          label: "Reduction in content search time"
        },
        {
          icon: RiBarChartLine,
          value: "3x",
          label: "Increase in content reuse"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Better",
          label: "Insights"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$800K",
          label: "Annual productivity gain"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "User Context",
            description: "Understands current project and needs"
          },
          {
            title: "Content Analysis",
            description: "Analyzes available content"
          },
          {
            title: "Relevance Scoring",
            description: "Ranks by relevance"
          },
          {
            title: "Recommendation Generation",
            description: "Suggests top content"
          },
          {
            title: "Personalization",
            description: "Customizes to user"
          },
          {
            title: "Delivery",
            description: "Presents recommendations"
          },
          {
            title: "Usage Tracking",
            description: "Monitors engagement"
          },
          {
            title: "Optimization",
            description: "Improves recommendations"
          }
        ]
      }}
    />
  );
}

