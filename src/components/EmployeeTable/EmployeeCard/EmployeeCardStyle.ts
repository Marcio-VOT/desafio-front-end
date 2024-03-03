import styled from "styled-components";
import { EmployeeInfoProps } from "../../../utils/protocols";

export const EmployeeCardContainer = styled.tbody`
  text-align: center;
  box-shadow: 0px 1px 2px 0px #00000033;
  tr {
    td {
      vertical-align: middle;
      font-family: Roboto;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0em;
    }
    td:last-child {
    }
  }
`;

export const EmployeeInfo = styled.tr<EmployeeInfoProps>`
  height: 49px;
  .photo {
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  .end {
    img {
      width: 17px;
      height: auto;
      transition: 0.2s;
      transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0deg)")};
    }
  }
`;

export const EmployeeDropdownInfo = styled.tr<EmployeeInfoProps>`
  height: ${({ open }) => (open ? "100%" : "0px")};
  @media (min-width: 768px) {
    display: none;
  }
  .dropdownjob {
    @media (min-width: 376px) {
      display: none;
    }
  }
  .dropdownadmission {
    @media (min-width: 600px) {
      display: none;
    }
  }
  .dropdownphone {
    @media (min-width: 768px) {
      display: none;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    transition: 0s;
    height: ${({ open }) => (open ? "100%" : "0px")};
    overflow: auto;
    margin: ${({ open }) => (open ? "10px 12px 32px 12px" : "0")};
    row-gap: 10px;
    div {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      border-bottom: 1px dashed #dfdfdf;
      margin: 0;
      h1 {
        font-family: Roboto;
        font-size: 16px;
        font-weight: 500;
        line-height: 19px;
        letter-spacing: 0em;
      }
      h2 {
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
      }
    }
  }
`;