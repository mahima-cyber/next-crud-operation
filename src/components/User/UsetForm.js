import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux"
import {
  Card,
  CardActions,
  CardContent,
  MenuItem,
  TextField,
} from '@mui/material'
import { AddUser, UpdateUser } from '../../redux-toolkit/Slice/UserSlice';
import { useRouter } from 'next/router';
import Link from 'next/link';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Toast from '../../Component/CommonToast';

const styles = () => ({
  actions: {
    float: "right"
  }
});


const validationSchema = yup.object({
  name: yup
    .string('Enter your Name')
    .required('Name is required'),
  mobile: yup
    .number('Enter your Number')
    .required('Number is required'),
  username: yup
    .string('Enter your Username')
    .required('Username is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  roleKey: yup
    .string('Select Role')
    .required('Select Role'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
})

const UserForm = () => {
  const role = useSelector(state => state?.roles?.roleData)
  console.log(8778,role)
  const UserList = useSelector(state => state.users.userEdit)
  const params = useRouter();
  const id = params.query.id
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      username: '',
      mobile: '',
      roleKey: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (id) {
        // Toast('User updated Successfully!', 'success');
        setTimeout(() => {
          // const payload = [id,values]
          dispatch(UpdateUser(values))
          params.push('/user')

        }, 1000)
      } else {
        // Toast('User Added Successfully!', 'success');
        setTimeout(() => {
          dispatch(AddUser(values))
          params.push('/user')

        }, 1000)
      }
      resetForm({ value: "" })
    },
  })

  useEffect(() => {
    if (UserList && id) {
      formik.setFieldValue("name", UserList.name)
      formik.setFieldValue("email", UserList.email)
      formik.setFieldValue("mobile", UserList.mobile)
      formik.setFieldValue("roleKey", UserList.roleKey)
      formik.setFieldValue("username", UserList.username)
      formik.setFieldValue('id', id)
    }
  }, [UserList , id])


  return (
    <div>
      <h3 className='heading'>
        {id ? "Update User" : "Create User"}
      </h3>
      {/* <ToastContainer /> */}
      <div className='containar'>
        <form onSubmit={formik.handleSubmit}>
            <CardContent>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                // className='input'
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                sx={{ marginBottom: 1 }}
              />
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
                id="username"
                name="username"
                label="Username"
                value={formik.values.username}
                sx={{ marginBottom: 1 }}
                onChange={formik.handleChange}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
              />

              <TextField
                fullWidth
                type="number"
                id="mobile"
                name="mobile"
                label="Mobile"
                sx={{ marginBottom: 1 }}
                value={formik.values.mobile}
                onChange={formik.handleChange}
                error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                helperText={formik.touched.mobile && formik.errors.mobile}
              />

              <TextField
                select
                fullWidth
                id="roleKey"
                name="roleKey"
                label="Role Key"
                sx={{ marginBottom: 1 }}
                value={formik.values.roleKey}
                onChange={formik.handleChange}
                error={
                  formik.touched.roleKey && Boolean(formik.errors.roleKey)
                }
                helperText={formik.touched.roleKey && formik.errors.roleKey}
                SelectProps={{
                  renderValue: (value) => value,
                }}
              >
                {role && role?.map((option) => (
                  <MenuItem key={option.roleKey} value={option.roleKey}>
                    {option.roleLable}
                  </MenuItem>
                ))}
              </TextField>
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
                >Submit
                </Button>
              </div>
              <div>
                {/* <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  onClick={handleNavigate}>
                  User List
                </Button> */}
              </div>
            </CardActions>
        </form>
      </div>
    </div>
  )
}

export default UserForm