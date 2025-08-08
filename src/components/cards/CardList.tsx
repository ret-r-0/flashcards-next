import React from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { removeCard } from "@/store/cardsSlice";

interface CardListProps {
  setId: string;
}

export const CardList: React.FC<CardListProps> = ({ setId }) => {
  const cards = useAppSelector((state) =>
    state.cards.items.filter((card) => card.setId === setId)
  );
  const dispatch = useAppDispatch();

  if (cards.length === 0) {
    return <p>There is no cards in this set. Please add one!</p>;
  }

  return (
    <ul>
      {cards.map((card) => (
        <li
          key={card.id}
          className="flex justify-between items-centre p-2 border-b"
        >
          <div>
            <p className="font-medium">{card.front}</p>
            <p className="text-sm text-gray-600">{card.back}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
