"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiFocus3Line, RiTimeLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case4Page() {
  return (
    <CaseDetail
      title="Omnichannel Customer Journey Optimization"
      backHref="/use-cases/customer-experience"
      backLabel="Back to Customer Experience"
      businessChallenge={{
        title: "Business Challenge",
        description: "Customer journeys tracked separately by channel, missing 70% of cross-channel behavior, fragmented customer experience, 35% customer frustration from inconsistency, $10M+ in lost revenue from poor experience, and limited personalization. Journey challenges include siloed channel data, no unified view, inconsistent experiences, poor channel transitions, and limited optimization."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium unifies customer journey with unified journey tracking capturing all touchpoints, cross-channel visibility, real-time updates, and historical analysis. The system provides journey optimization with friction point identification, conversion optimization, channel effectiveness, and path analysis. It includes next-best-action with personalized recommendations, optimal timing, channel selection, and content personalization. The system enables seamless transitions with cart synchronization, preference persistence, context preservation, and consistent experience, plus journey analytics with conversion funnels, drop-off analysis, channel attribution, and ROI measurement."
      }}
      metrics={[
        {
          icon: RiFocus3Line,
          value: "360°",
          label: "Customer journey visibility"
        },
        {
          icon: RiBarChartLine,
          value: "50%",
          label: "Improvement in conversion rates"
        },
        {
          icon: RiTimeLine,
          value: "45%",
          label: "Reduction in customer effort"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$15M",
          label: "Annual revenue increase"
        }
      ]}
    />
  );
}

