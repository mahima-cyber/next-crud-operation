import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup"
import { useFormik } from 'formik'
import { Button, Card, CardActions, CardContent, TextField } from "@mui/material";
import { authLogin } from "@/redux-toolkit/AuthLogin/AuthSlice";
import { useRouter } from "next/router";
import Image from "next/image";
import { Container, Row, Col } from "reactstrap";


const validationSchema = yup.object({

  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),

  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
})

const styles = () => ({
  actions: {
    float: "right"
  }
});
const Login = () => {
  const dispatch = useDispatch();
  //   const { Toast } = useNotification();
  const router = useRouter()
  const [loading, setLoading] = useState(false);


  // const { allStates } = useSelector((state) => ({
  //   allStates: state,
  // }));


  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(8787, values)
      if (
        values.email === "admin@gmail.com" &&
        values.password === "12345678"
      ) {
        dispatch(authLogin(values));
        router.push('/user')

      } else {
        // Toast.error("Invalid credentials.");
        return null;
      }
    }
  })
  // const onSubmit = (data) => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 200);
  //   if (
  //     data.email === "admin@gmail.com" &&
  //     data.password === "admin" &&
  //     !loading
  //   ) {
  //     dispatch(authLogin(data));
  //   } else {
  //     Toast.error("Invalid credentials.");
  //     return null;
  //   }
  // };

  return (
    <div className="login-container-wrapper" >
      <div className='loginContainer'>
        <form onSubmit={formik.handleSubmit}>
          <Card sx={{ maxWidth: 1 }} >
            <CardContent >
              <Container>

                <img
                  // loader={myLoader}
                  src="https://img.freepik.com/free-photo/blue-user-icon-symbol-website-admin-social-login-element-concept-white-background-3d-rendering_56104-1217.jpg"
                  alt="Picture of the author"
                  width={480}
                  height={200}
                />

                <span> <h2 style={{margin:"0 0 36px",textAlign:"center"}}>Admin Login</h2></span>


              </Container>

              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                sx={{ marginBottom: 1 }}
              />
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                sx={{ marginBottom: 1 }}
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </CardContent>
            <CardActions className={styles.actions}>
              <div className='formbtn'>
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                >submit
                </Button>
              </div>
            </CardActions>
          </Card>
        </form>
      </div>
    </div>
  );
};
export default Login;
