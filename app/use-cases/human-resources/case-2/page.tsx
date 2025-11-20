"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiCheckboxCircleLine, RiEmotionHappyLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case2Page() {
  return (
    <CaseDetail
      title="Intelligent Employee Onboarding Automation"
      backHref="/use-cases/human-resources"
      backLabel="Back to Human Resources"
      businessChallenge={{
        title: "Business Challenge",
        description: "New employee onboarding in banking involves 47 manual steps across 6 departments (HR, IT, Legal, Facilities, Finance, Department Manager), taking 3-4 weeks to complete. This fragmented process creates inconsistent onboarding experiences across departments, 20% of new hires feeling unprepared for their roles, high administrative burden on HR (15+ hours per new hire), compliance gaps with missed training or documentation, poor first impressions impacting 90-day retention, and delayed productivity (new hires not fully productive for 60+ days)."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium orchestrates the entire onboarding process automatically, creating personalized journeys for each new hire. The system coordinates all departments automatically with dependencies and parallel processing, customizes onboarding based on role, department, location, and seniority, creates all required paperwork (employment agreements, tax forms, policies, etc.), enables remote document signing with DocuSign and Adobe Sign, assigns and tracks required regulatory and role-specific training, and provides real-time visibility for HR, managers, and new hires."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "70%",
          label: "Reduction in onboarding time"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "95%",
          label: "Compliance rate for training"
        },
        {
          icon: RiEmotionHappyLine,
          value: "35%",
          label: "Improvement in new hire satisfaction"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$85K",
          label: "Annual savings per 100 new hires"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Offer Acceptance",
            description: "Candidate accepts offer in system"
          },
          {
            title: "Automated Workflow Trigger",
            description: "Initiates all department-specific tasks"
          },
          {
            title: "Document Generation",
            description: "Creates personalized employment documents"
          },
          {
            title: "IT Provisioning",
            description: "Sets up email, systems access, equipment orders"
          },
          {
            title: "Training Assignment",
            description: "Assigns role-specific and compliance training"
          },
          {
            title: "Compliance Verification",
            description: "Ensures all regulatory requirements met"
          },
          {
            title: "Manager Notification",
            description: "Alerts manager when new hire is ready"
          },
          {
            title: "Progress Dashboard",
            description: "Tracks completion across all steps in real-time"
          }
        ]
      }}
    />
  );
}

