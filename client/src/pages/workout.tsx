import { useState, useRef } from "react";
import { useRoute, useLocation } from "wouter";
import { getWorkout, getBlockForWeek } from "@shared/workoutData";
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
  const blockName = getBlockForWeek(week);

  const [currentExercise, setCurrentExercise] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [swipeOffset, setSwipeOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  if (!workout) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Workout not found</p>
      </div>
    );
  }

  const handleNext = () => {
    if (currentExercise < workout.exercises.length - 1) {
      setIsTransitioning(true);
      setCurrentExercise((prev) => prev + 1);
      setSwipeOffset(0);
      setTimeout(() => setIsTransitioning(false), 300);
      console.log(`Moving to exercise ${currentExercise + 2}`);
    }
  };

  const handlePrevious = () => {
    if (currentExercise > 0) {
      setIsTransitioning(true);
      setCurrentExercise((prev) => prev - 1);
      setSwipeOffset(0);
      setTimeout(() => setIsTransitioning(false), 300);
      console.log(`Moving to exercise ${currentExercise}`);
    }
  };

  const handleComplete = () => {
    markDayCompleted(week, day);
    setIsCompleted(true);
    console.log(`Completed Week ${week}, Day ${day}`);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;
    
    const currentX = e.touches[0].clientX;
    touchEndX.current = currentX;
    const diff = currentX - touchStartX.current;
    
    // Limit swipe range
    const maxSwipe = 300;
    const constrainedDiff = Math.max(-maxSwipe, Math.min(maxSwipe, diff));
    
    // Don't allow swiping beyond boundaries
    if ((currentExercise === 0 && diff > 0) || 
        (currentExercise === workout.exercises.length - 1 && diff < 0)) {
      setSwipeOffset(constrainedDiff * 0.2); // Reduced resistance at boundaries
    } else {
      setSwipeOffset(constrainedDiff);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    // Get final touch position
    if (e.changedTouches.length > 0) {
      touchEndX.current = e.changedTouches[0].clientX;
    }

    const swipeThreshold = 50; // minimum distance for a swipe
    const diff = touchStartX.current - touchEndX.current;

    // Only navigate if actual swipe occurred (not just a tap)
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0 && currentExercise < workout.exercises.length - 1) {
        // Swiped left - go to next exercise
        handleNext();
      } else if (diff < 0 && currentExercise > 0) {
        // Swiped right - go to previous exercise
        handlePrevious();
      } else {
        // At boundary - snap back
        setSwipeOffset(0);
      }
    } else {
      // Snap back if not enough swipe
      setSwipeOffset(0);
    }

    // Reset
    touchStartX.current = 0;
    touchEndX.current = 0;
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
    <div className="fixed inset-0 overflow-hidden bg-background flex flex-col">
      <div className="sticky top-0 z-50 bg-background border-b flex-shrink-0">
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
                Week {week} - {blockName}
              </h1>
              <p className="text-sm text-muted-foreground" data-testid="text-exercise-progress-header">
                Day {day} • Exercise {currentExercise + 1} of {workout.exercises.length}
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

      <div className="flex-1 overflow-hidden">
        <div className="max-w-2xl mx-auto px-4 py-6 pb-28 space-y-4">
        <div
          className="relative overflow-hidden"
          data-testid="exercise-swipe-container"
        >
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="flex"
            style={{
              transform: `translateX(calc(-${currentExercise * 100}% + ${swipeOffset}px))`,
              transition: isTransitioning || swipeOffset === 0 ? 'transform 300ms ease-out' : 'none',
            }}
          >
            {workout.exercises.map((exercise, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-1"
              >
                <ExerciseCard
                  exercise={exercise}
                  exerciseNumber={index + 1}
                  totalExercises={workout.exercises.length}
                  week={week}
                  day={day}
                />
              </div>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full"
          onClick={handleSearchExercise}
          data-testid="button-search-exercise"
        >
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>

        {nextExercise ? (
          <Card 
            className="p-4 border bg-primary text-primary-foreground hover-elevate active-elevate-2 cursor-pointer" 
            data-testid="card-next-exercise"
            onClick={handleNext}
          >
            <div className="flex items-center gap-3">
              <ArrowRight className="h-5 w-5" />
              <div>
                <p className="text-sm opacity-90">Next exercise:</p>
                <p className="font-semibold" data-testid="text-next-exercise-name">
                  {nextExercise.name}
                </p>
              </div>
            </div>
          </Card>
        ) : (
          <Card 
            className="p-4 border bg-primary text-primary-foreground hover-elevate active-elevate-2 cursor-pointer" 
            data-testid="card-complete-workout"
            onClick={handleComplete}
          >
            <div className="flex items-center gap-3">
              <ArrowRight className="h-5 w-5" />
              <div>
                <p className="font-semibold">Complete Workout</p>
              </div>
            </div>
          </Card>
        )}
        </div>
      </div>
    </div>
  );
}
