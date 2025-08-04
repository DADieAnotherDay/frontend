// pages/love.js 💖 Romantic Gen-Z Pastel UI
import { useState } from "react";

export default function Love() {
  const [note, setNote] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://backend-services-0s29.onrender.com/render-endpoint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: note })
      });
      const data = await res.json();
      setResponse(data.response || "No response from backend.");
    } catch {
      setResponse("Something went wrong!");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>💌 Send a Love Note</h1>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Write your love note here..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            style={styles.textarea}
          ></textarea>
          <button type="submit" style={styles.button}>Send 💖</button>
        </form>
        {response && <p style={styles.response}>💗 {response}</p>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(to right, #ff9a9e, #fad0c4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Poppins', sans-serif",
  },
  card: {
    background: "#fff",
    padding: 30,
    borderRadius: 20,
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
    maxWidth: 500,
    width: "90%",
  },
  title: {
    fontSize: 28,
    color: "#d63384",
    marginBottom: 20,
  },
  textarea: {
    width: "100%",
    height: 100,
    borderRadius: 12,
    border: "1px solid #ffc0cb",
    padding: 15,
    fontSize: 16,
    resize: "none",
    marginBottom: 20,
    background: "#fff0f5",
  },
  button: {
    backgroundColor: "#ff69b4",
    color: "white",
    padding: "10px 20px",
    fontSize: 16,
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
  },
  response: {
    marginTop: 20,
    padding: 15,
    borderRadius: 12,
    background: "#fff5f9",
    border: "1px dashed #ff69b4",
    fontStyle: "italic",
  },
};
