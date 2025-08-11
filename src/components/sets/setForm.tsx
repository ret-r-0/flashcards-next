import React, { useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import { addSet } from "@/store/setsSlice";
import { v4 as uuidv4 } from "uuid";

export function SetForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    dispatch(
      addSet({
        id: uuidv4(),
        title: title.trim(),
        description: description.trim(),
      })
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 p-4 border rounded">
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Set title"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">
          Description (optional)
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Description"
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Set
      </button>
    </form>
  );
}
