import { Card } from "@/components/ui/card";
import { WorkoutExercise } from "@shared/workoutData";
import { Dumbbell } from "lucide-react";

interface ExerciseCardProps {
  exercise: WorkoutExercise;
  exerciseNumber: number;
  totalExercises: number;
}

export function ExerciseCard({ exercise, exerciseNumber, totalExercises }: ExerciseCardProps) {
  return (
    <Card className="border" data-testid={`card-exercise-${exerciseNumber}`}>
      <div className="p-6 space-y-4">
        <div className="flex items-start gap-3">
          <div className="mt-1">
            <Dumbbell className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-lg font-semibold text-primary" data-testid={`text-exercise-${exerciseNumber}-name`}>
                {exercise.name}
              </h3>
              <span className="text-sm text-muted-foreground whitespace-nowrap" data-testid={`text-exercise-progress`}>
                {exerciseNumber}/{totalExercises}
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          {exercise.sets.map((set, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 rounded-md bg-muted/50"
              data-testid={`row-set-${index + 1}`}
            >
              <span className="font-medium text-sm min-w-[3.5rem]">
                Set {index + 1}
              </span>
              <div className="flex-1 flex items-center gap-2 text-sm">
                <span className="font-medium">{set.reps} reps</span>
                {set.rir !== null && (
                  <>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">@ {set.rir} RIR</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="pt-2 border-t">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Rest:</span> {exercise.rest} min
          </p>
        </div>
      </div>
    </Card>
  );
}
