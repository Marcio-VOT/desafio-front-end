import styled from "styled-components";

export const InputContainer = styled.div`
  height: 48px;
  width: 335px;
  position: relative;
input{
    padding: 0 16px;
    padding-right: 40px;
    border: 1px solid #DFDFDF;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    &:focus{
      outline: 1px solid #00579D;
    }
  }
  
  img{
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
  }
  @media (max-width: 768px){
    width: 100%;
    margin-top: 28px;
  }
`;

export const TitleSearchStyle = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  h1{
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0px;
    text-align: left;
    font-family: Roboto, sans-serif;
  }
`;