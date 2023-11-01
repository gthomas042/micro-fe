import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// // Toggle the 'ReactDOM.createRoot' with the below section to enable the 'App' web component.

// (async ()=>{
//   debugger;
//   const wcApp = document.querySelector('wc-app');
//   if(wcApp) {
//     // Source 1: https://github.com/vitejs/vite/issues/11855
//     // Source 2: https://stackoverflow.com/questions/64688839/uncaught-domexception-failed-to-set-the-adoptedstylesheets-property-on-shado
//     // Apply the desired style sheets to your custom element (via the shadow root):

//       let sheetContents = Array.from(document.documentElement.querySelectorAll('style')).map(el => el.innerHTML);

//       for(let i = 0; i < sheetContents.length; i++) {
//         let sheet = new CSSStyleSheet();
//         await sheet.replace(sheetContents[i]);
//         wcApp.shadowRoot.adoptedStyleSheets.push(sheet);
//       }
//   }
// })();