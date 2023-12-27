import { useState } from "react";
import { forgotPasswordFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";

const fields = forgotPasswordFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function ForgotPassword() {
  const [forgotPasswordState, setForgotPasswordState] = useState(fieldsState);

  const handleChange = (e) =>
    setForgotPasswordState({
      ...forgotPasswordState,
      [e.target.id]: e.target.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(forgotPasswordState);
    forgotPassword();
  };

  //handle Forgot password API Integration here
  const forgotPassword = () => {};

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={forgotPasswordState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <FormAction handleSubmit={handleSubmit} text="send otp" />
      </div>
    </form>
  );
}
