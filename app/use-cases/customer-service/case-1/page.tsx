"use client";

import CaseDetail from "@/components/case-detail";
import { RiCheckboxCircleLine, RiTimeLine, RiHeartLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case1Page() {
  return (
    <CaseDetail
      title="AI-Powered 24/7 Customer Support Chatbot"
      backHref="/use-cases/customer-service"
      backLabel="Back to Customer Service"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Customer service centers handle 50,000+ inquiries monthly, with 60% being routine questions (policy details, payment status, coverage questions)",
          "Average wait time of 8 minutes, 25% call abandonment rate, and $3.5M annual call center costs",
          "Limited after-hours support and inconsistent service quality",
          "Common inquiries include policy coverage questions, payment status and methods, claims status, document requests, address changes, and coverage modifications"
        ]
      }}
      toolsUsed={[
        {
          category: "Email & Communication",
          tools: ["Superhuman", "Front", "Intercom"]
        },
        {
          category: "Social Media Management",
          tools: ["Hootsuite", "Buffer", "Sprout Social"]
        }
      ]}
      comparisonTable={[
        {
          capability: "24/7 AI Chatbot Support",
          popularTools: "Superhuman, Front, Intercom",
          helium: true
        },
        {
          capability: "Natural Language Processing",
          popularTools: "Hootsuite, Buffer, Sprout Social",
          helium: true
        },
        {
          capability: "Automated Response Handling",
          popularTools: "Manual responses",
          helium: true
        },
        {
          capability: "Multi-Channel Support",
          popularTools: "Limited channels",
          helium: true
        },
        {
          capability: "Seamless Escalation",
          popularTools: "Limited in most tools",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium provides intelligent 24/7 customer support. The system includes natural language processing with intent recognition, entity extraction, context understanding, multi-turn conversations, and sentiment analysis. It enables automated response handling 80% of routine inquiries automatically, policy information retrieval, payment status lookup, document generation, and simple transactions. The system provides seamless escalation with complex issues routed to agents, context preservation, priority routing, and warm handoff. It supports multi-channel support through web chat, mobile app, SMS, voice (IVR integration), and email. The system continuously learns from interactions, improves responses, identifies new patterns, and updates knowledge base."
      }}
      metrics={[
        {
          icon: RiCheckboxCircleLine,
          value: "80%",
          label: "Automation of routine inquiries"
        },
        {
          icon: RiTimeLine,
          value: "Zero",
          label: "Wait time for automated responses"
        },
        {
          icon: RiTimeLine,
          value: "60%",
          label: "Reduction in call center costs"
        },
        {
          icon: RiHeartLine,
          value: "45%",
          label: "Improvement in customer satisfaction"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Customer Inquiry",
            description: "Customer asks question via any channel"
          },
          {
            title: "Intent Recognition",
            description: "AI understands what customer needs"
          },
          {
            title: "Knowledge Base Search",
            description: "Finds relevant information"
          },
          {
            title: "Response Generation",
            description: "Creates personalized response"
          },
          {
            title: "Confidence Check",
            description: "Validates response quality"
          },
          {
            title: "Automated Response or Escalation",
            description: "Answers or routes to agent"
          },
          {
            title: "Satisfaction Survey",
            description: "Collects feedback"
          },
          {
            title: "Learning Update",
            description: "Improves from interaction"
          }
        ]
      }}
    />
  );
}

