"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiTimeLine, RiCheckboxCircleLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case1Page() {
  return (
    <CaseDetail
      title="Predictive Maintenance & Failure Prevention"
      backHref="/use-cases/maintenance"
      backLabel="Back to Maintenance"
      businessChallenge={{
        title: "Business Challenge",
        description: "Maintenance involves reactive approach, unplanned breakdowns causing 18% downtime, limited prediction capability, high repair costs, and $20M+ annual lost productivity. Maintenance challenges include reactive maintenance, unplanned failures, limited visibility, high costs, and production disruptions."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium enables predictive maintenance with real-time monitoring including equipment status, performance metrics, vibration analysis, temperature monitoring, and anomaly detection. The system provides failure prediction with ML models analyzing equipment data, failure pattern recognition, remaining useful life estimation, and maintenance scheduling. It includes automated alerts with early warning systems, priority routing, maintenance recommendations, and resource allocation. The system enables maintenance optimization with optimal timing, resource planning, spare parts coordination, and cost minimization, plus continuous learning with model improvement, pattern recognition, and optimization."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "70%",
          label: "Reduction in unplanned downtime"
        },
        {
          icon: RiTimeLine,
          value: "Extended",
          label: "Equipment life"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Reduced",
          label: "Maintenance costs"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$18M",
          label: "Annual productivity gain"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Equipment Monitoring",
            description: "Continuously tracks all equipment sensors"
          },
          {
            title: "Anomaly Detection",
            description: "Identifies unusual patterns and deviations"
          },
          {
            title: "Failure Prediction",
            description: "ML models forecast potential failures"
          },
          {
            title: "Early Warning",
            description: "Alerts before equipment fails"
          },
          {
            title: "Maintenance Scheduling",
            description: "Plans optimal maintenance timing"
          },
          {
            title: "Resource Coordination",
            description: "Allocates technicians and spare parts"
          },
          {
            title: "Maintenance Execution",
            description: "Performs preventive maintenance"
          },
          {
            title: "Validation & Learning",
            description: "Verifies effectiveness and improves models"
          }
        ]
      }}
    />
  );
}

