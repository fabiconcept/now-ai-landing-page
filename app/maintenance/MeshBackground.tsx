'use client';

import { useEffect, useRef } from 'react';

export function MeshBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initial resize
    resizeCanvas();

    // Handle window resize
    window.addEventListener('resize', resizeCanvas);

    // Colors - more vibrant green theme
    const colors = [
      'rgba(160, 230, 165, 0.9)',  // Vibrant light green
      'rgba(125, 203, 133, 0.85)', // Vibrant medium green
      'rgba(89, 179, 102, 0.8)',   // Vibrant green
      'rgba(62, 157, 76, 0.75)',   // Vibrant soft green
      'rgba(255, 255, 255, 0.8)',  // Bright white
      'rgba(200, 238, 200, 0.85)'  // Bright off-white with green tint
    ];

    // Animation variables
    let time = 0;
    const points = Array.from({ length: 5 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: Math.random() * 2 - 1,
      vy: Math.random() * 2 - 1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const animate = () => {
      if (!ctx) return;
      
      // Clear with a vibrant green background
      ctx.fillStyle = '#e0f7e0';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add a subtle overlay
      ctx.fillStyle = 'rgba(220, 247, 220, 0.8)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update points
      points.forEach((point) => {
        point.x += point.vx;
        point.y += point.vy;

        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;
      });

      // Draw connections
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 300) {
            ctx.beginPath();
            ctx.strokeStyle = points[i].color;
            ctx.lineWidth = 1 - distance / 300;
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw points
      points.forEach((point) => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = point.color;
        ctx.fill();
      });

      time += 0.005;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 h-screen w-full"
      aria-hidden="true"
    />
  );
}
