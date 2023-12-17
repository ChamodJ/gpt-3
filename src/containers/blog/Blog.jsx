// rafce

import React from 'react'

import './blog.css'
import {Article} from '../../components'
import {b1, b2, b3, b4, b5} from './imports'

const Blog = () => {
  return (
    <div className='gpt3_blog section_padding'>
      <div className='gpt3_blog-container-title'>
        <h1 className='gradient_text'>A lot is happening, We are blogging about it.</h1>
      </div>

      <div className='gpt3_blog-container'>
        

        <div className='gpt3_blog-container-A'>
          <Article imageUrl={b1} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        </div>

        <div className='gpt3_blog-container-B'>
          <Article imageUrl={b1} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article imageUrl={b1} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article imageUrl={b1} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article imageUrl={b1} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        </div>

      </div>
      
    </div>
  )
}

export default Blog