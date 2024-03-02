import { Employee } from "../../../../utils/protocols";
import EmployeeCard from "../EmployeeCard/EmployeeCard";

export default function SuccessBody({ employees }: { employees?: Employee[] }) {
  return (
    <>
      {employees &&
        employees.map((employee, index) => (
          <EmployeeCard key={index + employee.name} employee={employee} />
        ))}
    </>
  );
}
