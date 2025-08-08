import React from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { removeSet } from "@/store/setsSlice";

export const SetList: React.FC = () => {
  const sets = useAppSelector((state) => state.sets.items);
  const dispatch = useAppDispatch();

  if (sets.length === 0) {
    return <p>No sets available. Create one!</p>;
  }

  return (
    <ul>
      {sets.map((set) => (
        <li
          key={set.id}
          className="flex space-between items-center p-2 border-b"
        >
          <div>
            <h3 className="font-semibold">{set.title}</h3>
            {set.description && (
              <p className="text-sm text-gray-600">{set.description}</p>
            )}
          </div>
          <button onClick={() => dispatch(removeSet(set.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
