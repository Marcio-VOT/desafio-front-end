import refresh from "../../../../assets/refresh.svg";
import { EmployDataObjectProps } from "../../../../utils/protocols";
import { EmptyBodyBodyTableContainer } from "./EmptyBodyStyle";

export default function EmptyBody({
  reload,
  setReload,
}: EmployDataObjectProps) {
  return (
    <EmptyBodyBodyTableContainer>
      <tr>
        <td rowSpan={5} colSpan={6}>
          <div>
            <h1>Nenhum funcionário encontrado</h1>
            <img
              src={refresh}
              alt="refresh"
              onClick={() => setReload(!reload)}
            />
          </div>
        </td>
      </tr>
    </EmptyBodyBodyTableContainer>
  );
}
