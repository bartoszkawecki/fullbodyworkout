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
          <div className="bicep-emoji animate-bicep-fall" style={{ left: "10%", animationDelay: "0s" }}>💪</div>
          <div className="bicep-emoji animate-bicep-fall" style={{ left: "25%", animationDelay: "0.3s" }}>💪</div>
          <div className="bicep-emoji animate-bicep-fall" style={{ left: "40%", animationDelay: "0.1s" }}>💪</div>
          <div className="bicep-emoji animate-bicep-fall" style={{ left: "55%", animationDelay: "0.4s" }}>💪</div>
          <div className="bicep-emoji animate-bicep-fall" style={{ left: "70%", animationDelay: "0.2s" }}>💪</div>
          <div className="bicep-emoji animate-bicep-fall" style={{ left: "85%", animationDelay: "0.5s" }}>💪</div>
        </>
      )}

      <div className="text-center space-y-6 max-w-md z-10">
        <div className="flex justify-center">
          <div className="text-9xl animate-scale-in">💪</div>
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
        @keyframes bicep-fall {
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

        .animate-bicep-fall {
          animation: bicep-fall 3s linear forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }

        .bicep-emoji {
          position: absolute;
          font-size: 2rem;
          top: -50px;
          user-select: none;
        }
      `}</style>
    </div>
  );
}
