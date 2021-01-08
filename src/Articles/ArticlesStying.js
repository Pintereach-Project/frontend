import styled from 'styled-components';

export const ArticlesContainer = styled.div`
  margin: 100px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  background: linear-gradient(90deg, rgb(40, 40, 40) 0%, rgb(17, 17, 17) 100%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArticlesDiv = styled.div`
    width: 75%;
    margin: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

export const PageTitle = styled.h1`
  color: #fff;
  padding: 30px;
`;

export const ArticleCardContainer = styled.div`
  margin: 10px;
  width: 400px;
  height: 500px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  background: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

export const Image = styled.img`
    width: 300px;
    margin: 15px;
    border-radius: 10px;
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  color: #000;
  text-align: center;
  padding: 5px;
`;

export const Content = styled.p`
  color: #000;
  text-align: center;
  margin: 15px;
`;