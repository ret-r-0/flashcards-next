import React from "react";
import { SetForm } from "@/components/sets/setForm";
import { SetList } from "@/components/sets/setList";

const SetListPage: React.FC = () => (
  <div>
    <h1>Your Flashcard Set</h1>
    <SetForm />
    <SetList />
  </div>
);
