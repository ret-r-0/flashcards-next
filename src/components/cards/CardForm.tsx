<<<<<<< HEAD
import React, { useState, useId, useRef } from "react";
=======
import React, { useId, useState } from "react";
>>>>>>> origin/laptopdell-changes
import { useAppDispatch } from "@/store/hooks";
import { addCard } from "@/store/cardsSlice";
import { v4 as uuidv4 } from "uuid";
import { off } from "process";

<<<<<<< HEAD
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
=======
interface CardFromProps {
  setId: string;
}

export const CardForm: React.FC<CardFromProps> = ({ setId }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const baseId = useId();
  const qId = `${baseId}-question`;
  const aId = `${baseId}-answer`;
>>>>>>> origin/laptopdell-changes

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
<<<<<<< HEAD
        <label htmlFor="qId" className="block text-sm font-medium">
=======
        <label htmlFor={qId} className="block text-sm font-medium">
>>>>>>> origin/laptopdell-changes
          Question
        </label>
        <input
          id={qId}
<<<<<<< HEAD
          ref={qRef}
=======
>>>>>>> origin/laptopdell-changes
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
<<<<<<< HEAD
        <label htmlFor="aId" className="block text-sm font-medium">
=======
        <label htmlFor={aId} className="block text-sm font-medium">
>>>>>>> origin/laptopdell-changes
          Answer
        </label>
        <input
          id={aId}
<<<<<<< HEAD
          ref={qRef}
=======
>>>>>>> origin/laptopdell-changes
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
          disabled={!question.trim() || !answer.trim()}
        >
          Add Card
        </button>
      </div>
    </form>
  );
};
