const btn = document.querySelector(".btn_login");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

btn.addEventListener("click",showModal);
close.addEventListener("click",showModal);

function showModal() {
    
    modal.style.display = modal.style.display === 'block'?"none":"block"
}