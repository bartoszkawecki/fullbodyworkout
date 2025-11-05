import { ExerciseCard } from "../ExerciseCard";

export default function ExerciseCardExample() {
  const exercise = {
    name: "Goblet Squat",
    sets: [
      { reps: "10", rir: "2", rest: "90s" },
      { reps: "10", rir: "1-2", rest: "90s" },
      { reps: "10", rir: "1", rest: "90s" },
    ],
  };

  return (
    <div className="p-4 max-w-2xl">
      <ExerciseCard exercise={exercise} exerciseNumber={1} totalExercises={5} />
    </div>
  );
}
