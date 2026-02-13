const generarBtn = document.getElementById("generar");
const copiarBtn = document.getElementById("copiar");
const resultado = document.getElementById("resultado");
const error = document.getElementById("error");

const textos = [
  "Lorem ipsum dolor sit amet...",
  "Sed ut perspiciatis unde omnis...",
  "At vero eos et accusamus...",
  "Ut enim ad minima veniam..."
];

generarBtn.addEventListener("click", () => {
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const tipo = document.querySelector("input[name='tipo']:checked").value;

  resultado.innerHTML = "";
  error.textContent = "";

  if (isNaN(cantidad) || cantidad < 1) {
    error.textContent = "Ingresa un número válido de párrafos.";
    return;
  }

  let salida = textos.slice(0, cantidad);

  if (tipo === "parrafos") {
    salida.forEach(texto => {
      resultado.innerHTML += `<p>${texto}</p>`;
    });
  } else {
    resultado.textContent = salida.join(" ");
  }
});

copiarBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(resultado.innerText);
  copiarBtn.textContent = "¡Copiado!";
  
  setTimeout(() => {
    copiarBtn.textContent = "Copiar";
  }, 2000);
});