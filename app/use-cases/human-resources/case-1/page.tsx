"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiFocus3Line, RiShieldLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case1Page() {
  return (
    <CaseDetail
      title="AI-Powered Resume Screening & Candidate Matching"
      backHref="/use-cases/human-resources"
      backLabel="Back to Human Resources"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "HR teams receive 500-1000 applications per role, spending 23 hours per hire on manual resume screening",
          "Traditional ATS rely on keyword-only matching, resulting in 40% of qualified candidates being overlooked",
          "Unconscious bias in manual screening processes and extended time-to-hire averaging 45+ days",
          "Loss of top talent to competitors, high recruiter burnout, and $125K+ cost per unfilled critical role"
        ]
      }}
      toolsUsed={[
        {
          category: "Task & Project Management",
          tools: ["Asana", "Linear", "Monday.com"]
        },
        {
          category: "Knowledge Management",
          tools: ["Confluence", "Notion", "SharePoint"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Semantic Resume Analysis",
          popularTools: "Asana, Linear, Monday.com",
          helium: true
        },
        {
          capability: "AI-Powered Candidate Matching",
          popularTools: "Confluence, Notion, SharePoint",
          helium: true
        },
        {
          capability: "Bias Detection & Mitigation",
          popularTools: "Limited in most tools",
          helium: true
        },
        {
          capability: "Automated Screening",
          popularTools: "Manual processes",
          helium: true
        },
        {
          capability: "Real-Time Candidate Scoring",
          popularTools: "Static keyword matching",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium classifies claims and assesses severity using AI, detecting fraud indicators automatically. Intelligent routing to appropriate adjusters based on expertise, priority scoring for urgent claims, and automated customer communication streamline the entire process."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "85%",
          label: "Reduction in screening time"
        },
        {
          icon: RiFocus3Line,
          value: "40%",
          label: "Increase in qualified candidate identification"
        },
        {
          icon: RiShieldLine,
          value: "60%",
          label: "Faster time-to-hire"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$125K",
          label: "Annual cost savings per recruiter"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Resume Upload",
            description: "Candidates submit resumes through career portal, email, or ATS"
          },
          {
            title: "AI Analysis & Parsing",
            description: "NLP extracts all relevant information (education, experience, skills, certifications)"
          },
          {
            title: "Skill Extraction",
            description: "Identifies technical skills, soft skills, domain expertise, and certifications"
          },
          {
            title: "Job Matching Algorithm",
            description: "Scores candidates against job requirements using ML models"
          },
          {
            title: "Bias Check",
            description: "Analyzes for potential bias factors and adjusts scoring"
          },
          {
            title: "Ranked Candidate List",
            description: "Generates prioritized shortlist with confidence scores"
          },
          {
            title: "HR Review Dashboard",
            description: "Presents top candidates with AI insights and recommendations"
          }
        ]
      }}
    />
  );
}

