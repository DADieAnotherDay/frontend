
// pages/bday.js 🎉 Birthday Message Page
import { useState } from "react";

export default function Bday() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [relation, setRelation] = useState("");
  const [response, setResponse] = useState("");
  const [image, setImage] = useState("");

  const generateBirthdayWish = (name, age, relation) => {
  let wish = "";

  if (relation.toLowerCase() === "friend") {
    wish = `
Happy Birthday ${name}! 🎉  
On this special day, I celebrate not just your age but the wonderful memories we’ve created together.  
${age} looks amazing on you, and I’m sure this year will bring more laughter, adventures, and happiness.  
You’re not just a ${relation}; you’re family.  
I hope your journey ahead is filled with love, success, and endless joy.  
May you always find reasons to smile and keep inspiring those around you.  
Cheers to your dreams, your passions, and the exciting future that awaits you.  
May your heart remain light, your spirit bold, and your days bright.  
Here’s to good health, good vibes, and the best experiences life has to offer.  
Remember, the world is lucky to have someone as kind, fun, and genuine as you.  
Stay true to yourself and keep shining brightly.  
So let’s celebrate your life, achievements, and the beautiful person you are becoming.  
May this ${age}th chapter be your best one yet.  
Happy Birthday once again, dear ${relation}. 🥳🎂🎁  
Love, hugs, and lots of cake! 🍰  
    `;
  }

  else if (relation.toLowerCase() === "Meri pyari ma'am ") {
    wish = `
Happy Birthday to my amazing brother ${name}! 🎂  
Growing up with you has been one of the greatest blessings of my life.  
At ${age}, you’re stronger, wiser, and even cooler than before.  
You’ve always been my protector, guide, and best buddy rolled into one.  
May your life ahead be filled with achievements and joy.  
I admire the person you are and the one you’re becoming.  
No matter how old we get, you’ll always be my partner in mischief.  
I pray that you find happiness in every moment and success in every endeavor.  
May this year bring you closer to your dreams and surround you with love.  
Let’s make today unforgettable with laughter and celebration.  
Stay bold, stay kind, and always believe in yourself.  
To the world, you may just be one man, but to me, you are the world.  
I hope this ${age}th year is packed with blessings and surprises.  
Happy Birthday once again, my dear ${relation}! 🎉🥳  
    `;
  }
    else if (relation.toLowerCase() === "ma'am ") {
    wish = `
Happy Birthday to my one and only ma'am ${name} ji 💞! 🎂 `
`I can't believe I found you! I'm not there whenever you need, 
but you were always there, 
whether I told you to stay with me or I didn't, you were there. 
You always do things that I like, 
and 
I'm the one who notices that but still hesitates to appreciate, mention, 
or just thank you for that.`

`Once I read that the person who mentions, again and again, 
'one day you will leave,' is actually the one who leaves first. 
I haven't only read this, 
but 
I've also seen many examples of it. 
Whenever you start this topic, I remember that line, 
and 
I know one day this will come true. 
But I just want that whenever our minds hit us with memories, 
we always smile, 
and whenever either of us needs the other person, 
we can contact them without thinking twice`

`It is the first time I'm expressing my feelings in English 
just because I don't want you to have to put in effort here 
as well to understand my feelings. 
(koi spelling mistake ho to thoda edjust krna 👉👈)
You are always the only 'Meri Pyari Ma'am' ❣
Happy Birthday once again, my dear ${relation}! 🎉🥳  
    `;
    }

  else {
    wish = `
Happy Birthday ${name}! 🎉  
Congratulations on turning ${age}, ${relation}.  
You are truly special, and I wish you endless love, happiness, and success.  
Stay blessed always and keep smiling.  
    `;
  }

  return wish;
};

const handleWish = async (e) => {
  e.preventDefault();
  try {
    const finalWish = generateBirthdayWish(name, age, relation);

    const res = await fetch("https://backend-services-0s29.onrender.com/render-endpoint", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: `bday: ${finalWish}` }),
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
            placeholder="Enter name..."
            style={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Enter age..."
            style={styles.input}
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter relation (e.g., friend, brother, mom)..."
            style={styles.input}
            value={relation}
            onChange={(e) => setRelation(e.target.value)}
            required
          />
          <button style={styles.button}>🎁 Generate Wish</button>
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
    marginBottom: 15,
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
