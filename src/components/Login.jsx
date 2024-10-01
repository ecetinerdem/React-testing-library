import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useForm } from 'react-hook-form';

const initialForm = {
  email: '',
  password: '',
};

const errorMessages = {
  email: 'Geçerli bir email giriniz',
  password: 'Strong bir password giriniz',
};

function Login(props) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm({ defaultValues: initialForm, mode: 'onChange' });

  const { setUser } = props;
  const history = useHistory();

  function handleFormSubmit(formData) {
    axios
      .post('https://reqres.in/api/user', formData)
      .then((response) => {
        setUser(response.data);
        reset();
        history.push('/aboutus');
      })
      .catch((error) => console.log(error.message));
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <h1>Login</h1>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          data-testid="login-form-email"
          {...register('email', {
            maxLength: { value: 10, message: 'çok uzun' },
            validate: (inputValue) => {
              return inputValue.length >= 5 || 'Email yanlış';
            },
          })}
        />
      </div>
      {errors.email && <p>{errors.email.message}</p>}
      <div>
        <label htmlFor="pass">Password:</label>
        <input type="password" id="pass" {...register('password')} />
      </div>
      {errors.password && <p>{errorMessages.password}</p>}
      <div>
        <button
          type="submit"
          disabled={!isValid}
          data-testid="login-form-submit-button"
        >
          Giriş
        </button>
      </div>
    </form>
  );
}

export default Login;
