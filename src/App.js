import NewsFeed from "./newsfeed";
import "./App.css";
import { useState } from "react";
import Navbar from "./navbar";

function App() {
  const [news, setnews] = useState([]);

  const fetchNews = async (country, category) => {
    try {
      const response = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_6722b45570255c74298799f3efad3fa576ac&country=${country}&category=${category}`
      );
      const newsArticles = await response.json();
      setnews(newsArticles.results);
    } catch (error) {
      alert("Try again");
    }
  };
  console.log(news);

  return (
    <div>
      <Navbar fetch={fetchNews} />
      {news.map((items) => (
        <NewsFeed
          key={items.title}
          title={items.title}
          description={items.description}
          link={items.url}
          image={items.image_url}
          content={items.content}
        />
      ))}
    </div>
  );
}

export default App;
