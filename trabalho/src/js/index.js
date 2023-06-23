function redirectToPage(path) {
    window.location.href = path;
}
  
const easyMode = document.querySelector('#easy');
const hardMode = document.querySelector('#hard');
  
easyMode.addEventListener('click', () => {
    redirectToPage("./Pages/EasyMode/easy.html");
});
  
hardMode.addEventListener('click', () => {
    redirectToPage("./Pages/HardMode/hard.html");
});
  