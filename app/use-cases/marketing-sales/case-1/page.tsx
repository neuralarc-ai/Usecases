"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiBarChartLine, RiCheckboxCircleLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case1Page() {
  return (
    <CaseDetail
      title="AI-Generated Marketing Content & Campaigns"
      backHref="/use-cases/marketing-sales"
      backLabel="Back to Marketing & Sales"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Content creation takes 40 hours per campaign with 60% of content underperforming",
          "Manual A/B testing covering only 10% of variations with limited personalization",
          "Slow time-to-market and $5M+ in wasted marketing spend",
          "Content challenges include writer's block, inconsistent brand voice, limited testing, poor performance prediction, and high agency costs"
        ]
      }}
      toolsUsed={[
        {
          category: "Document Generation",
          tools: ["Jasper", "Copy.ai", "Writesonic"]
        },
        {
          category: "Social Media Management",
          tools: ["Hootsuite", "Buffer", "Sprout Social"]
        },
        {
          category: "Data Analysis & Visualization",
          tools: ["Tableau", "Power BI", "Looker"]
        }
      ]}
      comparisonTable={[
        {
          capability: "AI Content Generation",
          popularTools: "Jasper, Copy.ai, Writesonic",
          helium: true
        },
        {
          capability: "Automated A/B Testing",
          popularTools: "Manual testing (10% coverage)",
          helium: true
        },
        {
          capability: "Performance Prediction",
          popularTools: "Post-launch analysis",
          helium: true
        },
        {
          capability: "Brand Voice Consistency",
          popularTools: "Manual review",
          helium: true
        },
        {
          capability: "End-to-End Automation",
          popularTools: "Hootsuite, Buffer, Sprout Social",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium generates high-performing content with AI content generation for email copy, social media posts, product descriptions, ad copy, blog articles, and video scripts. The system provides brand voice consistency with tone and style matching, terminology adherence, messaging alignment, and quality control. It includes automated A/B testing with 1000+ variations, multivariate testing, real-time optimization, and statistical significance. The system enables performance prediction with pre-launch scoring, expected CTR and conversion, audience matching, and channel optimization, plus multi-channel orchestration with email campaigns, social media, display ads, SMS marketing, and push notifications."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "90%",
          label: "Reduction in content creation time"
        },
        {
          icon: RiBarChartLine,
          value: "150%",
          label: "Improvement in campaign performance"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "1000%",
          label: "Increase in A/B test coverage"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$8M",
          label: "Annual marketing efficiency gain"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Campaign Brief",
            description: "Defines objectives and audience"
          },
          {
            title: "AI Content Generation",
            description: "Creates multiple content variations"
          },
          {
            title: "Variation Creation",
            description: "Generates 100+ versions"
          },
          {
            title: "Performance Prediction",
            description: "Scores expected performance"
          },
          {
            title: "A/B Test Setup",
            description: "Configures testing parameters"
          },
          {
            title: "Automated Launch",
            description: "Deploys across channels"
          },
          {
            title: "Real-Time Optimization",
            description: "Adjusts based on performance"
          },
          {
            title: "Performance Analysis",
            description: "Measures results and learns"
          }
        ]
      }}
    />
  );
}

