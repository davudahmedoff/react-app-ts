import { useRef, type FormEvent } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

const NewGoal = ({ onAddGoal }: NewGoalProps) => {
  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    new FormData(event.currentTarget);
    const enteredGoal = goalRef.current?.value;
    const enteredSummary = summaryRef.current?.value;
    event.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "10px" }}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input type="text" id="goal" name="goal" ref={goalRef} />
      </p>
      <p>
        <label htmlFor="summary">
          Shor <summary></summary>{" "}
        </label>
        <input type="text" id="summary" name="summary" ref={summaryRef} />
      </p>
      <button>Add Goal</button>
    </form>
  );
};

export default NewGoal;
