import progress from "../../../../assets/progress.svg";
import { LoadingTableContainer, SpinningImage } from "./LoadingBodyStyle";

export default function LoadingBody() {
  return (
    <LoadingTableContainer>
      <tr>
        <td rowSpan={5} colSpan={6}>
          <SpinningImage src={progress} alt="Carregando" />
        </td>
      </tr>
    </LoadingTableContainer>
  );
}
