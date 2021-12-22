document.oncopy = event => {
    event.preventDefault();
    event.clipboardData.setData("text/plain","Si lees esto chili, te quiero decir que te quiero mucho guapa:) <3 \n")
}
const mensaje = document.querySelector(".title_p");
const icon = document.querySelector("i.fa-copy");
const input = document.getElementById("copy");
input.addEventListener("click", () => {
    input.focus()
    document.execCommand('selectAll');
    document.execCommand('copy');
    mensaje.textContent = "Copiado..."
    setTimeout(() => {
        mensaje.textContent = ""
    },3000)
})

