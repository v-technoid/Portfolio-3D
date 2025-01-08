import { memo, useEffect, useState } from 'react';

type LogoProps = {
  className?: string;
};

function Logo_({ className }: LogoProps) {
  const [color, setColor] = useState('#FFD700'); // Default morning color

  // Function to update the color dynamically based on time
  const updateColor = () => {
    const hours = new Date().getHours();
    let newColor;

    if (hours >= 6 && hours < 12) {
      newColor = '#AB1FC7FF'; // Morning: Yellow
    } else if (hours >= 12 && hours < 18) {
      newColor = '#1EFF87FF'; // Afternoon: Blue
    } else if (hours >= 18 && hours < 21) {
      newColor = '#FF8C00'; // Evening: Orange
    } else {
      newColor = '#000590FF'; // Night: Purple
    }
    setColor(newColor);
  };

  useEffect(() => {
    updateColor(); // Set initial color
    const interval = setInterval(updateColor, 60000); // Update every minute
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <svg
      viewBox="0 0 200 200"
      width="50"
      height="50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="100" cy="100" r="95" stroke={color} strokeWidth="4" />
      <circle cx="100" cy="100" r="90" stroke={color} strokeWidth="3" />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        fill={color}
        fontSize="50"
        fontWeight="bold"
      >
        VP
      </text>
    </svg>
  );
}

export const Logo = memo(Logo_);
