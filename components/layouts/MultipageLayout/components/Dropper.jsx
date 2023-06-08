// MUI Components
import Box from '@mui/material/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
// Next Components
import Link from 'next/link';
// Hooks
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Dropper = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const courses = useSelector((state) => state.constants.value.dropItems);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{display: "flex", cursor: "pointer"}}
      >
        <Typography sx={{ color: router.pathname.includes("course") ? "blue" : "black" }}>
          المسارات
        </Typography>
        <KeyboardArrowDownIcon />
      </Box>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          {
            courses.map((course, index) => (
              <Link key={index} style={{textDecoration: "none", color: "grey"}} href={course.href}>
                <MenuItem onClick={handleClose} dir="rtl" key={index}>
                  {course.title}
                </MenuItem>
              </Link>
            ))
          }
        </Menu>
    </>
  );
}

export default Dropper;