const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volume = document.querySelector(".volume-slider input");

const keysCheck = document.querySelector(".keys-check input");

let teclasPermitidas = [];

//para cada tecla quero executar

let audio = new Audio("src/tunes/a.wav");

const playTunes = (tecla) => {
    audio.src = `src/tunes/${tecla}.wav`
    audio.play();
    
    const teclaClicada = document.querySelector(`[data-key="${tecla}"]`);

    teclaClicada.classList.add("active");
    
    setTimeout(() => {
        teclaClicada.classList.remove("active");
    }, 200);
}; 

pianoKeys.forEach((tecla) => {
    
    tecla.addEventListener("click", () => playTunes(tecla.dataset.key))

    teclasPermitidas.push(tecla.dataset.key);
});

document.addEventListener("keydown", (event) => {
    
    if(teclasPermitidas.includes(event.key)) {
        playTunes(event.key)    
    }
    
});

const handleVolume = (event) => {
    audio.volume = event.target.value;  
}

volume.addEventListener("input", handleVolume);

const AtivaDesativaTeclas = () => {
    pianoKeys.forEach((tecla) => tecla.classList.toggle("hide"));
} 

keysCheck.addEventListener("click", AtivaDesativaTeclas);