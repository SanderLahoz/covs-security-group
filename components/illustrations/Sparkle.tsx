interface SparkleProps {
  x: number;
  y: number;
  scale?: number;
  fill?: string;
}

/** Lille firetakket stjerne brugt som dekoration i illustrationerne. */
export default function Sparkle({ x, y, scale = 1, fill = "#F2B544" }: SparkleProps) {
  return (
    <path
      d="M0 -12 Q0 0 12 0 Q0 0 0 12 Q0 0 -12 0 Q0 0 0 -12Z"
      fill={fill}
      transform={`translate(${x} ${y}) scale(${scale})`}
    />
  );
}
