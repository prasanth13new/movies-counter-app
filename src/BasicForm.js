import { useFormik } from "formik";
import * as yup from 'yup';

// export function BasicForm() {
//   const formik = useFormik({
//     initialValues: { email: "abc@123.com", password: "123" },
//     onSubmit: (values) => {
//       console.log("Form Values", values);
//     }
//   });
//   return (
//     <form onSubmit={formik.handleSubmit} className='user-form'>
//       <input 
//       name="email"
//       type="email" 
//       placeholder='Email' 
//       value={formik.values.email}
//       onChange={formik.handleChange}
//       />

//       <input 
//       name="password"
//       type="password" 
//       placeholder='Password' 
//       value={formik.values.password}
//       onChange={formik.handleChange}
//       />

//       <button type="submit">Login</button>
//       <pre>{JSON.stringify(formik.values,null,2)}</pre>
//     </form>
//   );
// }


const formvalidationSchema = yup.object({
  email: yup
    .string()
    .required('Why not fill this mail🤔').min(5, 'Too short')
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    ),
  password: yup
    .string()
    .required('You must provide a password')
    .min(8)
    .max(12, "Too long"),
});

export function BasicForm() {
  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: formvalidationSchema,
    onSubmit: (values) => {
      console.log("Form Values", values);
    }
  });
  return (
    <form onSubmit={handleSubmit} className='user-form'>
      <input
        name="email"
        type="email"
        placeholder='Email'
        value={values.email}
        onChange={handleChange}
      />
      {errors.email}

      <input
        name="password"
        type="password"
        placeholder='Password'
        value={values.password}
        onChange={handleChange}
      />
      {errors.password}

      <button type="submit">Login</button>
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </form>
  );
}