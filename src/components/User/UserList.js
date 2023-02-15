import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DeleteUser, EditUser } from '../../redux-toolkit/Slice/UserSlice';
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useRouter } from 'next/router';
import Link from 'next/link';
// import Toast from '../../Component/CommonToast';


const UserList = () => {
    const router = useRouter()
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const userData = useSelector(state => state?.users?.data)

  const handleDelete = (index) => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            dispatch(DeleteUser(index))
            Toast('User Deleted Successfully!', 'error');
          }
        },
        {
          label: "No"
        }
      ]
    });
    setOpen(false)
  }

  const handleEdit = (index) => {
    console.log(22, index)
    dispatch(EditUser(index))
    router.push(`/user/${index}`)
  }

  return (
    <div>
      <div className='div'>
        <Typography className='heading'>User List</Typography>
        <div className='btn'>
          <Button variant="contained"><Link href={'/user/createuser'}>Add User</Link></Button>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="right">User Name</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Mobile</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Role</TableCell>
              <TableCell align="center" colSpan={2}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.length > 0 ? userData.map((item, index) => (
              <TableRow>
                <TableCell component="th" scope="row">
                  {index}
                </TableCell>
                <TableCell align="right">{item?.username}</TableCell>
                <TableCell align="right">{item?.name}</TableCell>
                <TableCell align="right">{item?.mobile}</TableCell>
                <TableCell align="right">{item?.email}</TableCell>
                <TableCell align="right">{item?.roleKey}</TableCell>
                <TableCell align="right"><Button variant="contained" onClick={() => handleEdit(index)}  >Edit</Button></TableCell>
                <TableCell align="left"><Button variant="contained" onClick={() => handleDelete(index)}  >Delete</Button></TableCell>
              </TableRow>
            ))
              :
              <TableRow>
                <TableCell colSpan={7} style={{ textAlign: "center" }}>Data not Found</TableCell>
              </TableRow>
            }
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  )
}

export default UserList

