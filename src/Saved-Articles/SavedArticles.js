import React, { useState, useEffect } from 'react';
import {
    PageTitle,
    SavedArticleContainer,
    AddArticleBtn,
    SavedArticleForm,
    FormDiv,
    FormLabel,
    SelectCategory,
    ResetBtn,
    SavedArticlesDiv,
    DeleteBtn,
    ArticleInfo,
    Title,
    Rating,
    Category,
    GoToBtn,
} from './SavedArticlesStyling';
import axios from 'axios';
import ArticleCard from '../Articles/ArticleCard';


const baseURL = 'https://pintereach-backend.herokuapp.com'

const SavedArticles = (props) => {
    const [articleData, setArticleData] = useState([]);

    useEffect(() => {
        axios
        .get(`${baseURL}/api/saved-articles/:userId`)
        .then(res => {
            setArticleData(res.data)
        })
        .catch(err => console.log(err))
     }, [])
    

    return (
        <SavedArticleContainer>
            <PageTitle>Saved Articles</PageTitle>
            <SavedArticleForm>
                <FormDiv>
                    <FormLabel>Display articles by category:</FormLabel>
                    <SelectCategory>
                        <option>--Select a Category--</option>
                        <option value='auto'>Automotive</option>
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
                    </SelectCategory>
                    <ResetBtn>Reset Category</ResetBtn>
                </FormDiv>
            </SavedArticleForm>
            <SavedArticlesDiv>
            {articleData.map(article => {
                    return (
                        <ArticleCard article={article} />
                    )
                })}
            </SavedArticlesDiv>
            <AddArticleBtn href='/addarticle'>Add an Article</AddArticleBtn>
        </SavedArticleContainer>
    )
}

export default SavedArticles
