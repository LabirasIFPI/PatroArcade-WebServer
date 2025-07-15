document.querySelector("#submitButton").addEventListener("click", function () {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  const apiURL = document.querySelector("#apiURL").value;
  const arcadeId = document.querySelector("#arcadeId").value;

  console.log("Arcade ID: ", arcadeId);

  fetch(`${apiURL}/login/${arcadeId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.type === "loginSuccess") {
        window.location.href = "/player/" + data.content.id;
      } else {
        // TODO: Redirecionar para página de erro
        alert("Falha ao logar: " + data.content);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    });
});

// if (arcadeTempId) {
//   document.querySelector("#adminSubmitButton").textContent =
//     "Entrar como Admin: " + arcadeTempId;
//   document.querySelector("#submitButton").style.display = "none";
// }

// if (!arcadeTempId) {
//   document.querySelector("#adminSubmitButton").style.display = "none";
// }

document.querySelector("#adminSubmitButton").style.display = "none";
