import './index.css'
console.log('hello world');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log(registration);
    }).catch(err => {
      console.log('error');
    });
  });
}