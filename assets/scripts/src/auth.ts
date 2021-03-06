// Arquivo para controle dos formulários de autenticação

const authPage = document.querySelector("main#auth");

if (authPage) {
  const hideAuthForms = () => {
    document
      .querySelectorAll("#auth form")
      .forEach((el) => el.classList.add("hide"));
  };

  const showAuthForm = (id: string) => {
    document.getElementById(id)?.classList.remove("hide");
  };

  const authHash = () => {
    hideAuthForms();

    if (sessionStorage.getItem("email")) {
      const emails = [
        ...document.querySelectorAll<HTMLInputElement>("[name=email]"),
      ];

      emails.forEach((el: HTMLInputElement) => {
        if (el) {
          el.value = sessionStorage.getItem("email") ?? "";
        }
      });
    }

    switch (window.location.hash) {
      case "#register":
        showAuthForm("register");
        break;
      case "#login":
        showAuthForm("login");
        break;
      case "#forget":
        showAuthForm("forget");
        break;
      case "#reset":
        showAuthForm("reset");
        break;
      default:
        showAuthForm("auth-email");
    }
  };

  window.addEventListener("load", (evt) => {
    // Janela ou site carregou
    authHash();
  });

  window.addEventListener("hashchange", (evt) => {
    // Janela ou site carregou
    authHash();
  });

  const formAuthEmail = document.querySelector(
    "#auth-email"
  ) as HTMLFormElement;

  formAuthEmail.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    try {
      const form = e.target as HTMLFormElement;
      const button = form.querySelector("[type=submit]") as HTMLButtonElement;
      const email = form.querySelector("[type=email]") as HTMLInputElement;
      button.disabled = true;
      sessionStorage.setItem("email", email.value);
      button.disabled = false;
      location.hash = "#login";
    } catch (err) {
      console.warn("Houve um problema no envio do formulário");
    }
  });
}
