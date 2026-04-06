import { useEffect, useRef } from 'react';

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match parent
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters - mix of katakana, latin, numbers and symbols
    const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?/~';
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);

    // Initialize drops - start at random positions
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -50);
    }

    // Animation frame
    let animationFrameId: number;
    let lastTime = 0;
    const fps = 20; // Frames per second
    const interval = 1000 / fps;

    const draw = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;

      if (deltaTime > interval) {
        // Semi-transparent black for fade/trail effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
          // Pick random character
          const char = characters[Math.floor(Math.random() * characters.length)];

          // Varying brightness for depth effect
          const brightness = Math.random() * 0.5 + 0.5;
          ctx.fillStyle = `rgba(0, 255, 70, ${brightness})`;

          // Draw the character
          const x = i * fontSize;
          const y = drops[i] * fontSize;
          ctx.fillText(char, x, y);

          // Reset drop to top randomly
          if (y > canvas.height && Math.random() > 0.95) {
            drops[i] = 0;
          }

          // Move drop down
          drops[i]++;
        }

        lastTime = currentTime;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-50 pointer-events-none"
      style={{ width: '100%', height: '100%' }}
    />
  );
}