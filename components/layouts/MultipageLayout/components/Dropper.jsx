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
import { useApi } from '@/lib/hooks';

const Dropper = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const courses = useApi("/courses/category/");

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
              <Link key={index} style={{textDecoration: "none", color: "grey"}} href={`/courses/${course.category_name}`}>
                <MenuItem onClick={handleClose} sx={{width: "full", justifyContent: "flex-end"}} key={index}>
                  {course.category_name}
                </MenuItem>
              </Link>
            ))
          }
        </Menu>
    </>
  );
}

export default Dropper;