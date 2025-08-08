import React, { useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import { addCard } from "@/store/cardsSlice";
import { v4 as uuidv4 } from "uuid";

interface CardsFromProps {
  setId: string;
}

export const CardForm: React.FC<CardsFromProps> = ({ setId }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || !answer.trim()) return;

    dispatch(
      addCard({
        id: uuidv4(),
        setId,
        front: question,
        back: answer,
      })
    );

    setQuestion("");
    setAnswer("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 p-4 border rounded">
      <div>
        <label className="block text-sm font-medium">Question</label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter question"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Answer</label>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter Answer"
        />

        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add Card
        </button>
      </div>
    </form>
  );
};
