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