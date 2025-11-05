import { CompletionCelebration } from "../CompletionCelebration";

export default function CompletionCelebrationExample() {
  return (
    <CompletionCelebration
      week={1}
      day={1}
      onReturnHome={() => console.log("Return home clicked")}
    />
  );
}
