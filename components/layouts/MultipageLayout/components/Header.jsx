// Components
import AvatarDropper from './AvatarDropper';
import Dropper from './Dropper';
import Menu from './Menu';
// MUI Components
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/Menu';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Stack from '@mui/material/Stack';
// Next Components
import Image from 'next/image';
import Link from 'next/link';
// Hooks
import { useState, useEffect } from 'react';
import { useApi } from '@/lib/hooks';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import useMediaQuery from '@mui/material/useMediaQuery';
// CSS Modules
import styles from '@/styles/modules/layouts/MultipageLayout/layout.module.css';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const router = useRouter();
  const courses = useApi("/courses/category_fliter/?cat_has_courses__category_name=");
  const media = useMediaQuery('(max-width: 1250px)');

  useEffect(() => {
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem('coursesUser'))
      ? setIsLoggedIn(true)
      : setIsLoggedIn(false);
  }, [ typeof window ]);

  const [display, setDisplay] = useState('none');

  const handleMenuClick = () => {
    setDisplay((previous) => (previous === 'none' ? 'flex' : 'none'));
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const closingHandle = () => {
    setAnchorEl(null);
  };

  const handleSearchClick = () => {
    courses.forEach(course => {
      if (course.course_name === searchValue) {
        courses && router.push(`/course/${course.course_id}`)
      }
    })
  }

  return (
    <Box
      className={styles.mainNav}
      sx={{
        backgroundColor: theme.palette.accent.light,
        boxShadow: `0 0 5px ${theme.palette.accent.primary}`,
      }}
    >
      <Menu display={display} />
      <Image
        width={62}
        height={41}
        src="/images/header_logo.png"
        alt="علمنى"
        priority
      />
      <Stack
        direction="row"
        sx={{ display: media && 'none', alignItems: 'center', gap: '65px' }}
      >
        <Link
          href="/"
          className={styles.navLinks}
          sx={{
            color:
              '/' === router.pathname
                ? theme.palette.secondary.main
                : theme.palette.accent.dark,
            textDecoration: 'none',
          }}
        >
          الرئيسية
        </Link>

        <Dropper />
        <Link
          href={ isLoggedIn ? "/comingsoon" : '/signin'}
          className={styles.navLinks}
          sx={{
            color:
              '/' === router.pathname
                ? theme.palette.secondary.main
                : theme.palette.accent.dark,
            textDecoration: 'none',
          }}
        >
          مقدم دورة
        </Link>
      </Stack>
      <>
      <Box
        
        sx={{ display: 'flex', cursor: 'pointer' }}
      >
        <OutlinedInput
          className={styles.mainNavSearch}
          variant="outlined"
          placeholder="ابحث عن المسارات"
          id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onFocus={handleClick}
          dir="ltr"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          inputProps={{ style: { textAlign: 'end', borderRadius: '25px' } }}
          sx={{ display: media && 'none', borderRadius: '25px' }}
          startAdornment={
            <InputAdornment position="start">
              <IconButton onClick={handleSearchClick} aria-label="toggle password visibility" edge="start">
                <SearchIcon color="secondary" />
              </IconButton>
            </InputAdornment>
          }
        />
      </Box>
      <MenuList disableEnforceFocus disableAutoFocus disableAutoFocusItem sx={{borderRadius: "25px"}} autoFocus={false} anchorEl={anchorEl} open={open} onClose={closingHandle}>
        {
          courses.map(course => {
            if (course.course_name.includes(searchValue)) {

              return <MenuItem key={course.course_id} onClick={() => {setAnchorEl(null); setSearchValue(course.course_name)}} sx={{ width: '409px', justifyContent: 'flex-end' }}>
                {course.course_name}
              </MenuItem>
            }
          })
        }
      </MenuList>
      </>
      <Stack direction="row" gap="20px" display={media && 'none'}>
        <Link href="/cart">
          <IconButton color="secondary" aria-label="add to shopping cart">
            <Badge badgeContent={"0"} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Link>
      </Stack>
      {!isLoggedIn ? (
        <Stack direction="row" gap="20px" display={media && 'none'}>
          <Link href="/signup">
            <Button variant="outlined" color="primary">
              إنشاء حساب
            </Button>
          </Link>
          <Link href="/signin">
            <Button variant="contained" color="primary" sx={{ color: theme.palette.accent.light }}>
              تسجيل دخول
            </Button>
          </Link>
        </Stack>
      ) : (
        <AvatarDropper />
      )}
      <MenuIcon
        sx={{
          color: theme.palette.primary.main,
          cursor: 'pointer',
          display: !media && 'none',
        }}
        onClick={handleMenuClick}
      />
    </Box>
  );
};

export default Header;
