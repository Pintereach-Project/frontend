import React from 'react';
import {
    SavedArticleContainer,
    AddArticleBtn,
    SavedArticleForm,
    FormDiv,
    FormLabel,
    SelectCategory,
    ResetBtn,
    SavedArticlesDiv,
    ArticleCard,
    DeleteBtn,
    ArticleInfo,
    Title,
    Rating,
    Category,
    GoToBtn,
} from './SavedArticlesStyling';

const SavedArticles = () => {
    return (
        <SavedArticleContainer>
            <AddArticleBtn href='/add-article'>Add an article</AddArticleBtn>
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
                </FormDiv>
            </SavedArticleForm>
            <SavedArticlesDiv>
                <ArticleCard>
                    <DeleteBtn>X</DeleteBtn>
                    <ArticleInfo>
                        <Title></Title>
                        <Category>News</Category>
                        <Rating>5</Rating>
                    </ArticleInfo>
                    <GoToBtn>Read Article</GoToBtn>
                </ArticleCard>
            </SavedArticlesDiv>
            <ResetBtn>Reset</ResetBtn>
        </SavedArticleContainer>
    )
}

export default SavedArticles
