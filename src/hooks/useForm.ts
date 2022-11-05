import { ChangeEvent, FormEvent, useState } from 'react';
import {useNavigate} from 'react-router-dom';

type types = 'number' | 'text' | 'email' | 'password';

export const useForm = <T>( initialState:T ) => {
  const [formData, setFormData] = useState<T>(initialState);
  const navigate = useNavigate();

  const getValueOfNumber = (value: string ): number | string  => {
    if (value) return parseInt(value);
    return value;
  };

  const handleInputChange = ({target}: ChangeEvent<HTMLInputElement>, type?: types) => {
    const { name, value } = target;
    const newValue = type === 'number' ? getValueOfNumber(value) : value;
    setFormData((prevState: T) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleRatingChange = (event: React.SyntheticEvent<Element, Event>, newValue: number | null) => {
    if (newValue) {
    setFormData((prevState: T) => ({
      ...prevState,
      rating: newValue
    }));
  }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>, route?: string) => {
    event.preventDefault();
    route && navigate(route);
    // const data = new FormData(event.currentTarget);
  };

  const resetState = (initialState: T) => setFormData(initialState);

  return {
    formData,
    handleInputChange,
    handleRatingChange,
    handleSubmit,
    resetState
  }
}