import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import styles from '@/styles/modules/cart/cart.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
const Cart = () => {
  return (
    <Box className={styles.cartBox}>
      <Image
        height={164}
        width={307}
        src="/images/cart-empty.png"
        alt="empty Cart"
      />

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ textAlign: 'center', fontSize: '20px' }}
      >
        عربة التسوق فارغة<br></br> لمزيد من الدورات استمر في التسوق
      </Typography>

      <Link href="/">
        <Button
          sx={{ color: '#fff' }}
          size="16px"
          color="primary"
          variant="contained"
        >
          تصفح المسارات
        </Button>
      </Link>
    </Box>
  );
};

export default Cart;
