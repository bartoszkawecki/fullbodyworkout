import { Card } from "@/components/ui/card";
import { Exercise } from "@shared/schema";

interface WorkoutTableProps {
  exercises: Exercise[];
  dayLabel: string;
}

export function WorkoutTable({ exercises, dayLabel }: WorkoutTableProps) {
  const maxSets = Math.max(...exercises.map(e => e.sets.length));

  return (
    <Card className="border overflow-hidden" data-testid="card-workout-table">
      <div className="bg-foreground text-background px-4 py-3">
        <h3 className="font-semibold">{dayLabel}</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-muted/30">
              <th className="text-left px-4 py-3 font-semibold min-w-[180px] sticky left-0 bg-muted/30">
                Exercise
              </th>
              {Array.from({ length: maxSets }).map((_, index) => (
                <th key={index} colSpan={2} className="px-3 py-3 text-center border-l">
                  <div className="font-semibold text-sm">Set {index + 1}</div>
                </th>
              ))}
              <th className="px-4 py-3 text-center font-semibold bg-destructive text-destructive-foreground min-w-[80px] border-l">
                Rest
              </th>
            </tr>
            <tr className="border-b bg-muted/30 text-xs">
              <th className="sticky left-0 bg-muted/30"></th>
              {Array.from({ length: maxSets }).map((_, index) => (
                <>
                  <th key={`${index}-reps`} className="px-2 py-2 text-center border-l font-medium text-muted-foreground">
                    Reps
                  </th>
                  <th key={`${index}-rir`} className="px-2 py-2 text-center font-medium text-muted-foreground">
                    RIR
                  </th>
                </>
              ))}
              <th className="bg-destructive text-destructive-foreground border-l"></th>
            </tr>
          </thead>
          <tbody>
            {exercises.map((exercise, exIndex) => (
              <tr 
                key={exIndex} 
                className={`border-b ${exIndex % 2 === 1 ? 'bg-muted/20' : ''}`}
                data-testid={`row-exercise-${exIndex + 1}`}
              >
                <td className="px-4 py-3 sticky left-0 bg-background">
                  <span className="font-semibold text-primary" data-testid={`text-exercise-${exIndex + 1}-name`}>
                    {exercise.name}
                  </span>
                </td>
                {Array.from({ length: maxSets }).map((_, setIndex) => {
                  const set = exercise.sets[setIndex];
                  return (
                    <>
                      <td key={`${setIndex}-reps`} className={`px-3 py-3 text-center border-l ${!set ? 'bg-muted/50' : ''}`}>
                        {set ? <span className="font-medium">{set.reps}</span> : '-'}
                      </td>
                      <td key={`${setIndex}-rir`} className={`px-3 py-3 text-center ${!set ? 'bg-muted/50' : ''}`}>
                        {set ? <span className="text-sm">{set.rir}</span> : '-'}
                      </td>
                    </>
                  );
                })}
                <td className="px-4 py-3 text-center bg-destructive/10 font-medium border-l">
                  {exercise.sets[0]?.rest || '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
