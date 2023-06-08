import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Fragment } from 'react';
import Link from 'next/link';
export default function EmptyCart() {
  return (
    <div>
      <CardMedia
        component="img"
        height="auto"
        image="/images/cart-empty.png"
        alt="empty Cart"
      />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: 'center', fontSize: '20px' }}
        >
          عربة التسوق فارغة<br></br> لمزيد من الدورات استمر في التسوق
        </Typography>
      </CardContent>

      <CardActions
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
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
      </CardActions>
    </div>
  );
}
