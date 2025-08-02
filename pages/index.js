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
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
      });

      const data = await res.json();
      setResponse(data.response || "No response from backend.");
    } catch (err) {
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
            placeholder="Enter your answer..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={5}
          />
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "⏳ Sending..." : "🚀 Send to Backend"}
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f0f4f8",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    maxWidth: "500px",
    width: "100%",
  },
  heading: {
    marginBottom: "20px",
    fontSize: "28px",
    textAlign: "center",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "20px",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    background: "#0070f3",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  response: {
    marginTop: "20px",
    padding: "12px",
    background: "#e6f7ff",
    border: "1px solid #91d5ff",
    borderRadius: "8px",
    color: "#0050b3",
  },
};
