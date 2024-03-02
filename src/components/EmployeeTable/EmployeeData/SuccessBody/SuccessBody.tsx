import { EmployDataObjectProps } from "../../../../utils/protocols";
import EmployeeCard from "../../EmployeeCard/EmployeeCard";

export default function SuccessBody({
  employees,
  search,
}: EmployDataObjectProps) {
  return (
    <>
      {employees &&
        employees.map((employee, index) => {
          if (search === "")
            return (
              <EmployeeCard key={index + employee.name} employee={employee} />
            );

          if (
            employee.name.toLowerCase().includes(search.toLowerCase()) ||
            employee.job.toLowerCase().includes(search.toLowerCase()) ||
            employee.phone.includes(search)
          )
            return (
              <EmployeeCard key={index + employee.name} employee={employee} />
            );
        })}
    </>
  );
}
