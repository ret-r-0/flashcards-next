import React, { useState, useId, useRef } from "react";
import { useAppDispatch } from "@/store/hooks";
import { addCard } from "@/store/cardsSlice";
import { v4 as uuidv4 } from "uuid";
import { off } from "process";

interface CardsFormProps {
  setId: string;
}

export const CardForm: React.FC<CardsFormProps> = ({ setId }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const baseId = useId();
  const qId = `${baseId} - question`;
  const aId = `${baseId} - answer`;
  const qRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();
  const valid = question.trim() && answer.trim();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;

    dispatch(
      addCard({
        id: uuidv4(),
        setId,
        front: question.trim(),
        back: answer.trim(),
      })
    );

    setQuestion("");
    setAnswer("");
    qRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 p-4 border rounded">
      <div>
        <label htmlFor="qId" className="block text-sm font-medium">
          Question
        </label>
        <input
          id={qId}
          ref={qRef}
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full p-2 border rounded"
          autoComplete="off"
          placeholder="Enter question"
          aria-required="true"
        />
      </div>

      <div>
        <label htmlFor="aId" className="block text-sm font-medium">
          Answer
        </label>
        <input
          id={aId}
          ref={qRef}
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter Answer"
          autoComplete="off"
          aria-required="true"
        />

        <button
          type="submit"
          disabled={!valid}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add Card
        </button>
      </div>
    </form>
  );
};
