import { Card } from "@/components/ui/card";
import { Exercise } from "@shared/schema";

interface ExerciseCardProps {
  exercise: Exercise;
  exerciseNumber: number;
  totalExercises: number;
}

export function ExerciseCard({ exercise, exerciseNumber, totalExercises }: ExerciseCardProps) {
  return (
    <Card className="border overflow-hidden" data-testid={`card-exercise-${exerciseNumber}`}>
      <div className="bg-foreground text-background px-4 py-3 flex items-center justify-between">
        <h3 className="font-semibold">Exercise</h3>
        <span className="text-sm" data-testid={`text-exercise-progress`}>
          {exerciseNumber} of {totalExercises}
        </span>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-muted/30">
              <th className="text-left px-4 py-3 font-semibold min-w-[180px]">Exercise Name</th>
              {exercise.sets.map((_, index) => (
                <th key={index} className="px-3 py-3 text-center min-w-[100px]">
                  <div className="space-y-1">
                    <div className="font-semibold text-sm">Set {index + 1}</div>
                  </div>
                </th>
              ))}
              <th className="px-4 py-3 text-center font-semibold bg-destructive text-destructive-foreground min-w-[80px]">
                Rest
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-4">
                <span className="font-semibold text-primary" data-testid={`text-exercise-${exerciseNumber}-name`}>
                  {exercise.name}
                </span>
              </td>
              {exercise.sets.map((set, index) => (
                <td key={index} className="px-3 py-4 text-center" data-testid={`cell-set-${index + 1}`}>
                  <div className="space-y-0.5">
                    <div className="font-medium">{set.reps}</div>
                    <div className="text-sm text-muted-foreground">@ {set.rir} RIR</div>
                  </div>
                </td>
              ))}
              <td className="px-4 py-4 text-center bg-destructive/10 font-medium">
                {exercise.sets[0]?.rest || '-'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
}
