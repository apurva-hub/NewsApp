

function NewsFeeds(props)
{
    return(
        <div className="grid">
       <div className="article_grid">
       {props.image == null ? <img className="article_image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvlZB6Pukqg5nbr9q4PQ8XwhIiogCIIQBQTA&usqp=CAU" alt="article"/> : <img className="article_image" src={props.image} alt="article"/> }

       
           <div className="article_content">
               <a href={props.link} target="_blank" rel="noopener noreferrer">
                   <b className="article_title">{props.title}</b>
                   </a>
           <p className="article_description">{props.description}</p>
           <p className="article_info">{props.content}</p></div>
           
       </div>
       </div>

    );
}

export default NewsFeeds;