import { useEffect, useState } from "react"
import styled from "styled-components";
type Employee = {
  id: string;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
};
export default function EmployeeTable({search}: {search: string}){
  const [employees, setEmployees] = useState<Employee[] | undefined>(undefined)
  const [reload, setReload] = useState<boolean>(false)
  console.log(employees, setReload, search)
  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then(response => response.json())
      .then(data => {
        setEmployees(data as Employee[])
      })
      .catch(() => {
        setEmployees(undefined)
      });
  }
  , [reload])

  return (
    <EmployeeTableStyle>
      <thead>
        <tr>
            <th className="photo">FOTO</th>
            <th className="name">NOME</th>
            <th className="position">CARGO</th>
            <th className="admission">ADMISSÃO</th>
            <th className="phone">TELEFONE</th>
          <th className="end">
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4.5" cy="4.5" r="4" fill="white"/>
            </svg>
          </th>
        </tr>
      </thead>
      <thead>
        <tr>
            <th className="photo">Foto</th>
            <th className="name">{employees && employees[1].name}</th>
            <th className="position">{employees && employees[1].job}</th>
            <th className="admission">{employees && employees[1].admission_date}</th>
            <th className="phone">{employees && employees[1].phone}</th>
          <th className="end">
          <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 12L16 21L24.5 12" stroke="url(#paint0_linear_1777_54)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <defs>
          <linearGradient id="paint0_linear_1777_54" x1="16" y1="12" x2="16" y2="21" gradientUnits="userSpaceOnUse">
          <stop stop-color="#5A84C0"/>
          <stop offset="1" stop-color="#594ED2"/>
          </linearGradient>
          </defs>
          </svg>
          </th>
        </tr>
      </thead>
      <thead>
        <tr>
            <th className="photo">Foto</th>
            <th className="name">Nome</th>
            <th className="position">Cargo</th>
            <th className="admission">Admissão</th>
            <th className="phone">Telefone</th>
          <th className="end">
          <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 12L16 21L24.5 12" stroke="url(#paint0_linear_1777_54)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <defs>
          <linearGradient id="paint0_linear_1777_54" x1="16" y1="12" x2="16" y2="21" gradientUnits="userSpaceOnUse">
          <stop stop-color="#5A84C0"/>
          <stop offset="1" stop-color="#594ED2"/>
          </linearGradient>
          </defs>
          </svg>

          </th>
        </tr>
      </thead>
    </EmployeeTableStyle>
  )
}

const EmployeeTableStyle = styled.table`
  margin-top: 32px;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  border-collapse: separate; 
  background-color: transparent;
  border-color : transparent;
  border-spacing: 0 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;


  thead{
    height: 50px;
    background-color: #fff;
    box-shadow: 0px 1px 2px 0px #00000033;
    .end{
      display: none;
      @media (max-width: 768px){
        display: table-cell;
      }
    }
    .phone{
      @media (max-width: 768px){
        display: table-column;
      }
    }
    .admission{
      @media (max-width: 600px){
        display: none;
      }
    }
    .position{
      @media (max-width: 376px){
        display: none;
      }
    
    }
  }

  thead:first-child {
    box-shadow: 0px 1px 2px 0px #00000033;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    background: linear-gradient(180deg, #5A84C0 0%, #594ED2 100%);
    th{
      font-family: Roboto, sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0em;
      color: #fff;
    }
    th:first-child{
      border-top-left-radius: 8px;
    }
    th:last-child{
      border-top-right-radius: 8px;
    }
    .phone{
      border-top-right-radius: 8px;
    }
  }

  th{
    vertical-align: middle;
    //styleName: H3;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
  }
  @media (max-width: 768px){
    margin-top: 20px;
  }
`;
