import styled from 'styled-components';

export const SavedArticleContainer = styled.div`
  margin: 100px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  background: linear-gradient(90deg, rgb(40, 40, 40) 0%, rgb(17, 17, 17) 100%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageTitle = styled.h1`
  color: #fff;
  padding: 30px;
`;

export const AddArticleBtn = styled.a`
    width: 300px;
    margin: 30px;
    height: 40px;
    border-radius: 2px;
    background: linear-gradient(
        90deg,
        rgb(74, 152, 230) 0%,
        rgb(119, 178, 236) 100%
    );
    outline: none;
    border: none;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    text-decoration: none;

    &:hover {
        cursor: pointer;
        background: linear-gradient(
        90deg,
        rgb(39, 143, 255) 0%,
        rgb(12, 99, 250) 100%
        );
        transition: all 0.4s ease-out;
    }
`;

export const SavedArticleForm = styled.form`
  width: 90%;
  margin: 15px;
`;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormLabel = styled.label`
  color: #fff;
  font-size: 1rem;
`;

export const SelectCategory = styled.select`
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 40px;
  width: 300px;
  margin: 0 15px;
`;

export const ResetBtn = styled.button`
    margin: 15px;
    width: 300px;
    height: 40px;
`;

export const SavedArticlesDiv = styled.div`
    width: 75%;
    margin: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

export const ArticleCard = styled.div`
  margin: 10px;
  width: 400px;
  height: 300px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  background: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

export const DeleteBtn = styled.span`
  font-size: 1.5rem;
  z-index: 1;
  color: #000;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  margin: 11px;
`;

export const ArticleInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #000;
  text-align: center;
  padding: 5px;
`;

export const Rating = styled.p`
  color: #000;
`;

export const Category = styled.p`
  color: #000;
  font-size: 1rem;
`;

export const GoToBtn = styled.a`
    width: 100px;
    height: 40px;
    border-radius: 2px;
    background: linear-gradient(
        90deg,
        rgb(74, 152, 230) 0%,
        rgb(119, 178, 236) 100%
    );
    outline: none;
    border: none;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    font-size: 0.85rem;
    position: absolute;
    bottom: 0;
    margin: 15px;

    &:hover {
        cursor: pointer;
        background: linear-gradient(
        90deg,
        rgb(39, 143, 255) 0%,
        rgb(12, 99, 250) 100%
        );
        transition: all 0.4s ease-out;
    }
`;