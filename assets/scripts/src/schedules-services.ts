const pageServices = document.querySelector(
  "#schedules-services"
) as HTMLElement;

if (pageServices) {
  const form = pageServices.querySelector("form") as HTMLFormElement;
  const servicos = form.querySelectorAll("[type=checkbox]") as NodeList;
  const todosResumosDeServico = pageServices.querySelectorAll(
    "aside tr"
  ) as NodeList;

  const valorTotal = pageServices.querySelector(
    "footer .total"
  ) as HTMLSpanElement;
  console.dir(valorTotal);
}
