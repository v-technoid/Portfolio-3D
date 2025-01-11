"use client";
import React, { useState, useEffect } from "react";

const IndiaTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true, // Set to false if you prefer 24-hour format
      });
      setTime(now);
    };

    const timerId = setInterval(updateClock, 1000);
    updateClock();

    return () => clearInterval(timerId);
  }, []);

  return <span>{time}</span>;
};

export default IndiaTime;
