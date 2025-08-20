interface MarqueeProps {
  text: string;
  className?: string;
}

const Marquee = ({ text, className = "" }: MarqueeProps) => {
  return (
    <div className={`w-full overflow-hidden bg-background border-b border-border/20 ${className}`}>
      <div className="marquee py-3">
        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider px-8">
          {text}
        </span>
        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider px-8">
          {text}
        </span>
        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider px-8">
          {text}
        </span>
        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider px-8">
          {text}
        </span>
      </div>
      {/* Animated neon line */}
      <div className="neon-line h-[2px] w-full"></div>
    </div>
  );
};

export default Marquee;