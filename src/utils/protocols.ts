export type Employee = {
  id: string;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
};

export type EmployeeInfoProps = {
  open?: boolean | undefined;
};

export type EmployeeListState = 'LOADING' | 'ERROR' | 'EMPTY' | 'SUCCESS';

export type EmployeeList = Employee[];

export type EmployDataObjectProps = { employees: Employee[], reload: boolean, setReload: React.Dispatch<React.SetStateAction<boolean>>, search: string }

export type EmployDataObject = {
  [K in EmployeeListState]: ({ employees, reload, setReload }: EmployDataObjectProps) => JSX.Element;
};