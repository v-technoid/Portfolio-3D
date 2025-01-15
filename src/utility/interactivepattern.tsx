import { cn } from "./animaback";
import React, { useState, useEffect, useRef } from "react";

/**
 * InteractiveGridPattern is a component that renders a grid pattern with interactive squares.
 *
 * @param squareSize - The size of each square.
 * @param className - The class name of the grid container.
 * @param squaresClassName - The class name of the squares.
 */
interface InteractiveGridPatternProps extends React.SVGProps<SVGSVGElement> {
  squareSize?: number; // Size of each square
  className?: string;
  squaresClassName?: string;
}

/**
 * The InteractiveGridPattern component.
 *
 * @see InteractiveGridPatternProps for the props interface.
 * @returns A React component.
 */
export function InteractiveGridPattern({
  squareSize = 40,
  className,
  squaresClassName,
  ...props
}: InteractiveGridPatternProps) {
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const [hoveredSquare, setHoveredSquare] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (gridRef.current) {
        setDimensions({
          width: gridRef.current.offsetWidth,
          height: gridRef.current.offsetHeight,
        });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const horizontal = Math.ceil(dimensions.width / squareSize);
  const vertical = Math.ceil(dimensions.height / squareSize);

  return (
    <div ref={gridRef} className="absolute inset-0 h-full w-full">
      <svg
        width={dimensions.width}
        height={dimensions.height}
        className={cn(
          "absolute inset-0 h-full w-full",
          className,
        )}
        {...props}
      >
        {Array.from({ length: horizontal * vertical }).map((_, index) => {
          const x = (index % horizontal) * squareSize;
          const y = Math.floor(index / horizontal) * squareSize;
          return (
            <rect
              key={index}
              x={x}
              y={y}
              width={squareSize}
              height={squareSize}
              className={cn(
                "stroke-gray-400/30 transition-all duration-200 ease-in-out",
                hoveredSquare === index ? "fill-blue-300/100" : "fill-transparent",
                squaresClassName,
              )}
              onMouseEnter={() => setHoveredSquare(index)}
              onMouseLeave={() => setHoveredSquare(null)}
            />
          );
        })}
      </svg>
    </div>
  );
}
