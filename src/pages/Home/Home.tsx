import TitleSearch from "../../components/TitleSearch/TtitleSearch";
import { HomeStyle } from "./HomeStyle";
import EmployeeTable from "../../components/EmployeeTable/EmployeeTable";

export default function Home() {
  return (
    <HomeStyle>
      <TitleSearch title="Funcionários" />
      <EmployeeTable />
    </HomeStyle>
  );
}
