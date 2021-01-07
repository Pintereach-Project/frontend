import React from 'react';
import useArticleForm from './useArticleForm';
import './AddArticle.css';

export default function AddArticle(){
    const { changeArticle, values, submitArticle } = useArticleForm();
    return(
        <div className='article-form-container'>
        
        <div className='add-article-content'>
          <form onSubmit={submitArticle}>
            <h1>Add an Article</h1>
            <div className='text-input'>
                <label>Article Name</label>
                <input 
                type='text'
                name='articleName'
                placeholder='Enter article name'
                value={values.articleName}
                onChange={changeArticle}
                />
            </div>  
            <div className='text-input'>
                <label>Article URL</label>
                <input 
                type='text' 
                name='articleURL'
                placeholder='Enter article url'
                value={values.articleURL}
                onChange={changeArticle}
             />
            </div> 
            <div className='selection'>
                <label>Category</label>
                <select value={values.category} onChange={changeArticle} name='category'>
                    <option value=''>---Select One---</option>
                    <option value='auto'>Auto</option>
                    <option value='business'>Business</option>
                    <option value='culture'>Culture</option>
                    <option value='economy'>Economy</option>
                    <option value='education'>Education</option>
                    <option value='energy'>Energy</option>
                    <option value='entertainment'>Entertainment</option>
                    <option value='food'>Food</option>
                    <option value='gaming'>Gaming</option>
                    <option value='movies'>Movies</option>
                    <option value='music'>Music</option>
                    <option value='news'>News</option>
                    <option value='sports'>Sports</option>
                    <option value='technology'>Technology</option>
                    <option value='other'>Other</option>
                </select>
            </div>
            <div className='selection'>
                <label>Importance</label>
                <select value={values.rating} onChange={changeArticle} name='rating'>
                    <option value=''>---Select One---</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
            </div>
            <button className='article-button'>Add Article</button>
          </form>
        </div>
        <div className='right-content'>
            <div className='picture'>Picture Here</div>
        </div>
        </div>
    )
}