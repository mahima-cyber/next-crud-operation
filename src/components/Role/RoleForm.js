import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux"
import {
  Card,
  CardActions,
  CardContent,
  TextField,
} from '@mui/material'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddRole, UpdateRole } from '../../redux-toolkit/Slice/RoleSlice';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import { Toast } from 'react-toastify/dist/components';
// import Toast from '../../Component/CommonToast';

const styles = () => ({
  card: {
    maxWidth: 420,
    marginTop: 50
  },
  container: {
    width: "400px",
    margin: "0 auto"
  },
  actions: {
    float: "center"
  }
});

const validationSchema = yup.object({
  roleLable: yup
    .string('Enter your Role')
    .required('Role is required'),
  roleKey: yup
    .string('Enter your key')
    
    .required('Key is required'),
})

const RoleForm = () => {
  const params = useRouter();
  const id = params.query.id
  console.log(11212,id)
  const roleItems = useSelector(state => state.roles.roleEdit)
  const dispatch = useDispatch()


  const formik = useFormik({
    initialValues: {
      roleLable: '',
      roleKey: '',
      id: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(4546, values)
      if (id) {
       
        // Toast('User updated Successfully!', 'success');
        setTimeout(() => {
          // navigate('/role-list')
          // const payload = [id,values]
          dispatch(UpdateRole(values))
          params.push('/role')
        }, 1000)
      } else {
        // Toast('User Added Successfully!', 'success');
        setTimeout(() => {
          // navigate('/role-list')
          dispatch(AddRole(values))
          params.push(`/role`)
        }, 1000)
      }
      resetForm({ values: "" })
    },
  })


  //   const handleClick = () => {
  //     navigate("/role-list")
  //   }

  useEffect(() => {
    if (roleItems && id ) {
      formik.setFieldValue('roleLable', roleItems.roleLable)
      formik.setFieldValue("roleKey", roleItems.roleKey)
      formik.setFieldValue('id', id)
    }
  }, [roleItems,id])

  return (
    <div>

      <h3 className='heading'>
        {id ? "Update Role" : "Create Role"}
      </h3>

      {/* <ToastContainer /> */}
      <div className='containar'>
        <form onSubmit={formik.handleSubmit}>
          <Card sx={{ maxWidth: 1 }} className={styles.card}>
            <CardContent >
              <TextField
                fullWidth
                id="roleLable"
                name="roleLable"
                label="Role Lable"
                sx={{ marginBottom: 2 }}
                value={formik.values.roleLable}
                onChange={formik.handleChange}
                error={formik.touched.roleLable && Boolean(formik.errors.roleLable)}
                helperText={formik.touched.roleLable && formik.errors.roleLable}
              />
              <TextField
                fullWidth
                id="roleKey"
                name="roleKey"
                label="Role Key"
                sx={{ marginBottom: 2 }}
                value={formik.values.roleKey}
                onChange={formik.handleChange}
                error={formik.touched.roleKey && Boolean(formik.errors.roleKey)}
                helperText={formik.touched.roleKey && formik.errors.roleKey}
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
              <div>
                {/* <Button
                      color="primary"
                      variant="contained"
                      type="submit"
                      onClick={handleClick}>
                      Role List
                    </Button> */}
              </div>
            </CardActions>
          </Card>
        </form>
      </div>
    </div>
  )
}

export default RoleForm