import { EmployDataObjectProps } from "../../../../utils/protocols";
import EmployeeCard from "../../EmployeeCard/EmployeeCard";

export default function SuccessBody({ employees }: EmployDataObjectProps) {
  return (
    <>
      {employees &&
        employees.map((employee, index) => (
          <EmployeeCard key={index + employee.name} employee={employee} />
        ))}
    </>
  );
}
