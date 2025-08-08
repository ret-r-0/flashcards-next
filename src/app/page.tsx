"use client";

import React from "react";
import { SetList } from "@/components/sets/setList";
import { SetForm } from "@/components/sets/setForm";

export default function HomePage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Your Flashcards Sets</h1>

      <section className="mt-6">
        <SetForm />
      </section>
      <section className="mt-6">
        <SetList />
      </section>
    </div>
  );
}
