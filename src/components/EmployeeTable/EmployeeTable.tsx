import { useEffect, useState } from "react";
import { EmployeeTableStyle, EmployeeTableHeader } from "./EmployeeTableStyle";
import {
  Employee,
  EmployeeList,
  EmployeeListState,
} from "../../utils/protocols";
import { EmployeeData } from "./EmployeeData/EmployeeData";

export default function EmployeeTable() {
  const [employees, setEmployees] = useState<EmployeeList>([]);
  const [employeeListState, setEmployeeListState] = useState<EmployeeListState>(
    `LOADING`
  );
  const [reload, setReload] = useState<boolean>(false);
  useEffect(() => {
    setEmployeeListState(`LOADING`);
    fetch("http://localhost:3000/employees")
      .then(response => response.json())
      .then(data => {
        setTimeout(() => {
          setEmployees(data as Employee[]);

          if (data.length > 0) setEmployeeListState(`SUCCESS`);
          else setEmployeeListState(`EMPTY`);
        }, 1500);
      })
      .catch(() => {
        setEmployeeListState(`ERROR`);
        setEmployees([]);
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
      {EmployeeData[employeeListState]({ employees, reload, setReload })}
    </EmployeeTableStyle>
  );
}
