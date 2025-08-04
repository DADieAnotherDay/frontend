import Link from "next/link";

export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>💻 AI Hub</h1>
        <p style={styles.subheading}>Choose your experience 👇</p>

        <div style={styles.linkBox}>
          <Link href="/bday" style={styles.link}>🎂 Birthday Wishes</Link>
          <Link href="/hacker" style={styles.link}>💀 Hacker Mode</Link>
          <Link href="/Love" style={styles.link}>❤️ Love Note</Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f0f0f",
    fontFamily: "'Courier New', monospace",
    color: "#fff",
  },
  card: {
    background: "#1a1a1a",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 0 30px #00ff88",
    textAlign: "center",
  },
  heading: {
    fontSize: "36px",
    marginBottom: "10px",
    color: "#00ff88",
  },
  subheading: {
    fontSize: "18px",
    marginBottom: "30px",
    color: "#ccc",
  },
  linkBox: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  link: {
    textDecoration: "none",
    color: "#00ff88",
    fontSize: "20px",
    background: "#222",
    padding: "12px 20px",
    borderRadius: "10px",
    transition: "0.3s",
    border: "1px solid #00ff88",
  },
};
