import Link from "next/link";

interface Metric {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

interface DetailCardProps {
  number: number;
  title: string;
  description: string;
  metrics: Metric[];
  href?: string;
}

export default function DetailCard({ number, title, description, metrics, href = "#" }: DetailCardProps) {
  return (
    <div className="h-full flex flex-col bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
          <span className="text-white font-bold text-lg">{number}</span>
        </div>
        <div className="flex-1">
          <h5 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-sora)" }}>
            {title}
          </h5>
          <p className="text-base text-white/70 leading-relaxed mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
            {description}
          </p>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4 flex-1">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div 
              key={index} 
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 rounded-full border border-blue-400/30"
            >
              <Icon className="w-3.5 h-3.5 text-blue-300 shrink-0" />
              <span className="text-xs text-blue-200 font-medium" style={{ fontFamily: "var(--font-manrope)" }}>
                {metric.text}
              </span>
            </div>
          );
        })}
      </div>
      
      <div className="mt-auto">
        <Link 
          href={href}
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          View Details
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

