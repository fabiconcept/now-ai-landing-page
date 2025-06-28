'use client';

import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    // Update immediately
    setTimeLeft(calculateTimeLeft());

    // Then update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (time: number, label: string) => (
    <div className="flex flex-col items-center">
      <span className="text-2xl font-bold">{time.toString().padStart(2, '0')}</span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );

  return (
    <div className="pt-12">
      <p className="mb-4 text-muted-foreground/50">Estimated time remaining:</p>
      <div className="flex justify-center gap-4">
        {formatTime(timeLeft.days, 'Days')}
        <span className="text-2xl font-bold">:</span>
        {formatTime(timeLeft.hours, 'Hours')}
        <span className="text-2xl font-bold">:</span>
        {formatTime(timeLeft.minutes, 'Minutes')}
        <span className="text-2xl font-bold">:</span>
        {formatTime(timeLeft.seconds, 'Seconds')}
      </div>
    </div>
  );
}
