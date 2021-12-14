import Validator from "is_js";
import { isEmpty } from "lodash";

export default function validateInput(data) {
  let errors: any = {};

  if (Validator.empty(data.email)) errors.email = "Email is required.";

  if (!Validator.empty(data.email) && !Validator.email(data.email))
    errors.email = "Invalid Email";

  if (Validator.empty(data.password)) errors.password = "Password is required.";

  return {
    errors,
    isValid: isEmpty(errors),
  };
}
