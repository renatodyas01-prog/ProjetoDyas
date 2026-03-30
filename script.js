
let total = 0;

document.querySelectorAll("input").forEach(e=>{
  e.addEventListener("change", ()=>{
    total = 0;

    document.querySelectorAll("input:checked").forEach(c=>{
      total += parseInt(c.value);
    });

    document.getElementById("total").innerText = total;
  });
});

function enviarWhats(){

  let msg = `Olá, fiz um orçamento:

Total: R$ ${total}

Meu problema é:`;

  window.open(`https://wa.me/5549999570660?text=${encodeURIComponent(msg)}`);
}
