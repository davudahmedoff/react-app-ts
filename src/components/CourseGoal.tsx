import { type FC, type ReactNode } from "react";

interface CourseGoalProps {
  title: string;
  children: ReactNode; //children type is ReactNode because children words inside <p></p> tag
  onDelete: (id: number) => void;
  id:number;
}

const CourseGoal: FC<CourseGoalProps> = ({ title, id, children, onDelete }) => {
  
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};

export default CourseGoal;
