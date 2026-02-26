const Auth = (function() {

  // 🔒 Privado
  let usuarioLogado = null;

  function validarLogin(usuario, senha) {
    return usuario === "admin" && senha === "123";
  }

  // 🌎 Público
  return {
    login(usuario, senha) {
      if (validarLogin(usuario, senha)) {
        usuarioLogado = usuario;
        console.log("Login realizado!");
      } else {
        console.log("Login inválido!");
      }
    },

    logout() {
      usuarioLogado = null;
      console.log("Logout realizado!");
    },

    status() {
      return usuarioLogado ? "Logado" : "Deslogado";
    }
  };

})();

// LOGIN CORRETO
// Auth.login("admin", "123");
// console.log(Auth.status());


// LOGIN INVÁLIDO
// Auth.login("admin", "999");
// console.log(Auth.status());

// TENTANDO ALTERAR O USUARIO QUE ESTÁ LOGADO
// usuarioLogado = "eu";
// console.log(Auth.status());