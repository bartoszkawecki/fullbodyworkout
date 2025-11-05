import { useState } from "react";
import { useRoute, useLocation } from "wouter";
import { getWorkout } from "@shared/workoutData";
import { WorkoutTable } from "@/components/WorkoutTable";
import { CompletionCelebration } from "@/components/CompletionCelebration";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { markDayCompleted } from "@/lib/storage";

export default function Workout() {
  const [, params] = useRoute("/week/:week/day/:day");
  const [, setLocation] = useLocation();
  const week = parseInt(params?.week || "1");
  const day = parseInt(params?.day || "1");
  const workout = getWorkout(week, day);

  const [isCompleted, setIsCompleted] = useState(false);

  if (!workout) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Workout not found</p>
      </div>
    );
  }

  const handleComplete = () => {
    markDayCompleted(week, day);
    setIsCompleted(true);
    console.log(`Completed Week ${week}, Day ${day}`);
  };

  const handleReturnHome = () => {
    setLocation("/");
  };

  if (isCompleted) {
    return <CompletionCelebration week={week} day={day} onReturnHome={handleReturnHome} />;
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="sticky top-0 z-50 bg-background border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLocation(`/week/${week}`)}
              data-testid="button-back"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-xl font-bold" data-testid="text-workout-title">
                Week {week}, Day {day}
              </h1>
              <p className="text-sm text-muted-foreground">
                {workout.exercises.length} exercises
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        <WorkoutTable 
          exercises={workout.exercises} 
          dayLabel={`Week ${week} - Day ${day}`}
        />
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4">
        <div className="max-w-4xl mx-auto">
          <Button
            size="lg"
            className="w-full min-h-14"
            onClick={handleComplete}
            data-testid="button-complete-workout"
          >
            Complete Workout
          </Button>
        </div>
      </div>
    </div>
  );
}
