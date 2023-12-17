import React from 'react';
import './article.css';

const Article = ( {imageUrl , date, title} ) => {
  return (
    <div className='gpt3_article'>
      <div className='gpt3_article-img'>
        <img src={imageUrl} alt='Blog-Image' />
      </div>

      <div className='gpt3_article-container'>
        <div className='gpt3_article-container-head'>
          <p>{date}</p>
          <h1>{title}</h1>
        </div>

        <div className='gpt3_article-container-2'>
          <p>Read Full Article</p>
        </div>

      </div>

    </div> 
  );
}

export default Article;
