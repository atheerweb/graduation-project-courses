// MUI Components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// Next Components
import Link from 'next/link';
import Image from 'next/image';
// CSS Modules
import styles from '@/styles/modules/cart/cart.module.css';

const Cart = () => {
  return (
    <Box className={styles.cartBox}>
      <Image height={164} width={307} src="/images/cart-empty.png" alt="empty Cart" />
      <Typography className={styles.cartTypography} color="text.secondary" variant="body2">
        عربة التسوق فارغة <br /> 
        لمزيد من الدورات استمر في التسوق
      </Typography>
      <Link href="/">
        <Button sx={{ color: '#fff' }} color="primary" variant="contained">
          تصفح المسارات
        </Button>
      </Link>
    </Box>
  );
};

export default Cart;
