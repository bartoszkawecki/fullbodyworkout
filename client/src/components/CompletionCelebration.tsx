import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface CompletionCelebrationProps {
  week: number;
  day: number;
  onReturnHome: () => void;
}

export function CompletionCelebration({ week, day, onReturnHome }: CompletionCelebrationProps) {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background relative overflow-hidden">
      {showConfetti && (
        <>
          <div className="confetti-piece animate-confetti-fall" style={{ left: "10%", animationDelay: "0s" }} />
          <div className="confetti-piece animate-confetti-fall" style={{ left: "30%", animationDelay: "0.2s" }} />
          <div className="confetti-piece animate-confetti-fall" style={{ left: "50%", animationDelay: "0.4s" }} />
          <div className="confetti-piece animate-confetti-fall" style={{ left: "70%", animationDelay: "0.1s" }} />
          <div className="confetti-piece animate-confetti-fall" style={{ left: "90%", animationDelay: "0.3s" }} />
        </>
      )}

      <div className="text-center space-y-6 max-w-md z-10">
        <div className="flex justify-center">
          <CheckCircle2 className="h-24 w-24 text-primary animate-scale-in" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold" data-testid="text-completion-title">
            Workout Complete!
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="text-completion-subtitle">
            Great job finishing Week {week}, Day {day}
          </p>
        </div>
        <Button
          size="lg"
          className="w-full min-h-14"
          onClick={onReturnHome}
          data-testid="button-return-home"
        >
          Return Home
        </Button>
      </div>

      <style>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes scale-in {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-confetti-fall {
          animation: confetti-fall 3s linear forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }

        .confetti-piece {
          position: absolute;
          width: 10px;
          height: 10px;
          background: hsl(var(--primary));
          top: -10px;
        }

        .confetti-piece:nth-child(2n) {
          background: hsl(var(--chart-2));
        }

        .confetti-piece:nth-child(3n) {
          background: hsl(var(--chart-4));
        }
      `}</style>
    </div>
  );
}
