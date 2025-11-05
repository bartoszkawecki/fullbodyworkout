import { CompletionStatus } from "@shared/schema";

const STORAGE_KEY = "workout-completion-status";

export function getCompletionStatus(): CompletionStatus {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return {};
  try {
    return JSON.parse(stored);
  } catch {
    return {};
  }
}

export function setCompletionStatus(status: CompletionStatus): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(status));
}

export function isDayCompleted(week: number, day: number): boolean {
  const status = getCompletionStatus();
  return status[`week${week}`]?.[`day${day}`] ?? false;
}

export function markDayCompleted(week: number, day: number): void {
  const status = getCompletionStatus();
  if (!status[`week${week}`]) {
    status[`week${week}`] = {};
  }
  status[`week${week}`][`day${day}`] = true;
  setCompletionStatus(status);
}

export function getCompletedDaysForWeek(week: number): number {
  const status = getCompletionStatus();
  const weekData = status[`week${week}`];
  if (!weekData) return 0;
  return Object.values(weekData).filter(Boolean).length;
}
