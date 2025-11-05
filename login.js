document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
 
    // Monitora o estado de autenticação do Firebase
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // Se o usuário estiver logado, redireciona para o dashboard
            if (window.location.pathname.endsWith('login.html')) {
                window.location.href = 'index.html';
            }
        }
    });
 
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
 
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
 
        // Autenticação com Firebase
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Login bem-sucedido, o onAuthStateChanged fará o redirecionamento
            })
            .catch((error) => {
                errorMessage.textContent = 'Email ou senha inválidos.';
                errorMessage.classList.remove('hidden');
            });
    });
});