const generarBtn = document.getElementById("generar");
const copiarBtn = document.getElementById("copiar");
const resultado = document.getElementById("resultado");
const error = document.getElementById("error");

const textos = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem...",
  "At vero eos et accusamus et iusto odio dignissimos ducimus...",
  "Ut enim ad minima veniam, quis nostrum exercitationem ullam...",
  "Quis autem vel eum iure reprehenderit qui in ea voluptate...",
  "Duis aute irure dolor in reprehenderit in voluptate velit...",
  "Excepteur sint occaecat cupidatat non proident...",
  "Nam libero tempore, cum soluta nobis est eligendi optio...",
  "Temporibus autem quibusdam et aut officiis debitis...",
  "Itaque earum rerum hic tenetur a sapiente delectus..."
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

let salida = [];

for (let i = 0; i < cantidad; i++) {
  salida.push(textos[i % textos.length]);
}

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