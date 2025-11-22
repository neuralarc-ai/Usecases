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
        challenges: [
          "Customer service handles 100K+ inquiries monthly with 70% being product questions and 8-minute average wait time",
          "30% cart abandonment from lack of assistance and $5M annual call center costs",
          "Limited product expertise leads to poor customer experience",
          "Common questions include product features, size and fit guidance, availability, comparisons, and returns"
        ]
      }}
      toolsUsed={[
        {
          category: "Email & Communication",
          tools: ["Superhuman", "Front", "Intercom"]
        },
        {
          category: "Workflow Automation",
          tools: ["Zapier", "Make", "n8n"]
        },
        {
          category: "Database Management",
          tools: ["Airtable", "Notion", "Coda"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Natural Language Processing",
          popularTools: "Keyword matching",
          helium: true
        },
        {
          capability: "Visual Search",
          popularTools: "Text-only search",
          helium: true
        },
        {
          capability: "24/7 Availability",
          popularTools: "Business hours only",
          helium: true
        },
        {
          capability: "Contextual Understanding",
          popularTools: "Intercom, Front",
          helium: true
        },
        {
          capability: "End-to-End Automation",
          popularTools: "Zapier, Make, n8n",
          helium: true
        }
      ]}
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
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Customer Query",
            description: "Customer asks product question"
          },
          {
            title: "Intent Recognition",
            description: "Understands what customer needs"
          },
          {
            title: "Product Search",
            description: "Finds relevant products"
          },
          {
            title: "Recommendation Generation",
            description: "Suggests best options"
          },
          {
            title: "Personalization",
            description: "Customizes based on preferences"
          },
          {
            title: "Response Delivery",
            description: "Provides answer with visuals"
          },
          {
            title: "Follow-up Questions",
            description: "Handles additional queries"
          },
          {
            title: "Purchase Assistance",
            description: "Guides to checkout"
          }
        ]
      }}
    />
  );
}

