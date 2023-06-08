// Components
import Menu from './Menu';
// MUI Components
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// Next Components
import Image from 'next/image';
// Hooks
import { Fragment, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import useMediaQuery from '@mui/material/useMediaQuery';
// CSS Modules
import styles from '@/styles/modules/layouts/MultipageLayout/layout.module.css';
import Dropper from './Dropper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Header = () => {
  const navLinks = useSelector((state) => state.constants.value.navLinks);
  const theme = useTheme();
  const router = useRouter();
  const media = useMediaQuery('(max-width: 1100px)');

  const [display, setDisplay] = useState('none');

  const handleMenuClick = () => {
    setDisplay((previous) => (previous === 'none' ? 'flex' : 'none'));
  };

  const coursesPages = useSelector((state) => state.constants.value.dropItems);

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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 65,
        }}
      >
        <Link
          className={styles.navLinks}
          sx={{
            color:
              '/' === router.pathname
                ? theme.palette.secondary.main
                : theme.palette.accent.dark,
            fontWeight: '/' === router.pathname && 'bold',
            textDecoration: 'none',
            p: 0,
            m: 0,
          }}
          href="/"
        >
          الرئيسية
        </Link>
        <Dropper data={coursesPages} name={'مسارات'} />
      </div>
      <OutlinedInput
        className={styles.mainNavSearch}
        variant="outlined"
        placeholder="ابحث عن المسارات"
        dir="ltr"
        inputProps={{ style: { textAlign: 'end', borderRadius: '25px' } }}
        sx={{ display: media && 'none', borderRadius: '25px' }}
        startAdornment={
          <InputAdornment position="start">
            <IconButton aria-label="toggle password visibility" edge="start">
              <SearchIcon color="secondary" />
            </IconButton>
          </InputAdornment>
        }
      />
      <Stack direction="row" gap="20px" display={media && 'none'}>
        <Link href="/cart">
          <IconButton color="secondary" aria-label="add to shopping cart">
            <Badge badgeContent={1} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Link>
        <Link href="/signup">
          <Button variant="text" color="primary">
            إنشاء حساب
          </Button>
        </Link>
        <Link href="/signin">
          <Button
            variant="contained"
            color="primary"
            sx={{
              color: theme.palette.accent.light,
            }}
          >
            تسجيل دخول
          </Button>
        </Link>
      </Stack>
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
