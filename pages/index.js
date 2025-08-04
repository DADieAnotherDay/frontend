// pages/index.js (AI Grader Main Tool)
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://backend-services-0s29.onrender.com/render-endpoint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      });
      const data = await res.json();
      setResponse(data.response || "No response from backend.");
    } catch {
      setResponse("Something went wrong!");
    }
    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>🎓 AI Grader</h1>
        <form onSubmit={handleSubmit}>
          <textarea
            style={styles.input}
            placeholder="Paste your answer here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button style={styles.button} disabled={loading}>
            {loading ? "⏳ Sending..." : "🚀 Grade It"}
          </button>
        </form>
        {response && <p style={styles.response}>🧠 Response: {response}</p>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#0f0f0f",
    color: "#00ff99",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "monospace",
  },
  card: {
    background: "#111",
    padding: 30,
    borderRadius: 12,
    boxShadow: "0 0 20px #00ff99",
    width: "90%",
    maxWidth: 600,
  },
  heading: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: 15,
    borderRadius: 10,
    border: "2px solid #00ff99",
    marginBottom: 20,
    background: "#000",
    color: "#0f0",
    fontSize: 16,
  },
  button: {
    width: "100%",
    padding: 12,
    background: "#00ff99",
    color: "#000",
    fontWeight: "bold",
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
  },
  response: {
    marginTop: 20,
    background: "#001f1f",
    padding: 15,
    borderRadius: 10,
    border: "1px solid #00ff99",
  },
};
