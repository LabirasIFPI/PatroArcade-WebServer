document.querySelector('#submitButton').addEventListener('click', function() {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const apiURL = "#{apiURL}"

    const arcadeData = "#{arcadeData}" || null;
    // Encerrar caso não tenhamos arcadeData
    if (!arcadeData) {
        return;
    }

    const arcadeId = arcadeData.id;
    console.log("Arcade ID: ", arcadeId);

    fetch(`${apiURL}/login/${arcadeId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.type === 'loginSuccess') {
            window.location.href = '/player/' + data.content.id;
        } else {
            // TODO: Redirecionar para página de erro
            alert('Falha ao logar: ' + data.content);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});

document.querySelector('#adminSubmitButton').addEventListener('click', function() {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const apiURL = "#{apiURL}"

    const arcadeTempId = "#{arcadeTempId}" || null;
    console.log("Temp ID: ", arcadeTempId);
    fetch(`${apiURL}/arcadeLogin/${arcadeTempId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.type === 'loginSuccess') {
            window.location.href = '/'; // TODO: Redirecionar para painel de admin.
        } else {
            alert("Falha ao logar: " + data.content);
        }
    });
});

const arcadeTempId = "#{arcadeTempId}" || null;
if (arcadeTempId) {
    document.querySelector('#adminSubmitButton').textContent = 'Entrar como Admin: ' + arcadeTempId;
    document.querySelector('#submitButton').style.display = 'none';
}

if (!arcadeTempId) {
    document.querySelector('#adminSubmitButton').style.display = 'none';
}
