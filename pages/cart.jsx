// MUI Components
import { Box } from '@mui/material';
// Components
import CartComponent from '@/components/cart/Cart';
// CSS Modules
import styles from "@/styles/modules/cart/cart.module.css";

const Cart = () => {
  return (
    <Box className={styles.cart}>
      <CartComponent />
    </Box>
  );
};

export default Cart;
