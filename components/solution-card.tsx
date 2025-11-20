import Link from "next/link";

interface SolutionCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href?: string;
}

export default function SolutionCard({ icon: Icon, title, description, href }: SolutionCardProps) {
  const CardContent = (
    <div className="flex flex-col h-full">
      {/* Icon and Title Row */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-gray-900" />
        </div>
        <h5 className="text-xl font-bold text-gray-900" style={{ fontFamily: "var(--font-sora)" }}>
          {title}
        </h5>
      </div>
      
      {/* Horizontal Divider */}
      <hr className="border-gray-200 mb-4 w-full" />
      
      {/* Description */}
      <p className="text-base text-gray-600 leading-relaxed mb-4 flex-1" style={{ fontFamily: "var(--font-manrope)" }}>
        {description}
      </p>
      
      {/* Arrow at bottom right */}
      <div className="flex justify-end mt-auto">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="text-gray-400 group-hover:text-gray-900 transition-colors"
        >
          <path d="m9 18 6-6-6-6" stroke="currentColor" />
        </svg>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        <div className="relative bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 group cursor-pointer h-full flex flex-col">
          {CardContent}
        </div>
      </Link>
    );
  }

  return (
    <div className="relative bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 group cursor-pointer h-full flex flex-col">
      {CardContent}
    </div>
  );
}

