import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {
  let maxHeight;
  if (window.innerHeight <= 800) {
    // Se a altura da janela for menor ou igual a 800 pixels
    maxHeight = window.innerHeight; // Define maxHeight como a altura da janela
  }

  const [video, setVideos] = useState([]); // Cria um estado para o array de vídeos

  async function getVideos() {
    // Define uma função assíncrona para obter os vídeos do Firestore
    const videosCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videosCollection);
    const videosList = videosSnapshot.docs.map((doc) => doc.data());
    setVideos(videosList);
  }

  useEffect(() => {
    // Define um efeito colateral que executa a função getVideos na montagem do componente
    getVideos();
  }, []);

  return (
    <div className="App" style={{ maxHeight: maxHeight + "px" }}>
      <div className="app__videos">
        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
