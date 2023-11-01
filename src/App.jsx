import { useEffect } from "react";

import './angular-files/rtg-micro-fe';
import './angular-files/lara-light-indigo/theme.css';
import './angular-files/styles.css';

import './App.css';

import './Greetings';


import r2wc from "@r2wc/react-to-web-component"

function App() {

  useEffect(() => {
    debugger;

    let textareaDisplayValueNode = document.getElementById('textarea-display-value');

    if(!textareaDisplayValueNode)
      textareaDisplayValueNode = document.querySelector('wc-app').shadowRoot.getElementById('textarea-display-value');

    let textAreaComponent = document.querySelector('rtg-wc-textarea[id="summary-id"]');

    if(!textAreaComponent)
      textAreaComponent = document.querySelector('wc-app').shadowRoot.querySelector('rtg-wc-textarea[id="summary-id"]');

    if(textAreaComponent && textAreaComponent.getAttribute('listener') !== 'true') {
        textAreaComponent.setAttribute('listener', 'true');
        textAreaComponent.addEventListener('input', function (e) {
          debugger;
            //console.log(e.target.value);
            textareaDisplayValueNode.innerText = `Text Area Value -> ${e.target.value ?? ''}`;
        });
        textareaDisplayValueNode.innerText = `Text Area Value -> ${textAreaComponent.value ?? ''}`;
    }
  }, []);

  return (
    <>
      <web-greeting></web-greeting>
      <div className="layout-wrapper layout-theme-light layout-static">
          <div className="layout-main-container">
              <div className="layout-main">
                <div className="card">
                  <h5>Float Label</h5>
                  <p>A Text area component supports floating label by adding (<mark>.p-float-label</mark>) to wrapper class.</p>
                  <div className="grid p-fluid mt-3">
                      <div className="field col-12 md:col-4">
                        <rtg-wc-textarea 
                          id="summary-id"
                          name="summary"
                          label="Summary"
                          placeholder="Sample Placeholder">
                        </rtg-wc-textarea>
                        <p id="textarea-display-value"></p>
                      </div>
                  </div>
                </div>  
              </div>
          </div>
      </div>  
    </>
  )
}

const AppWC = r2wc(App, {
  shadow: "open", 
});

if(!customElements.get('wc-app'))
  customElements.define("wc-app", AppWC);

export default App
