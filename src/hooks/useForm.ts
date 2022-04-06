import { useState } from 'react';

function useForm<T>(initialValues: T) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return { values, handleChange };
}

export default useForm;
