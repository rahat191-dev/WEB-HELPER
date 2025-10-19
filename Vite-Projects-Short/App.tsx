import { useEffect, useState } from "react";
import api from "./api/axios";
import React from "react";
import Navbar from "./components/Navbar";
import './App.css'


function App() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    api
      .get("/api/message")
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
      <div>
      <Navbar />
      <main>
        <h1>Welcome to My Cake Shop!</h1>
      </main>
    </div>
  );
}

export default App;
