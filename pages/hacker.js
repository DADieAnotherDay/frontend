// pages/hacker.js 👨‍💻 Hacker-Style Terminal UI
import { useState } from "react";

export default function Hacker() {
  const [cmd, setCmd] = useState("");
  const [response, setResponse] = useState("");

  const handleCmd = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://backend-services-0s29.onrender.com/render-endpoint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: cmd, type: "hacker" })  // ← for love page

      });
      const data = await res.json();
      setResponse(data.response || "No response from backend.");
    } catch {
      setResponse("Something went wrong!");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.terminal}>
        <h2 style={styles.heading}>💻 Terminal</h2>
        <form onSubmit={handleCmd}>
          <div style={styles.line}>
            <span style={styles.prompt}>root@ai:</span>
            <input
              type="text"
              value={cmd}
              onChange={(e) => setCmd(e.target.value)}
              style={styles.input}
              autoFocus
            />
          </div>
        </form>
        {response && (
          <pre style={styles.output}>{response}</pre>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "#000",
    color: "#00ff00",
    fontFamily: "monospace",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  terminal: {
    background: "#111",
    border: "1px solid #00ff00",
    padding: 30,
    borderRadius: 12,
    width: "90%",
    maxWidth: 700,
  },
  heading: {
    marginBottom: 20,
    fontSize: 22,
    borderBottom: "1px solid #00ff00",
    paddingBottom: 10,
  },
  line: {
    display: "flex",
    alignItems: "center",
  },
  prompt: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    background: "#000",
    color: "#00ff00",
    border: "none",
    borderBottom: "2px solid #00ff00",
    fontSize: 16,
    outline: "none",
  },
  output: {
    marginTop: 20,
    background: "#000",
    padding: 15,
    border: "1px solid #00ff00",
    borderRadius: 10,
    whiteSpace: "pre-wrap",
  },
};
