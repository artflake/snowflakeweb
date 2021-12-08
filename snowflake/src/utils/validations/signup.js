import Validator from "is_js";
import { isEmpty } from "lodash";

export default function validateInput(data) {
  let errors = {};

  if (Validator.empty(data.email)) errors.email = "Email is required.";

  if (!Validator.empty(data.email) && !Validator.email(data.email))
    errors.email = "Invalid Email";

  if (Validator.empty(data.password)) errors.password = "Password is required.";

  if (Validator.empty(data.confirmationPassword))
    errors.confirmationPassword = "Confirmation Password is required.";

  if (
    !Validator.empty(data.password) &&
    !Validator.empty(data.confirmationPassword) &&
    !Validator.equal(data.password, data.confirmationPassword)
  )
    errors.confirmationPassword = "Password & Confirmation Password doesn't match.";

  return {
    errors,
    isValid: isEmpty(errors),
  };
}
