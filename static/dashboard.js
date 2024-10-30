const mainUrl = "http://localhost:3001/";

document.getElementById("logoutButton").addEventListener("click", function () {
  fetch(mainUrl + "logout/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => {
      if (response.ok) {
        window.location.href = "/login";
      } else {
        alert("Failed to log out");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred while logging out");
    });
});
