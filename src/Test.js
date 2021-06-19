import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react'

const NewQuote = ({onClick}) => {

    return (
        <button id="new-quote" onClick={onClick}>New quote</button>
    )
}

const Tweet = () => {
    return (
       
            <a href="https://twitter.com/intent/tweet" id="tweet-quote" target="_blank"><img src={tweetPic} /></a>
       
    )
}


const Author = ({author}) => {
    return (
        <div style={{textAlign:'right', padding:'15px'}}>
            <h3 id="author"><em>--{author}</em></h3>
        </div>
    )
}


const Text = ({quote}) => {

    return (
        <div id="text" style={{textAlign:'center'}}>
            <h2>{quote}</h2>
        </div>
    )
}



const QuoteBox = ({quote, author, onClick}) => {

    return (
        <div id="quote-box">
            <div id="textauth-wrap">
                <Text quote={quote}/>
                <Author author={author}/>
            </div>
            <div id="btns">
                <NewQuote onClick={onClick}/>
                <Tweet />
            </div>
        </div>

    )
}

function App() {

  let xhr = new XMLHttpRequest();
  let data;
  xhr.open("GET", "https://type.fit/api/quotes",false);

  xhr.onload = async () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        data = JSON.parse(xhr.responseText);
      } else {
        console.log("Something went wrong :-(")
      }
  }
  xhr.send();

  // Fetch a random quote from fetched data
  function randomQuote(data) {
    const index = Math.round(Math.random() * (data.length - 1));
    const quote = data[index].text;
    const author = data[index].author;
    return { quote, author };
  }

  // Set state
  const [state, setQuote] = useState(() => randomQuote(data));

  // Handle click to fetch new quote
  const handleClick = () => {
    setQuote(() => randomQuote(data));
  }

  return (
    <div className="App">
      <QuoteBox quote={state.quote} author={state.author} onClick={handleClick} />
    </div>
  );

}

console.log(999999)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
