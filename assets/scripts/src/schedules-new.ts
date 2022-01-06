import format from "date-fns/format";
import locale from "date-fns/locale/pt-BR";
import startOfMonth from "date-fns/startOfMonth";
import endOfMonth from "date-fns/endOfMonth";
import addMonths from "date-fns/addMonths";
import subMonths from "date-fns/subMonths";

console.log(
  format(new Date(), "dd 'de 'MMMM 'de' yyyy 'às' HH:mm:ss", { locale })
);

const page = document.querySelector("#schedules-new");

if (page) {
  const hoje = new Date();
  let inicioMes = startOfMonth(hoje);
  const fimMes = endOfMonth(hoje);

  const btnHoje = page.querySelector(".btn-today") as HTMLButtonElement;
  const btnAnterior = page.querySelector(".btn-prev") as HTMLButtonElement;
  const btnProximo = page.querySelector(".btn-next") as HTMLButtonElement;
  const titulo = page.querySelector("h2") as HTMLHeadingElement;
  const dias = page.querySelector(".days") as HTMLUListElement;
  const render = () => {
    titulo.innerText = format(inicioMes, "MMMM yyyy", { locale });
  };

  btnProximo.addEventListener("click", (evt) => {
    inicioMes = addMonths(inicioMes, 1);
    render();
  });

  btnAnterior.addEventListener("click", (evt) => {
    inicioMes = subMonths(inicioMes, 1);
    render();
  });

  btnHoje.addEventListener("click", (evt) => {
    inicioMes = startOfMonth(hoje);
    render();
  });
}
