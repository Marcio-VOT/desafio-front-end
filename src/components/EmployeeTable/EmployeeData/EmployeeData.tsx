import { EmployDataObject } from "../../../utils/protocols";
import LoadingBody from "./LoadingBody/LoadingBody";
import SuccessBody from "./SuccessBody/SuccessBody";

export const EmployeeData: EmployDataObject = {
  LOADING: LoadingBody,
  ERROR: LoadingBody,
  EMPTY: LoadingBody,
  SUCCESS: SuccessBody,
};
