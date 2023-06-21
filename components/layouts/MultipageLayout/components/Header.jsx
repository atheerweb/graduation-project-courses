// Components
import Dropper from './Dropper';
import Menu from './Menu';
// MUI Components
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import MenuIcon from '@mui/icons-material/Menu';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Stack from '@mui/material/Stack';
// Next Components
import Image from 'next/image';
import Link from 'next/link';
// Hooks
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import useMediaQuery from '@mui/material/useMediaQuery';
// CSS Modules
import styles from '@/styles/modules/layouts/MultipageLayout/layout.module.css';

const Header = () => {
  const theme = useTheme();
  const router = useRouter();
  const media = useMediaQuery('(max-width: 1100px)');
  const [display, setDisplay] = useState('none');

  const handleMenuClick = () => {
    setDisplay((previous) => (previous === 'none' ? 'flex' : 'none'));
  };

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
          href="/comingsoon"
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
            sx={{ color: theme.palette.accent.light }}
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
