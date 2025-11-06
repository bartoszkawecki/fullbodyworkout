import { useQuery, useMutation } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import exerciseNames from "@shared/exerciseNames.json";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { setCompletionStatus } from "@/lib/storage";
import { apiRequest } from "@/lib/queryClient";

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

  const resetMutation = useMutation({
    mutationFn: async () => {
      return apiRequest("DELETE", "/api/weights");
    },
    onSuccess: () => {
      setCompletionStatus({});
      window.location.reload();
    },
  });

  const handleReset = () => {
    resetMutation.mutate();
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 bg-background border-b">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLocation("/")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <h1 className="text-xl font-semibold">Progress</h1>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
                <RotateCcw className="h-4 w-4" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Reset All Progress?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will clear all workout completion data and delete all weight records from the database. This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleReset} disabled={resetMutation.isPending}>
                  {resetMutation.isPending ? "Resetting..." : "Reset Progress"}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
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
                  onClick={() => setLocation(`/progress/${encodeURIComponent(exerciseName)}`)}
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