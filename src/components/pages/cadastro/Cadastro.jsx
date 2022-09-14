import React from "react";

export default function Cadastro() {
  return (
    <div className="container">
      <div className="form">
        <form action="#">
          <div className="form-header">
            <div className="title">
              <h1>Cadastre-se</h1>
            </div>
            <div className="login-button">
              <button>
                <a href="#">Entrar</a>
              </button>
            </div>
          </div>
          <div className="input-group" id="input-group">
            <div className="container-a">
              <div className="input-box">
                <label for="firstname">Primeiro nome</label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="Digite seu primeiro nome"
                  required
                />
              </div>

              <div className="input-box">
                <label for="lastname">Sobrenome</label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Digite seu sobrenome"
                  required
                />
              </div>

              <div className="input-box">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="lastname"
                  placeholder="Digite seu email"
                  required
                />
              </div>
            </div>

            <div className="container-b">
              <div className="input-box">
                <label for="date">Data de nascimento</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  placeholder="Data de aniversário"
                  required
                />
              </div>

              <div className="input-box">
                <label for="password">Senha</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Digite sua senha"
                  required
                />
              </div>

              <div className="input-box">
                <label for="Confirmpassword">Confirme sua senha</label>
                <input
                  type="password"
                  id="confirmpassword"
                  name="Confirmpassword"
                  placeholder="Digite sua senha novamente"
                  required
                />
              </div>
            </div>
          </div>

          <div className="gender-inputs">
            <div className="gender-title">
              <h6>Gênero</h6>
            </div>

            <div className="gender-group">
              <div className="gender-input">
                <input type="radio" id="female" name="gender" />
                <label for="female">Feminino</label>
              </div>
              <br />
              <div className="gender-input">
                <input type="radio" id="male" name="gender" />
                <label for="male">Masculino</label>
              </div>
              <br />
              <div className="gender-input">
                <input type="radio" id="others" name="gender" />
                <label for="others">Outros</label>
              </div>
            </div>
          </div>
          <div className="continue-button">
            <button>
              <a href="#" type="submit">
                Continuar
              </a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

<script src="index.js"></script>;
