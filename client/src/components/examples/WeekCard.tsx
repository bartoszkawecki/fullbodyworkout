import { WeekCard } from "../WeekCard";

export default function WeekCardExample() {
  return (
    <div className="p-4 space-y-4 max-w-md">
      <WeekCard week={1} totalDays={5} onClick={() => console.log("Week 1 clicked")} />
      <WeekCard week={2} totalDays={5} onClick={() => console.log("Week 2 clicked")} />
    </div>
  );
}
