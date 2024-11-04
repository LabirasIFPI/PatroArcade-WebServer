document
  .getElementById("loginForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Impede o formulário de enviar de forma padrão e recarregar a página.

    // Captura os dados do formulário
    const username = event.target.username.value;
    const password = event.target.password.value;

    const mainUrl = "http://localhost:3001/";

    try {
      console.log(
        `Tentando fazer login com usuário ${username} e senha ${password} ...`
      );

      // Envia a requisição para o back-end
      // TODO: Substituir o "0" pelo id do cliente (fliperama)
      const response = await fetch(mainUrl + "login/" + "0", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }), // Envia o username e password como JSON
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (response.status === 200) {
        document.getElementById("errorMessage").innerText = ""; // Limpa a mensagem de erro
        alert(result.content); // Exibe a mensagem de sucesso (pode redirecionar para outra página)
        window.location.href = "/dashboard.html"; // Exemplo de redirecionamento
      } else {
        // Exibe mensagem de erro em caso de falha
        document.getElementById("errorMessage").innerText = result.content;
      }
    } catch (error) {
      console.error("Erro ao tentar fazer login:", error);
      document.getElementById("errorMessage").innerText =
        "Erro ao conectar ao servidor.";
    }
  });
