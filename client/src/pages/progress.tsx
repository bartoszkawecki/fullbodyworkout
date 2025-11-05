import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import exerciseNames from "@shared/exerciseNames.json";

interface ExerciseStats {
  exerciseName: string;
  recordCount: number;
  bestWeight: number | null;
}

export default function Progress() {
  const [, setLocation] = useLocation();

  const { data: stats, isLoading } = useQuery<ExerciseStats[]>({
    queryKey: ["/api/exercise-stats"],
  });

  const statsMap = new Map(
    stats?.map((s) => [s.exerciseName, s]) || []
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLocation("/")}
            data-testid="button-back-home"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-3xl font-bold text-primary" data-testid="text-progress-title">
            Progress
          </h1>
        </div>

        <div className="space-y-3">
          {isLoading ? (
            <div className="text-center py-8 text-muted-foreground">
              Loading...
            </div>
          ) : (
            exerciseNames.map((exerciseName: string) => {
              const stat = statsMap.get(exerciseName);
              const recordCount = stat?.recordCount || 0;
              const bestWeight = stat?.bestWeight || 0;

              return (
                <Card
                  key={exerciseName}
                  className="p-4 hover-elevate active-elevate-2 cursor-pointer transition-all"
                  data-testid={`card-exercise-${exerciseName.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold" data-testid={`text-exercise-name-${exerciseName.toLowerCase().replace(/\s+/g, "-")}`}>
                      {exerciseName}
                    </h3>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span data-testid={`text-record-count-${exerciseName.toLowerCase().replace(/\s+/g, "-")}`}>
                        Number of records: {recordCount}
                      </span>
                      <span data-testid={`text-best-weight-${exerciseName.toLowerCase().replace(/\s+/g, "-")}`}>
                        Best rep: {bestWeight} kg
                      </span>
                    </div>
                  </div>
                </Card>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
