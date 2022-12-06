import { useState, useCallback } from 'react';

function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);
  const [errorCheck, setErrorCheck] = useState(false);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);

  const onErrorCheck = useCallback(() => {
    setErrorCheck(true);
  }, []);

  const reset = useCallback(() => {
    setForm(initialForm);
    setErrorCheck(false);
  }, [initialForm]);

  //  setForm 건너뛰고 error 체크 쓰려면 가운데 비워놔야함
  return [form, onChange, reset, setForm, errorCheck, onErrorCheck];
}

export default useInputs;
