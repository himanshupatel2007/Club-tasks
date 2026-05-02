import { useRef } from "react";

export default function MusicPlayer() {
  const ref = useRef();

  return (
    <>
      <audio ref={ref} src="/music.mp3" loop />
      <button
        onClick={() => ref.current.play()}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          padding: "10px",
          borderRadius: "50%",
          background: "#6c5ce7",
          color: "#fff",
          border: "none"
        }}
      >
        🎵
      </button>
    </>
  );
}