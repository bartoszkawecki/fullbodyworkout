import { useState } from "react";
import { useRoute, useLocation } from "wouter";
import { getWorkout } from "@shared/workoutData";
import { ExerciseCard } from "@/components/ExerciseCard";
import { CompletionCelebration } from "@/components/CompletionCelebration";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import { markDayCompleted } from "@/lib/storage";

export default function Workout() {
  const [, params] = useRoute("/week/:week/day/:day");
  const [, setLocation] = useLocation();
  const week = parseInt(params?.week || "1");
  const day = parseInt(params?.day || "1");
  const workout = getWorkout(week, day);

  const [currentExercise, setCurrentExercise] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!workout) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Workout not found</p>
      </div>
    );
  }

  const handleNext = () => {
    if (currentExercise < workout.exercises.length - 1) {
      setCurrentExercise((prev) => prev + 1);
      console.log(`Moving to exercise ${currentExercise + 2}`);
    }
  };

  const handleComplete = () => {
    markDayCompleted(week, day);
    setIsCompleted(true);
    console.log(`Completed Week ${week}, Day ${day}`);
  };

  const handleReturnHome = () => {
    setLocation("/");
  };

  const handleSearchExercise = () => {
    const exerciseName = workout.exercises[currentExercise].name;
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(exerciseName)}&tbm=isch`;
    window.open(searchUrl, "_blank");
    console.log(`Searching images for: ${exerciseName}`);
  };

  if (isCompleted) {
    return <CompletionCelebration week={week} day={day} onReturnHome={handleReturnHome} />;
  }

  const isLastExercise = currentExercise === workout.exercises.length - 1;
  const nextExercise = !isLastExercise ? workout.exercises[currentExercise + 1] : null;

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="sticky top-0 z-50 bg-background border-b">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3 mb-3">
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
              <p className="text-sm text-muted-foreground" data-testid="text-exercise-progress-header">
                Exercise {currentExercise + 1} of {workout.exercises.length}
              </p>
            </div>
          </div>
          <div className="w-full bg-muted rounded-full h-1.5">
            <div
              className="bg-primary h-1.5 rounded-full transition-all"
              style={{ width: `${((currentExercise + 1) / workout.exercises.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        <ExerciseCard
          exercise={workout.exercises[currentExercise]}
          exerciseNumber={currentExercise + 1}
          totalExercises={workout.exercises.length}
        />

        <Button
          variant="outline"
          className="w-full"
          onClick={handleSearchExercise}
          data-testid="button-search-exercise"
        >
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>

        {nextExercise && (
          <Card className="p-4 border" data-testid="card-next-exercise">
            <div className="flex items-center gap-3">
              <ArrowRight className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Next exercise:</p>
                <p className="font-semibold" data-testid="text-next-exercise-name">
                  {nextExercise.name}
                </p>
              </div>
            </div>
          </Card>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4">
        <div className="max-w-2xl mx-auto">
          {isLastExercise ? (
            <Button
              size="lg"
              className="w-full min-h-14"
              onClick={handleComplete}
              data-testid="button-complete-workout"
            >
              Complete Workout
            </Button>
          ) : (
            <Button
              size="lg"
              className="w-full min-h-14"
              onClick={handleNext}
              data-testid="button-next-exercise"
            >
              Next Exercise
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
