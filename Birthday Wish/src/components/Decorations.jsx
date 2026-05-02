export default function Decorations() {
  return (
    <>
      <div style={circle(50, 50, "#ff9ff3")} className="float"></div>
      <div style={circle(200, 100, "#48dbfb")} className="float"></div>
      <div style={circle(300, 300, "#feca57")} className="float"></div>
    </>
  );
}

const circle = (top, left, color) => ({
  position: "absolute",
  top,
  left,
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  background: color,
  opacity: 0.6
});