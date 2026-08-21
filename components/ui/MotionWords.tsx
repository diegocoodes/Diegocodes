import type { CSSProperties } from "react";

type MotionWord = {
  text: string;
  className?: string;
};

type MotionWordsProps = {
  words: readonly (string | MotionWord)[];
  className?: string;
};

export default function MotionWords({ words, className }: MotionWordsProps) {
  return (
    <span className={className}>
      {words.map((word, index) => {
        const value = typeof word === "string" ? word : word.text;
        const wordClassName = typeof word === "string" ? "" : word.className ?? "";

        return (
          <span
            key={`${value}-${index}`}
            className="motion-word-clip inline-block overflow-hidden align-bottom"
          >
            <span
              className={`motion-word inline-block ${wordClassName}`}
              style={
                {
                  "--word-delay": `${Math.min(index * 42, 252)}ms`,
                } as CSSProperties
              }
            >
              {value}
            </span>
            {index < words.length - 1 ? <>&nbsp;</> : null}
          </span>
        );
      })}
    </span>
  );
}
