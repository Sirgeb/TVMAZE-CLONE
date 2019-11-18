import styled from 'styled-components';

const MovieCardStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  background: #ffffff;
  margin-bottom: 20px;
  padding: 10px;
  height: 350px;

  &:hover {
    cursor: pointer;
    border: 1px solid ${props => props.theme.colors.grey};
    border-radius: 5px;
    padding:0;
  }

  a {
    text-decoration: none;
  }
  img {
    width: 100%;
    height: 200px;
  }

  .title {
    color: ${props => props.theme.colors.black};
    font-weight: 600;
  }

  .description {
    color: grey;
    font-size: 14px;
    text-align: justify;
  }

  .content {
    padding: 20px;
  }

  .info {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  }

  .info div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 20px;
    border-radius: 5px;
    padding: 10px;
  }

  .star {
    background: ${props => props.theme.colors.blue};
    color: ${props => props => props.theme.colors.white};
    margin-right: 20px;
  }

  .year {
    background: grey;
    color: ${props => props => props.theme.colors.white};
  }
`;

export default MovieCardStyles;
