import { useQuery, useMutation } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useParams } from "wouter";
import type { ExerciseWeight } from "@shared/schema";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { apiRequest, queryClient } from "@/lib/queryClient";

export default function ExerciseDetail() {
  const [, setLocation] = useLocation();
  const params = useParams();
  const exerciseName = decodeURIComponent(params.exerciseName || "");

  const { data: history, isLoading } = useQuery<ExerciseWeight[]>({
    queryKey: [`/api/weights/history/${encodeURIComponent(exerciseName)}`],
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      return apiRequest("DELETE", `/api/weights/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`/api/weights/history/${encodeURIComponent(exerciseName)}`] });
      queryClient.invalidateQueries({ queryKey: ["/api/exercise-stats"] });
    },
  });

  const recordCount = history?.length || 0;
  const bestWeight = history && history.length > 0
    ? Math.max(...history.map(h => parseFloat(h.weight)))
    : 0;

  const sortedHistoryDescending = history
    ? [...history].sort((a, b) => {
        if (b.week !== a.week) return b.week - a.week;
        return b.day - a.day;
      })
    : [];

  const chartData = history
    ? [...history]
        .sort((a, b) => {
          if (a.week !== b.week) return a.week - b.week;
          return a.day - b.day;
        })
        .map((record) => ({
          name: `W${record.week}D${record.day}`,
          weight: parseFloat(record.weight),
          fullName: `Week ${record.week} Day ${record.day}`,
        }))
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
          ) : sortedHistoryDescending.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No records found
            </div>
          ) : (
            <>
              <div className="mb-8" data-testid="chart-progress">
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={chartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis 
                      dataKey="name" 
                      className="text-xs fill-muted-foreground"
                      tick={{ fill: 'hsl(var(--muted-foreground))' }}
                    />
                    <YAxis 
                      className="text-xs fill-muted-foreground"
                      tick={{ fill: 'hsl(var(--muted-foreground))' }}
                      label={{ value: 'Weight (kg)', angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted-foreground))' }}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                      }}
                      labelFormatter={(label) => {
                        const item = chartData.find(d => d.name === label);
                        return item?.fullName || label;
                      }}
                      formatter={(value: number) => [`${value} kg`, 'Weight']}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="weight" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={2}
                      dot={{ fill: 'hsl(var(--primary))', r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-2">
                <div className="grid grid-cols-[1fr,1fr,auto] gap-4 pb-2 border-b font-semibold text-sm">
                  <div>Workout</div>
                  <div>Weight</div>
                  <div></div>
                </div>
                {sortedHistoryDescending.map((record, index) => {
                  const isBestRep = parseFloat(record.weight) === bestWeight;
                  return (
                    <div
                      key={index}
                      className={`grid grid-cols-[1fr,1fr,auto] gap-4 py-2 border-b last:border-b-0 items-center ${
                        isBestRep ? 'bg-primary text-primary-foreground font-bold rounded-md -mx-2 px-2' : ''
                      }`}
                      data-testid={`row-history-${index}`}
                    >
                      <div data-testid={`text-workout-${index}`}>
                        Week {record.week} Day {record.day}
                      </div>
                      <div data-testid={`text-weight-${index}`}>
                        {parseFloat(record.weight)} kg
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteMutation.mutate(record.id)}
                        disabled={deleteMutation.isPending}
                        data-testid={`button-delete-${index}`}
                        className={isBestRep ? 'hover:bg-primary-foreground/20' : ''}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </Card>
      </div>
    </div>
  );
}
