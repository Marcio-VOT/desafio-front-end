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

export type EmployDataObject = {
  [K in EmployeeListState]: ({ employees }: { employees?: Employee[] }) => JSX.Element;
};