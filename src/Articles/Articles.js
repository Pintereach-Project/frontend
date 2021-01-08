import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    ArticlesContainer,
    ArticlesDiv,
    PageTitle,
} from './ArticlesStying';
import ArticleCard from './ArticleCard';

const baseURL = 'https://pintereach-backend.herokuapp.com'

const Articles = () => {
 const [articleData, setArticleData] = useState([]);

 useEffect(() => {
    axios
    .get(`${baseURL}/api/articles`)
    .then(res => {
        setArticleData(res.data)
    })
    .catch(err => console.log(err))
 }, [])

    
    return (
        <ArticlesContainer>
            <PageTitle>Article Suggestions</PageTitle>
            <ArticlesDiv>
                {articleData.map(article => {
                    return (
                        <ArticleCard article={article} baseURL={baseURL} save/>
                    )
                })}
            </ArticlesDiv>
        </ArticlesContainer>
    )
}

export default Articles
