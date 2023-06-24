// MUI Components
import Box from "@mui/material/Box";
// Video Component
import ReactPlayer from "react-player/youtube";

const Video = () => {
    return (
        <Box sx={{borderRadius: 5, overflow: "hidden", width: "100%"}}>
            <ReactPlayer width={"100%"} url='https://www.youtube.com/watch?v=tkn78AkT1aI' />
        </Box>
    )
}

export default Video;