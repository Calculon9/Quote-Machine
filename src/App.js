//import data from './data.json'
import { useState } from 'react'
import QuoteBox from './components/QuoteBox'


function App() {

  // Retrieve quotes
  let xhr = new XMLHttpRequest();
  let data;
  xhr.open("GET", "https://type.fit/api/quotes", false);

  xhr.onload = () => {
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

export default App;
