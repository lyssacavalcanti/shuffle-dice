function lanceDeDado() {
  const img = document.getElementById("img");
  let numeroAleatorio = Math.floor(Math.random() * 6) + 1;
  console.log(numeroAleatorio);
  img.setAttribute("src", `${numeroAleatorio}.png`);
}
function anim() {
  setTimeout(lanceDeDado, 500);
  const img = document.getElementById("img");
  img.setAttribute("src", "dice-roll.gif");
}
