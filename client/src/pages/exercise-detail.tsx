import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useParams } from "wouter";
import type { ExerciseWeight } from "@shared/schema";

export default function ExerciseDetail() {
  const [, setLocation] = useLocation();
  const params = useParams();
  const exerciseName = decodeURIComponent(params.exerciseName || "");

  const { data: history, isLoading } = useQuery<ExerciseWeight[]>({
    queryKey: [`/api/weights/history/${encodeURIComponent(exerciseName)}`],
  });

  const recordCount = history?.length || 0;
  const bestWeight = history && history.length > 0
    ? Math.max(...history.map(h => parseFloat(h.weight)))
    : 0;

  const sortedHistory = history
    ? [...history].sort((a, b) => {
        if (b.week !== a.week) return b.week - a.week;
        return b.day - a.day;
      })
    : [];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLocation("/progress")}
            data-testid="button-back-progress"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-3xl font-bold text-primary" data-testid="text-exercise-detail-title">
            {exerciseName}
          </h1>
        </div>

        <Card className="p-6">
          <div className="flex gap-6 text-sm text-muted-foreground">
            <span data-testid="text-detail-record-count">
              Number of records: {recordCount}
            </span>
            <span data-testid="text-detail-best-weight">
              Best rep: {bestWeight} kg
            </span>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">History</h2>
          
          {isLoading ? (
            <div className="text-center py-8 text-muted-foreground">
              Loading...
            </div>
          ) : sortedHistory.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No records found
            </div>
          ) : (
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-4 pb-2 border-b font-semibold text-sm">
                <div>Workout</div>
                <div>Weight</div>
              </div>
              {sortedHistory.map((record, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 gap-4 py-2 border-b last:border-b-0"
                  data-testid={`row-history-${index}`}
                >
                  <div data-testid={`text-workout-${index}`}>
                    Week {record.week} Day {record.day}
                  </div>
                  <div data-testid={`text-weight-${index}`}>
                    {parseFloat(record.weight)} kg
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
