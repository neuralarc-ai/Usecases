import Link from "next/link";

interface SolutionCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href?: string;
}

export default function SolutionCard({ icon: Icon, title, description, href }: SolutionCardProps) {
  const CardContent = (
    <>
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="w-6 h-6 flex items-center justify-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="transition-all"
          >
            <circle 
              cx="12" 
              cy="12" 
              r="10" 
              fill="none"
              stroke="currentColor"
              className="text-white/60 group-hover:fill-white group-hover:stroke-white group-hover:text-white transition-all"
            />
            <path 
              d="m12 16 4-4-4-4" 
              stroke="currentColor"
              className="text-white/60 group-hover:text-gray-900 transition-colors"
            />
            <path 
              d="M8 12h8" 
              stroke="currentColor"
              className="text-white/60 group-hover:text-gray-900 transition-colors"
            />
          </svg>
        </div>
      </div>
      <h5 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-sora)" }}>
        {title}
      </h5>
      <p className="text-base text-white/70 leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>
        {description}
      </p>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
          {CardContent}
        </div>
      </Link>
    );
  }

  return (
    <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
      {CardContent}
    </div>
  );
}

