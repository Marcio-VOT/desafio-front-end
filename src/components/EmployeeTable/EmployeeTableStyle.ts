import styled from "styled-components";

export const EmployeeTableHeader = styled.thead`
  height: 47px;
  box-shadow: 0px 1px 2px 0px #00000033;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background: linear-gradient(180deg, #5a84c0 0%, #594ed2 100%);
  th {
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    color: #fff;
  }
  .photo {
    border-top-left-radius: 8px;
  }
  .end,
  .phone {
    border-top-right-radius: 8px;
  }
  th {
    vertical-align: middle;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
  }
`;

export const EmployeeTableStyle = styled.table`
  margin-top: 32px;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  border-collapse: separate;
  border-spacing: 0 1px;
  background-color: white;
  .end {
    display: none;
    @media (max-width: 768px) {
      display: table-cell;
      padding-left: 10px;
    }
  }
  .phone {
    @media (max-width: 768px) {
      display: table-column;
    }
  }
  .admission {
    @media (max-width: 600px) {
      display: none;
    }
  }
  .position {
    @media (max-width: 376px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;