"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { CardForm } from "@/components/cards/CardForm";
import { CardList } from "@/components/cards/CardList";

export default function SetDetailPage() {
  const params = useParams();
  let rawId = params.setId;
  const setId = Array.isArray(rawId) ? rawId[0] : rawId;

  if (!setId) {
    return <p>Invalid set</p>;
  }

  return (
    <div className="p-4">
      <Link href="/" className="underline text-blue-600">
        ← Back to sets
      </Link>

      <h1 className="mt-4 text-2xl font-bold">Cards in this set</h1>
      <section className="mt-6">
        <CardForm setId={setId} />
      </section>
      <section className="mt-6">
        <CardList setId={setId} />
      </section>
    </div>
  );
}
