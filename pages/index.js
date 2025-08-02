
export default function Home() {
  return (
    <div style={{ padding: 40, fontFamily: 'Arial, sans-serif' }}>
      <h1>Hello from Vercel Frontend!</h1>
      <form action="https://frontend-1-a7ge.onrender.com/render-endpoint" method="POST">
        <input name="message" placeholder="Type something" required style={{ marginRight: 10, padding: 5 }} />
        <button type="submit" style={{ padding: 5 }}>Send to backend</button>
      </form>
    </div>
  );
}
