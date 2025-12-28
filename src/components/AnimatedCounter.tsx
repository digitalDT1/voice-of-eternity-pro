import { useCountUp } from "@/hooks/useCountUp";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  label: string;
}

export const AnimatedCounter = ({ end, suffix = "", duration = 2000, label }: AnimatedCounterProps) => {
  const { count, ref } = useCountUp({ end, duration });

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold font-serif mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-white/80">{label}</div>
    </div>
  );
};
