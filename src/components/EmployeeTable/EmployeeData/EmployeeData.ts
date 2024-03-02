import { EmployDataObject } from "../../../utils/protocols";
import EmptyBody from "./EmptyBody/EmptyBody";
import ErrorBody from "./ErrorBody/ErrorBody";
import LoadingBody from "./LoadingBody/LoadingBody";
import SuccessBody from "./SuccessBody/SuccessBody";

export const EmployeeData: EmployDataObject = {
  LOADING: LoadingBody,
  ERROR: ErrorBody,
  EMPTY: EmptyBody,
  SUCCESS: SuccessBody,
};
