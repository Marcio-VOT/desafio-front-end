import { useEffect, useState } from "react";
import styled from "styled-components";
import EmployeeCard from "./EmployeeCard/EmployeeCard";
import { Employee } from "../../utils/protocols";

export default function EmployeeTable({ search }: { search: string }) {
  const [employees, setEmployees] = useState<Employee[] | undefined>(undefined);
  const [reload, setReload] = useState<boolean>(false);
  console.log(employees, setReload, search);
  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then(response => response.json())
      .then(data => {
        setEmployees(data as Employee[]);
      })
      .catch(() => {
        setEmployees(undefined);
      });
  }, [reload]);

  return (
    <EmployeeTableStyle>
      <EmployeeTableHeader>
        <tr>
          <th className="photo">FOTO</th>
          <th className="name">NOME</th>
          <th className="position">CARGO</th>
          <th className="admission">ADMISSÃO</th>
          <th className="phone">TELEFONE</th>
          <th className="end">
            <svg
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4.5" cy="4.5" r="4" fill="white" />
            </svg>
          </th>
        </tr>
      </EmployeeTableHeader>
      {employees === undefined && <tbody>Carregando...</tbody>}
      {employees !== undefined && employees.length === 0 && (
        <tbody>
          <tr>
            <td colSpan={6}>Nenhum funcionário encontrado</td>
          </tr>
        </tbody>
      )}
      {employees !== undefined &&
        employees.length > 0 &&
        employees.map((employee, index) => {
          return (
            <EmployeeCard key={index + employee.name} employee={employee} />
          );
        })}
    </EmployeeTableStyle>
  );
}

const EmployeeTableHeader = styled.thead`
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

const EmployeeTableStyle = styled.table`
  margin-top: 32px;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  border-collapse: separate;
  border-spacing: 0 1px;
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
