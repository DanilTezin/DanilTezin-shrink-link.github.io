import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import ReactDOM from 'react-dom'


let text = React.createRef()


const App = () => {

  const [short, setShort] = useState('')

  const copy = () =>{
    let copyText = document.getElementById("myInit");
  
    copyText.select();
  
    document.execCommand("copy");
  
    alert("Copied the text: " + copyText.value);
  }

  let shot = () => {

    const data = `url=${text.current.value}`;
    
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {

      if (this.readyState === this.DONE) {

        console.log(this.responseText);
        let one = JSON.parse(this.responseText)
        
        setShort(one.result_url)

      }
    });

    xhr.open("POST", "https://url-shortener-service.p.rapidapi.com/shorten");
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("x-rapidapi-key", "87e88f6021mshb347600e21d5a21p1d60afjsn83f9ab198fc1");
    xhr.setRequestHeader("x-rapidapi-host", "url-shortener-service.p.rapidapi.com");

    xhr.send(data);
  }



  let ooo = () => { console.log(text.current.value) }

  return (
      <div>
          <div class="glava"></div>
          <div class="header">SHRINK LINK</div>
          <div class="wrap">
              <div class="wrap2">
                  <div class="text">Your link </div>
                  <input ref={text} placeholder="LAST" class="inputText" type="text"  />
                </div>
              <button onClick={shot} class="shrink">Shrink</button>
              <div class="sokr">

                  <div class="text">YOUR LINK</div>
                  <input placeholder='NEW' onClick={copy} id="myInit" value={short}class="inputText2" type="text"></input>
              </div>
          </div>
          <div class="glava"></div>
      </div>

  );

}

export default App;
