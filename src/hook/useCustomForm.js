import { useState } from "react";

const useCustomForm = ({ initialValues }) => {
  const [values, setValues] = useState(initialValues || {});
  const [disabled, setDisabled] = useState(true);
  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    if (!value || !values.firstName || !values.lastName) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    setValues({ ...values, [name]: value });
  };
  return {
    values,
    handleChange,
    disabled,
  };
};

export default useCustomForm;
