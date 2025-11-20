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
        description: "Claims adjusters spend 45 minutes per claim on initial assessment and routing. Manual triage misses 30% of fraud indicators and routes 25% of claims incorrectly."
      }}
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

