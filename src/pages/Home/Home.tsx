import { useState } from "react";
import TitleSearch from "../../components/TitleSearch/TtitleSearch";
import { HomeStyle } from "./HomeStyle";
import EmployeeTable from "../../components/EmployeeTable/EmployeeTable";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  return (
    <HomeStyle>
      <TitleSearch title="Funcionários" search={search} setSearch={setSearch} />
      <EmployeeTable />
    </HomeStyle>
  );
}
