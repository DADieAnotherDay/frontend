// pages/bday.js 🎉 Birthday Message Page
import { useState } from "react";

export default function Bday() {
  const [wish, setWish] = useState("");
  const [response, setResponse] = useState("");
  const [image, setImage] = useState("");

  const handleWish = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://backend-services-0s29.onrender.com/render-endpoint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: `bday: ${wish}` }),
      });
      const data = await res.json();
      setResponse(data.response || "No response from backend.");
      setImage(data.image || "");
    } catch {
      setResponse("Something went wrong!");
      setImage("");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🎂 Send a Birthday Wish!</h1>
        <form onSubmit={handleWish}>
          <input
            type="text"
            placeholder="Write your birthday wish..."
            style={styles.input}
            value={wish}
            onChange={(e) => setWish(e.target.value)}
          />
          <button style={styles.button}>🎁 Send Wish</button>
        </form>
        {response && <p style={styles.response}>🎉 {response}</p>}
        {image && <img src={image} alt="Birthday" style={styles.image} />}
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Comic Sans MS', cursive, sans-serif",
  },
  card: {
    background: "white",
    padding: 30,
    borderRadius: 16,
    boxShadow: "0 0 20px rgba(0,0,0,0.2)",
    textAlign: "center",
    maxWidth: 500,
    width: "90%",
  },
  title: {
    fontSize: 26,
    marginBottom: 20,
    color: "#ff4081",
  },
  input: {
    width: "100%",
    padding: 12,
    fontSize: 16,
    border: "2px solid #ff4081",
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    background: "#ff4081",
    color: "white",
    border: "none",
    padding: 12,
    fontSize: 16,
    borderRadius: 10,
    cursor: "pointer",
  },
  response: {
    marginTop: 20,
    background: "#fff8f0",
    padding: 15,
    borderRadius: 12,
    border: "1px dashed #ff4081",
  },
  image: {
    marginTop: 20,
    width: "100%",
    maxWidth: 300,
    borderRadius: 12,
  },
};
