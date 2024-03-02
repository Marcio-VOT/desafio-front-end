import { formatPhoneNumber } from "../../../utils/formatPhoneNumber";
import vector from "../../../assets/vector.png";
import { Employee } from "../../../utils/protocols";
import { useState } from "react";
import {
  EmployeeCardContainer,
  EmployeeInfo,
  EmployeeDropdownInfo,
} from "./EmployeeCardStyle";

export default function EmployeeCard({ employee }: { employee: Employee }) {
  const [open, setOpen] = useState<boolean>(false);
  const formattedPhone = formatPhoneNumber(employee.phone);

  return (
    <EmployeeCardContainer>
      <EmployeeInfo open={open}>
        <td className="photo">
          <img src={employee.image} alt={employee.name} />
        </td>
        <td className="name">{employee.name}</td>
        <td className="position">{employee.job}</td>
        <td className="admission">
          {new Date(employee.admission_date).toLocaleDateString()}
        </td>
        <td className="phone">{formattedPhone}</td>
        <td className="end" onClick={() => setOpen(!open)}>
          <img src={vector} alt="vector" />
        </td>
      </EmployeeInfo>
      <EmployeeDropdownInfo open={open}>
        <td colSpan={6}>
          <div>
            <div className="dropdownjob">
              <h1>Cargo</h1>
              <h2>{employee.job}</h2>
            </div>
            <div className="dropdownadmission">
              <h1>Data de admissão</h1>
              <h2>{new Date(employee.admission_date).toLocaleDateString()}</h2>
            </div>
            <div className="dropdownphone">
              <h1>Telefone</h1>
              <h2>{formattedPhone}</h2>
            </div>
          </div>
        </td>
      </EmployeeDropdownInfo>
    </EmployeeCardContainer>
  );
}
