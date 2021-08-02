import { useState } from "react";
import useCustomForm from "../hook/useCustomForm";

const initialValues = {
  firstName: "",
  lastName: "",
  phone: "",
};
const Form = () => {
  const { values, handleChange, disabled } = useCustomForm({ initialValues });
  return (
    <form>
      <label>First Name</label>
      <input
        value={values.firstName}
        name="firstName"
        onChange={handleChange}
      />
      <label>Last Name</label>
      <input value={values.lastName} name="lastName" onChange={handleChange} />
      <label>Phone</label>
      <input value={values.phone} name="phone" onChange={handleChange} />
      <button disabled={disabled}>Submit</button>
    </form>
  );
};
export default Form;
