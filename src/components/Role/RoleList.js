import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DeleteRole, EditRole } from '../../redux-toolkit/Slice/RoleSlice';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import Toast from '../../Component/CommonToast';


const RoleList = () => {
    const router = useRouter()
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
//   const navigate = useNavigate()
  const roleData = useSelector(state => state?.roles?.roleData)

  const handleDelete = (index) => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            dispatch(DeleteRole(index))
            // Toast('User Deleted Successfully!', 'error');
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
    dispatch(EditRole(index))
    router.push(`/role/${index}`)
  }

  return (
    <div>
      <div className='div'>
        <Typography className='heading'>Role List</Typography>
        <div className='btn'>
          <Button variant="contained"><Link href={'/role/createRole'}>Add Role</Link></Button>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="right">Role Key</TableCell>
              <TableCell align="right">Role Lable</TableCell>
              <TableCell align="center" colSpan={2}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {roleData.length > 0 ? roleData.map((item, index) => (
              <TableRow>
                <TableCell component="th" scope="row">
                  {index}
                </TableCell>
                <TableCell align="right">{item.roleKey}</TableCell>
                <TableCell align="right">{item.roleLable}</TableCell>
                <TableCell align="right">
                  <Button variant="contained" onClick={() => handleEdit(index)}>Edit</Button>
                </TableCell>
                <TableCell align="left">
                  <Button variant="contained" onClick={() => handleDelete(index)} >Delete</Button>
                </TableCell>
              </TableRow>
            ))
              :
              <TableRow>
                <TableCell colSpan={4} style={{ textAlign: "center" }}>Data not Found</TableCell>
              </TableRow>
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default RoleList