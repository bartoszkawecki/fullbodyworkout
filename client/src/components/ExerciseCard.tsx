import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WorkoutExercise } from "@shared/workoutData";
import { Dumbbell } from "lucide-react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import type { ExerciseWeight } from "@shared/schema";

interface ExerciseCardProps {
  exercise: WorkoutExercise;
  exerciseNumber: number;
  totalExercises: number;
  week: number;
  day: number;
}

export function ExerciseCard({ exercise, exerciseNumber, totalExercises, week, day }: ExerciseCardProps) {
  const [weight, setWeight] = useState<string>("");
  const [showSuccess, setShowSuccess] = useState(false);

  const { data: existingWeight } = useQuery<ExerciseWeight | null>({
    queryKey: [`/api/weights/${week}/${day}/${encodeURIComponent(exercise.name)}`],
  });

  useEffect(() => {
    if (existingWeight?.weight && weight === "") {
      setWeight(existingWeight.weight);
    }
  }, [existingWeight, weight]);

  const saveMutation = useMutation({
    mutationFn: async () => {
      if (!weight || parseFloat(weight) <= 0) {
        throw new Error("Please enter a valid weight");
      }
      const numericWeight = parseFloat(weight).toFixed(2);
      return apiRequest("POST", "/api/weights", {
        week,
        day,
        exerciseName: exercise.name,
        weight: numericWeight,
      });
    },
    onSuccess: () => {
      setShowSuccess(true);
      queryClient.invalidateQueries({ queryKey: ["/api/exercise-stats"] });
      setTimeout(() => {
        setShowSuccess(false);
        queryClient.invalidateQueries({ queryKey: [`/api/weights/${week}/${day}/${encodeURIComponent(exercise.name)}`] });
      }, 2000);
    },
  });

  const handleSave = () => {
    saveMutation.mutate();
  };
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

        <div className="pt-2 border-t">
          <div className="flex gap-2 items-center">
            <div className="flex-1 relative">
              <Input
                type="number"
                inputMode="decimal"
                step="0.5"
                placeholder="Add Weight"
                className="pr-12"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                data-testid="input-weight"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                kg
              </span>
            </div>
            <Button
              className="bg-primary hover:bg-primary/90"
              onClick={handleSave}
              disabled={saveMutation.isPending || !weight || showSuccess}
              data-testid="button-save-weight"
            >
              {saveMutation.isPending || showSuccess ? "👌" : "Save"}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
