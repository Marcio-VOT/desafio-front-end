import styled from "styled-components";

export const EmptyBodyBodyTableContainer = styled.tbody`
  text-align: center;
  box-shadow: 0px 1px 2px 0px #00000033;
  tr {
    td {
      height: 50dvh;
      vertical-align: middle;

      h1 {
        font-family: Roboto;
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
      }
      img {
        width: 40px;
        height: auto;
        margin-top: 20px;
        cursor: pointer;
        &:hover {
          transform: scale(1.5) rotate(180deg);
        }
      }
    }
  }
`;