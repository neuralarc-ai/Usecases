"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiShieldLine, RiCheckboxCircleLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case4Page() {
  return (
    <CaseDetail
      title="Shrinkage Detection & Loss Prevention"
      backHref="/use-cases/inventory-management"
      backLabel="Back to Inventory Management"
      businessChallenge={{
        title: "Business Challenge",
        description: "Inventory shrinkage averages 2.5% of revenue ($8M annually for $320M retailer), with 70% going undetected until annual physical counts, manual audits covering only 15% of inventory, limited real-time visibility, reactive loss prevention, and high theft and fraud losses. Shrinkage sources include employee theft (45%), shoplifting (35%), administrative errors (15%), and vendor fraud (5%)."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium detects shrinkage in real-time with real-time monitoring including perpetual inventory tracking, transaction analysis, discrepancy detection, and pattern recognition. The system uses computer vision for theft detection, suspicious behavior, self-checkout monitoring, and stockroom surveillance. It includes predictive analytics for high-risk item identification, high-risk location analysis, high-risk time periods, and employee risk scoring. The system enables automated auditing with cycle counting, variance investigation, root cause analysis, and corrective actions, plus security integration with camera systems, access control, alarm systems, and incident management."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "60%",
          label: "Reduction in shrinkage"
        },
        {
          icon: RiShieldLine,
          value: "Real-time",
          label: "Detection vs annual discovery"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "100%",
          label: "Inventory visibility"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$5M",
          label: "Annual loss prevention"
        }
      ]}
    />
  );
}

