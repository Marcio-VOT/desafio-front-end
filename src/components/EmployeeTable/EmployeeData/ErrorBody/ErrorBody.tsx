import refresh from "../../../../assets/refresh.svg";
import { EmployDataObjectProps } from "../../../../utils/protocols";
import { ErrorBodyTableContainer } from "./ErrorBodyStyle";

export default function ErrorBody({
  reload,
  setReload,
}: EmployDataObjectProps) {
  return (
    <ErrorBodyTableContainer>
      <tr>
        <td rowSpan={5} colSpan={6}>
          <div>
            <h1>Erro ao carregar dados do servidor</h1>
            <img
              src={refresh}
              alt="refresh"
              onClick={() => setReload(!reload)}
            />
          </div>
        </td>
      </tr>
    </ErrorBodyTableContainer>
  );
}
