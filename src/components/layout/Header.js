import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';

// import { Toolbar, AppBar, Typography } from '@material-ui/core';

const Header = ({ }) => {
//   const navigate = useNavigate()
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Logo
        </Typography>
        <div className='headerButton'>
        <Button variant="contained"> <Link href="/role"  >Role List</Link></Button>
       </div>
       <div className='headerButton2'>
       <Button variant="contained"> <Link href="/user"  >User List</Link></Button>
       {/* <Link variant='contained' >User List</Link> */}
       </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;