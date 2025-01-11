"use client";
import React, { useState, useEffect } from "react";

const Day = () => {
  const [currentDay, setCurrentDay] = useState("");

  useEffect(() => {
    const updateDay = () => {
      const now = new Date().toLocaleDateString("en-US", {
        weekday: "long", // Returns the full day name, e.g., "Monday"
      });
      setCurrentDay(now);
    };

    updateDay(); // Set the day initially
  }, []); // Empty dependency array to run only once when component mounts

  return <span>{currentDay}</span>;
};

export default Day;
