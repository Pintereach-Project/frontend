import axios from 'axios';
import React from 'react';
import {
    ArticleCardContainer,
    Image,
    Title,
    Content
} from './ArticlesStying';
import CatRankForm from './CatRankForm';


const ArticleCard = (props) => {

    const handleSaveArticle = () => {
        axios.post(`${props.baseURL}/api/articles/${props.article.id}`, {
            userId: '123'
        })
    }

    const handleDeleteArticle = () => {
        axios.post(`${props.baseURL}/api/articles/${props.article.id}`, {
            savedId: props.article.id
        })
    }

    return (
        <ArticleCardContainer>
            <Image src={props.article.image} />
            <Title>{props.article.title}</Title>
            <Content>{props.article.content}</Content>
            {props.save && (
                <button onClick={handleSaveArticle}>Save Article</button>
            )}
            {!props.save && (
                <button onClick={handleDeleteArticle}>Delete Article</button>
            )}
            {!props.save && (
                <CatRankForm />
            )}
        </ArticleCardContainer>
    )
}

export default ArticleCard
