"use client";
import { AiFillBulb, AiOutlineArrowRight } from "react-icons/ai";
import { useState, useEffect } from "react";
import "./styles.css";

export default function Home() {
  const offColor = "text-yellow-100";
  const onColor = "text-yellow-300";
  const [bulb, setBulb] = useState(false);
  const [color, setColor] = useState(offColor);
  const [idea, setIdea] = useState("");
  const [showIdeaInput, setShowIdeaInput] = useState(false);
  const [newIdeas, setNewIdeas] = useState([
    {
      title: "Be cool",
    },
    {
      title: "New app idea",
    },
    {
      title: "Old app idea",
    },
  ]);

  const [int1, setInt1] = useState();
  const [int2, setInt2] = useState();

  const handleLighBulbClick = () => {
    setShowIdeaInput(true);
    setColor(onColor);
  };

  const handleNewIdea = () => {
    setNewIdeas([...newIdeas, { title: idea }]);
    setShowIdeaInput(false);
    setColor(offColor);
    setIdea("");
  };

  return (
    <div className="grid grid-rows-[10px_1fr_100px] items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header></header>
      <main className="flex flex-col gap-10 items-center">
        <div
          className="hover:cursor-pointer text-[20rem] w-[200px] h-[200px] flex items-center justify-center"
          onClick={handleLighBulbClick}
        >
          <AiFillBulb className={`transition-color ${color}`} />
        </div>
        <div className="h-10 min-w-96 w-96">
          <div className="flex gap-2 items-center">
            <input
              type="text"
              disabled={!showIdeaInput}
              className="border w-full border-2 rounded-lg h-10 px-2 text-md text-black"
              onChange={(e) => setIdea(e.target.value)}
              value={idea}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  handleNewIdea();
                }
              }}
              placeholder="New idea"
            />
            <button
              type="button"
              onClick={handleNewIdea}
              disabled={!showIdeaInput}
            >
              <AiOutlineArrowRight className="text-gray-800 text-lg" />
            </button>
          </div>
        </div>
        <div className="max-h-[400px] overflow-auto w-full">
          {newIdeas.map((i) => {
            return (
              <div
                className="rounded-lg leading-7 text-slate-600"
                key={i.title}
              >
                {i.title}
              </div>
            );
          })}
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
