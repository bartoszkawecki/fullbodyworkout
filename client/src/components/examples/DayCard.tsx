import { DayCard } from "../DayCard";

export default function DayCardExample() {
  return (
    <div className="p-4 space-y-4 max-w-md">
      <DayCard week={1} day={1} onClick={() => console.log("Day 1 clicked")} />
      <DayCard week={1} day={2} onClick={() => console.log("Day 2 clicked")} />
      <DayCard week={1} day={3} onClick={() => console.log("Day 3 clicked")} />
      <p className="text-sm text-muted-foreground mt-4">
        Click the checkbox icon to toggle completion status
      </p>
    </div>
  );
}
