import React, { useMemo } from "react";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { removeSet } from "@/store/setsSlice";
import { removeCardsBySetId } from "@/store/cardsSlice";

export const SetList: React.FC = () => {
  const sets = useAppSelector((state) => state.sets.items);
  const cards = useAppSelector((state) => state.cards.items);
  const dispatch = useAppDispatch();

  const countBySetId = useMemo(() => {
    const map: Record<string, number> = {};
    for (const c of cards) {
      map[c.setId] = (map[c.setId] ?? 0) + 1;
    }
    return map;
  }, [cards]);

  if (sets.length === 0) {
    return <p>No sets available. Create one!</p>;
  }

  const handleDelete = (setId: string, title: string) => {
    if (!confirm(`Delete "${title}" and all the cards contained?`)) return;
    dispatch(removeSet(setId));
    dispatch(removeCardsBySetId(setId));
  };

  return (
    <ul className="divide-y">
      {sets.map((set) => (
        <li key={set.id} className="flex items-start justify-between gap-4 p-3">
          <div className="flex-1">
            <Link href={`/sets/${set.id}`} className="block hover:underline">
              <h3 className="font-semibold">{set.title}</h3>
            </Link>
            {set.description && (
              <p className="text-sm text-gray-600">{set.description}</p>
            )}
            <p className="mt-1 text-xs text-gray-500">
              {countBySetId[set.id] ?? 0} cards
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href={`/sets/${set.id}`}
              className="px-3 py-1.5 rounded bg-gray-100 hover:bg-gray-200 text-sm"
            >
              View
            </Link>
            <button
              type="button"
              onClick={() => handleDelete(set.id, set.title)}
              className="px-3 py-1.5 rounded bg-red-500 text-white hover:bg-red-600 text-sm"
              aria-label={`Delete set ${set.title}`}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
