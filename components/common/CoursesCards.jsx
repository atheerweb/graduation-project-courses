// MUI Components
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Favorite from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const CoursesCards = ({ content }) => {
    return (
        <Card sx={{ maxWidth: 345, height: "fit-content" }}>
            <CardHeader
                sx={{px: 0}}
                title={
                    <Typography variant="h3" sx={{mr: 1.5, mb: 1}}>
                        {content.title}
                    </Typography>
                }
                subheader={
                    <Box sx={{display: "flex", alignItems: "center", gap: "10px", px: 1.5}}>
                        <Typography component="legend">التقييمات</Typography>
                        <Rating size="small" name="read-only" value={content.ratings} readOnly />
                        <Typography color="primary">
                            {content.ratings}
                        </Typography>
                    </Box>
                }
            />
            <CardMedia
                sx={{ width: "100%" }}
                component="img"
                image={content.image}
                title="SAP"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {content.body}
                </Typography>
            </CardContent>
            <CardActions sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Link style={{textDecoration: "none"}}>
                    <Typography color="primary" sx={{cursor: "pointer"}}>
                        شاهد
                    </Typography>
                </Link>
                <IconButton aria-label="add to favorites">
                    <Favorite />
                </IconButton>
            </CardActions>
      </Card>
    )
}

export default CoursesCards;