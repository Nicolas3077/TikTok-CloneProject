
import React, { useRef, useState } from "react";
import VideoFooter from "./components/footer/VideoFooter";
import "./video.css";
import VideoSidebar from "./components/sidebar/VideoSidebar";

function Video({ likes, messages, shares, name, description, music, url }) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play) { // Se o vídeo estiver sendo reproduzido, pause a reprodução e atualize o estado de play
      videoRef.current.pause();
      setPlay(false);
    } else { // Se o vídeo não estiver sendo reproduzido, inicie a reprodução e atualize o estado de play
      videoRef.current.play();
      setPlay(true);
    }
  }

  function handdleShare() { // Função para compartilhar o vídeo
    const text = `Confira este vídeo incrível! ${window.location.href}`;
  
    const popup = document.createElement("div"); // Cria um novo elemento div para o pop-up
    popup.className = "popup"; // Adiciona uma classe para estilizar com CSS
    popup.innerHTML = `
    <button id="fechar" class="fechar-btn">X</button>
    <h2>Compartilhar</h2>
    <p>Digite o DDD do seu número (somente números, 2 dígitos):</p>
    <input type="text" id="ddd" class="input-ddd" />
    <p>Digite o número do seu telefone:</p>
    <input type="text" id="numero" class="input-numero" />
    <button id="compartilhar" class="compartilhar-btn">Compartilhar</button>
  `; // Adiciona conteúdo HTML ao pop-up

    const fecharButton = popup.querySelector("#fechar");

    fecharButton.addEventListener("click", () => {
      body.removeChild(popup); // Remove o pop-up da página quando o botão fechar for clicado
    });
    
    const body = document.querySelector("body");
    body.appendChild(popup); // Adiciona o pop-up ao corpo da página
  
    const compartilharButton = popup.querySelector("#compartilhar");
  
    compartilharButton.addEventListener("click", () => {
      const ddd = document.querySelector("#ddd").value;
      const numero = document.querySelector("#numero").value;
      const numeroCompleto = `+55${ddd}${numero}`;
  
      const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(
        text
      )}&phone=${numeroCompleto}`;
  
      const windowWidth = 550;
      const windowHeight = 420;
      const windowLeft = window.screenX + (window.innerWidth - windowWidth) / 2;
      const windowTop = window.screenY + (window.innerHeight - windowHeight) / 2;
      const windowOptions = `left=${windowLeft},top=${windowTop},width=${windowWidth},height=${windowHeight},location=0,toolbar=0,status=0,menubar=0,resizable=0,scrollbars=0`;
  
      window.open(url, "Compartilhar", windowOptions);
  
      body.removeChild(popup); // Remove o pop-up da página após o compartilhamento
    });
  }

  function openVideo() {
    const url = "https://firebasestorage.googleapis.com/v0/b/tiktok---jornada-2730f.appspot.com/o/RANG.mp4?alt=media&token=446bd591-ef7f-4439-9b21-28164040f701"; // URL do vídeo que será aberto
    const width = 1280; // Largura da janela
    const height = 720; // Altura da janela
    const left = window.screen.width / 2 - width / 2; // Posição horizontal da janela
    const top = window.screen.height / 2 - height / 2; // Posição vertical da janela
    const windowOptions = `left=${left},top=${top},width=${width},height=${height},location=0,toolbar=0,status=0,menubar=0,resizable=0,scrollbars=0`;
  
    const popup = window.open("", "Video", windowOptions); // Abre uma nova janela vazia
  
    popup.document.write(`
      <html>
        <head>
          <title>Video</title>
        </head>
        <body>
          <iframe width="${width}" height="${height}" src="${url}" frameborder="0" allowfullscreen autoplay></iframe>
        </body>
      </html>
    `); // Adiciona o conteúdo HTML à nova janela
  }
  
  
  

  return (
    // Renderiza o componente Video com os componentes VideoSidebar e VideoFooter, e o elemento de vídeo com as propriedades passadas
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src={url}
      ></video>
      <VideoSidebar
        likes={likes}
        messages={messages}
        onMessageClick={openVideo}
        shares={shares}
        onShare={handdleShare}
      />
      <VideoFooter name={name} description={description} music={music} />
    </div>
  );
}

export default Video;
