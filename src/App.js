import NewsFeed from './newsfeed';
import './App.css';
import { useState } from 'react';
import Navbar from './navbar';

function App() {
  const[news, setnews] = useState([]);
  
  const fetchNews = async (country, category)  => {
    try{
     const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=370390adb3da4228aa9fd43e61343d65`);
     const newsArticles = await response.json();
     setnews(newsArticles.articles);
    }catch(error){
      alert("Try again");
    }

  }
  console.log(news);

 
  return (
    <div>
      
      <Navbar fetch={fetchNews} />
      {news.map((items) => (
        <NewsFeed key= {items.title} title= {items.title} description={items.description} link={items.url} image={items.urlToImage} content={items.content}/>
      ))}
      
   
    </div>
    
  );
}

export default App;




