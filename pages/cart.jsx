import EmptyCart from '@/components/cart/EmptyCart';
import { Box } from '@mui/material';

const Cart = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: '132px',
        mb: '132px',
        marginInline: '470px',
      }}
    >
      <EmptyCart />
    </Box>
  );
};

export default Cart;
