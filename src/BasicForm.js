import { useFormik } from "formik";

export function BasicForm() {
  const formik = useFormik({});
  return (
    <form className='user-form'>
      <input type="email" placeholder='Email'></input>
      <input type="password" placeholder='Password'></input>
      <button>Login</button>
    </form>
  );
}
