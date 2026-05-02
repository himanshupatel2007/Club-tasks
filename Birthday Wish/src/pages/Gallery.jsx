export default function Gallery() {
  const imgs = ["/img1.jpg", "/img2.jpg", "/img3.jpg"];

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Memories 📸</h1>

      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        {imgs.map((img, i) => (
          <img key={i} src={img} width="200" />
        ))}
      </div>
    </div>
  );
}