import Validator from "is_js";
import { isEmpty } from "lodash";

export default function validateInput(data) {
  let errors: any = {};

  if (Validator.empty(data.username)) errors.username = "Username is required.";

  if (Validator.empty(data.name)) errors.name = "Name is required.";

  if (Validator.empty(data.last_name))
    errors.last_name = "Last Name is required.";

  if (Validator.empty(data.email)) errors.email = "Email is required.";

  if (!Validator.empty(data.email) && !Validator.email(data.email))
    errors.email = "Invalid Email";

  if (Validator.empty(data.country)) errors.country = "Country is required.";

  if (Validator.empty(data.tz)) errors.tz = "Timezone is required.";

  return {
    errors,
    isValid: isEmpty(errors),
  };
}
