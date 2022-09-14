import React from "react";

export default function Default(props) {
  return (
    <section className="area-login">
      <div className="login">
        <div className="login-name">Login</div>

        {props.children}

        <p>
          Ainda não tem uma conta?<a href="#">Criar conta</a>
        </p>
      </div>
    </section>
  );
}
