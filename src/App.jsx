import {useState, useContext} from 'react';
import {AppContext} from "./context/AppContext";
import Filter from "./components/Filter";
import QuoteCard from "./components/QuoteCard";
import ThemeSwitch from './components/ThemeSwitch';

let quotes = [
  {id: "1", text: "Genius is one percent inspiration and ninety-nine percent perspiration.", author: "Thomas", category: "motivation"},
  {id: "2", text: "You can observe a lot just by watching.", author: "Thomas", category: "inspiration"},
  {id: "3", text: "A house divided against itself cannot stand.", author: "Lincoln", category: "motivation"},
  {id: "4", text: "Difficulties increase the nearer we get to the goal.", author: "Lincoln", category: "inspiration"},
  {id: "5", text: "Fate is in your hands and no one elses", author: "Byron", category: "inspiration"},
  {id: "6", text: "Be the chief but never the lord", author: "Byron", category: "motivation"},
  {id: "7", text: "Today is the tomorrow we worried about yesterday.", author: "Roland", category: "Humour"},
  {id: "8", text: "Peace comes from within. Do not seek it without.", author: "Roland", category: "Humour"},
]

function App(){
  const [author, setAuthor] = useState("Thomas");
  const context = useContext(AppContext)

  function authorFilter(event){
    let inputValue = event.target.value;
    setAuthor(inputValue)
  }

  function quoteFilter(author){
    let filteredQuotes = quotes.filter((quote)=>quote.author == author);
    return filteredQuotes;
  }

  return (
    <div className="w-1/2 m-auto">
      <div>
        <h1 className="text-center text-4xl pt-16 font-bold pb-4">Quotes App</h1>
        <ThemeSwitch/>
      </div>

      <div className="flex gap-4 pt-16">
        <Filter 
          title="Category Filter" 
          data={Array.from(new Set(quotes.map((quote)=>quote.category)))}
        />

        <Filter 
          title="Author Filter" 
          data={Array.from(new Set(quotes.map((quote)=>quote.author)))}
          onClick={authorFilter}
        />
      </div>

      <div className={`flex flex-wrap justify-center mt-4 gap-4 py-16 ${context.theme == "light" ? "bg-white text-black" : "bg-black text-white"}`}>
        {
          quoteFilter(author).map((quote)=>{
            return  <QuoteCard key={quote.id} text={quote.text} author={quote.author}/>
          })
        }
      </div>
    </div>
  )
}

export default App;

