"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiHeartLine, RiMoneyDollarCircleLine, RiBarChartLine } from "react-icons/ri";

export default function Case5Page() {
  return (
    <CaseDetail
      title="Proactive Customer Communication & Updates"
      backHref="/use-cases/claims-processing"
      backLabel="Back to Claims Processing"
      businessChallenge={{
        title: "Business Challenge",
        description: "Customers call 3-4 times per claim for status updates, consuming 30% of adjuster time, $2.5M annually in call center costs. Lack of proactive communication leads to 35% dissatisfaction with claims experience, 20% of customers considering switching, negative reviews and reputation damage, and lost cross-sell opportunities. Communication gaps include no automated status updates, reactive vs proactive communication, inconsistent messaging, limited self-service options, and poor mobile experience."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium provides proactive, personalized communication. The system enables automated status updates with claim milestones triggering notifications, personalized messages, multi-channel delivery (SMS, email, app, voice), preferred channel selection, and language preferences. It includes an AI-powered chatbot with 24/7 availability, natural language understanding, claim status inquiries, document submission, payment status, and seamless escalation to human. The system provides predictive communication that anticipates customer questions, proactive updates before customers ask, timeline expectations, and next steps guidance. It includes personalized explanations for settlement calculations, coverage details, deductible application, payment breakdown, and plain language explanations. The system supports multi-channel notifications with SMS for urgent updates, email for detailed information, app push notifications, voice calls for complex issues, and portal updates."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "70%",
          label: "Reduction in status inquiry calls"
        },
        {
          icon: RiHeartLine,
          value: "60%",
          label: "Improvement in customer satisfaction"
        },
        {
          icon: RiTimeLine,
          value: "50%",
          label: "Reduction in adjuster communication time"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$1.8M",
          label: "Annual cost savings"
        }
      ]}
    />
  );
}

