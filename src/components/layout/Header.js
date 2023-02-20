import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

// import { Toolbar, AppBar, Typography } from '@material-ui/core';

const Header = ({ }) => {
//   const navigate = useNavigate()
const router = useRouter()

const handleClick = ()=>{
  localStorage.removeItem("authToken");
  router.push('/')
}
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          <Button variant="contained" onClick={()=>handleClick()}>Logout</Button>
        </Typography>
        <div className='headerButton'>
        <Button variant="contained"> <Link href="/role"  >Role List</Link></Button>
       </div>
       <div className='headerButton2'>
       <Button variant="contained"> <Link href="/user"  >User List</Link></Button>
       </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;