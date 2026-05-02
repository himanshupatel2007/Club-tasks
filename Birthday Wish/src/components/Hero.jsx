import { useState } from "react";
import Decorations from "./Decorations";
import Confetti from "react-confetti";
import useConfetti from "../hooks/useConfetti";
import { useParams } from "react-router-dom";
import "../styles/hero.css";
export default function Hero() {
  const [show, setShow] = useState(false);
  const { run, trigger } = useConfetti();
  const { name } = useParams();

  const displayName = name ? name : "Friend";

  return (
    <div className="hero-container">
      {run && <Confetti />}
      <Decorations />

      <div className="hero-content">
        <p className="hero-small">HAPPY</p>

        <h1 className="hero-big">
          BIRTHDAY <span>{displayName}</span>
        </h1>

        {!show ? (
          <button
            className="hero-btn"
            onClick={() => {
              setShow(true);
              trigger();
            }}
          >
            Open Surprise 🎁
          </button>
        ) : (
          <p className="hero-message">🎉 You’re awesome! Keep shining ✨</p>
        )}
      </div>
    </div>
  );
}