import { CompletionStatus, type Completion } from "@shared/schema";
import { queryClient } from "./queryClient";

let completionsCache: Completion[] | null = null;

export async function fetchCompletions(): Promise<Completion[]> {
  const response = await fetch("/api/completions");
  if (!response.ok) {
    throw new Error("Failed to fetch completions");
  }
  const data = await response.json();
  completionsCache = data;
  return data;
}

function completionsToStatus(completions: Completion[]): CompletionStatus {
  const status: CompletionStatus = {};
  for (const completion of completions) {
    const weekKey = `week${completion.week}`;
    const dayKey = `day${completion.day}`;
    if (!status[weekKey]) {
      status[weekKey] = {};
    }
    status[weekKey][dayKey] = true;
  }
  return status;
}

export function getCompletionStatus(): CompletionStatus {
  if (!completionsCache) {
    return {};
  }
  return completionsToStatus(completionsCache);
}

export function isDayCompleted(week: number, day: number): boolean {
  const status = getCompletionStatus();
  return status[`week${week}`]?.[`day${day}`] ?? false;
}

export async function toggleDayCompletion(week: number, day: number): Promise<void> {
  const response = await fetch("/api/completions/toggle", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ week, day }),
  });
  
  if (!response.ok) {
    throw new Error("Failed to toggle completion");
  }
  
  queryClient.invalidateQueries({ queryKey: ["/api/completions"] });
}

export function getCompletedDaysForWeek(week: number): number {
  const status = getCompletionStatus();
  const weekData = status[`week${week}`];
  if (!weekData) return 0;
  return Object.values(weekData).filter(Boolean).length;
}
