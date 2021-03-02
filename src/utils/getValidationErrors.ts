import { ValidationError } from "yup";
interface Errors {
  [key: string]: string;
}
export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};
  console.log(err.inner[0].path);
  console.log(err);
  err.inner.forEach(({ message, path }) => {
    validationErrors[path!] = message;
  });

  return validationErrors;
}
