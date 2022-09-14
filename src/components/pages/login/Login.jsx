import React from "react";

export default function Login() {
  return (
    <section className="area-login">
      <div className="login">
        <div className="login-name">Login</div>

        <form>
          <input
            type="text"
            name="nome"
            placeholder="Nome de usuário"
            id="nome"
            autofocus
            required
          />
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            id="senha"
            required
          />
          <input type="submit" value="entrar" onClick={logar} />
        </form>

        <p>
          Ainda não tem uma conta?<a href="#">Criar conta</a>
        </p>
      </div>
    </section>
  );
}

function logar() {
  const login = document.getElementById("nome").value;
  const email = document.getElementById("senha").value;

  if (login === "admin" && email === "admin") {
    alert("Sucesso");
  } else {
    alert("Usuário ou senha incorretos!");
  }
}
