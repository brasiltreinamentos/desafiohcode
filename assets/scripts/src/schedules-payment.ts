const pagePayment = document.querySelector("#schedules-payment") as HTMLElement;

if (pagePayment) {
  //Dados Formulario
  const numeroCartao = pagePayment.querySelector(
    "form #number"
  ) as HTMLInputElement;

  const validadeCartao = pagePayment.querySelector(
    "form #expiry"
  ) as HTMLInputElement;

  const codigoCVV = pagePayment.querySelector("form #cvv") as HTMLInputElement;

  const nomeCartao = pagePayment.querySelector(
    "form #name"
  ) as HTMLSelectElement;

  const bancoEmissor = pagePayment.querySelector(
    "form #bank"
  ) as HTMLSelectElement;

  const parcelas = pagePayment.querySelector(
    "form #installments"
  ) as HTMLSelectElement;

  const idCpf = pagePayment.querySelector("form #document") as HTMLInputElement;

  //Elemento Form-Card

  const formCardEl = pagePayment.querySelector(".form-card") as HTMLDivElement;

  const bandeiraEl = formCardEl.querySelector(".number-1") as SVGTSpanElement;
  const emissorEl = formCardEl.querySelector(".number-2") as SVGTSpanElement;
  const contaEClienteEl = formCardEl.querySelector(
    ".number-3"
  ) as SVGTSpanElement;
  const digitoVerificadorEl = formCardEl.querySelector(
    ".number-4"
  ) as SVGTSpanElement;
  const nomeEl = formCardEl.querySelector(".name") as SVGTSpanElement;
  const validadeCartaoEl = formCardEl.querySelector(
    ".expiry"
  ) as SVGTSpanElement;
  const codigoCVVEl = formCardEl.querySelector(".cvv") as SVGTSpanElement;

  bandeiraEl.textContent = "0000";
  emissorEl.textContent = "0000";
  contaEClienteEl.textContent = "0000";
  digitoVerificadorEl.textContent = "0000";
  nomeEl.textContent = "HUGO LELIO R JR";
  validadeCartaoEl.textContent = "01/22";
  codigoCVVEl.textContent = "188";
}
