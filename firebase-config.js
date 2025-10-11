// Firebase configuration file
// IMPORTANT: substitua os valores abaixo pelo objeto firebaseConfig do seu projeto
// Copie o objeto de configuração do console do Firebase (Config do app web)

window.firebaseConfig = {
  apiKey: "AIzaSyC4B0cwvij7KH0k0Z5Ivn9j7Q3tP2WQfbU",
  authDomain: "diplosys.firebaseapp.com",
  projectId: "diplosys",
  storageBucket: "diplosys.firebasestorage.app",
  messagingSenderId: "326167288721",
  appId: "1:326167288721:web:54de838bbab39fc0491830",
  measurementId: "G-VHT27S8QNS"
};

// Inicializa o Firebase (utilizando SDK compat para simplicidade)
if (typeof firebase !== 'undefined') {
  try {
    firebase.initializeApp(window.firebaseConfig);
    window.db = firebase.firestore();
    console.info('Firebase inicializado. Firestore disponível em window.db');
  } catch (e) {
    console.error('Erro inicializando Firebase:', e);
  }
} else {
  console.warn('Firebase SDK não encontrado. Adicione os scripts do Firebase em seu HTML.');
}
