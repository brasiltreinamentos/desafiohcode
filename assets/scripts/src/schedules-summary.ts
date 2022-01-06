const pageSummary = document.querySelector("#schedules-summary") as HTMLElement;
if (pageSummary) {
  const printFormaDePagamento = pageSummary.querySelector(
    "form #payment"
  ) as HTMLInputElement;
  const finalCartao = pageSummary.querySelector(
    "form #creditcard"
  ) as HTMLInputElement;
  const printParcelas = pageSummary.querySelector(
    "form #installments"
  ) as HTMLInputElement;

  const printQuantServicos = pageSummary.querySelector(
    "form #services"
  ) as HTMLInputElement;

  const printDataServico = pageSummary.querySelector(
    "form #schedule_at"
  ) as HTMLInputElement;

  const printValorTotal = pageSummary.querySelector(
    "form #total"
  ) as HTMLInputElement;
}
