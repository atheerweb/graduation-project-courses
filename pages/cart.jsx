import CartComponent from '@/components/cart/Cart';
import { Box } from '@mui/material';

const Cart = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: '132px',
      }}
    >
      <CartComponent />
    </Box>
  );
};

export default Cart;
