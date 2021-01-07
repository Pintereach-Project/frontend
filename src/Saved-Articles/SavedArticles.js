import React from 'react';
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
                <ArticleCard>
                    <DeleteBtn>X</DeleteBtn>
                    <ArticleInfo>
                        <Title>Title</Title>
                        <Category>Category: News</Category>
                        <Rating>Importance: 5</Rating>
                    </ArticleInfo>
                    <GoToBtn>Read Article</GoToBtn>
                </ArticleCard>
            </SavedArticlesDiv>
            <AddArticleBtn href='/add-article'>Add an Article</AddArticleBtn>
        </SavedArticleContainer>
    )
}

export default SavedArticles
