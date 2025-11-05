import { WorkoutTable } from "../WorkoutTable";

export default function WorkoutTableExample() {
  const exercises = [
    {
      name: "Back Squat",
      sets: [
        { reps: "5", rir: "2", rest: "3-4" },
        { reps: "5", rir: "2", rest: "3-4" },
        { reps: "5", rir: "2", rest: "3-4" },
        { reps: "5", rir: "2", rest: "3-4" },
      ],
    },
    {
      name: "Chest Supported Row",
      sets: [
        { reps: "8", rir: "2", rest: "2-3" },
        { reps: "8", rir: "2", rest: "2-3" },
        { reps: "8", rir: "1", rest: "2-3" },
        { reps: "8", rir: "0", rest: "2-3" },
      ],
    },
    {
      name: "DB Lateral Raise",
      sets: [
        { reps: "10", rir: "2", rest: "1" },
        { reps: "10", rir: "1", rest: "1" },
        { reps: "10", rir: "0", rest: "1" },
      ],
    },
  ];

  return (
    <div className="p-4 max-w-4xl">
      <WorkoutTable exercises={exercises} dayLabel="Day 1" />
    </div>
  );
}
