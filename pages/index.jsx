// Components
import Hero from "@/components/home/Hero/Hero";
import Tracks from "@/components/home/Tracks/Tracks";
import Tribute from "@/components/home/Tribute/Tribute";
import Testimonials from "@/components/common/Testimonials";
// APIs
import client from "@/lib/client";
import { setCategories } from "@/redux/slices/apiSlice";
// Hooks
import { useDispatch } from "react-redux";

const Courses = ({ categories }) => {
    const dispatch = useDispatch();
    categories && dispatch(setCategories({ value: categories }));
    
    return (
        <>
            <Hero />
            <Tracks />
            <Tribute title={"انضم لأكثر من 20 ألف طالب و طالبه"} image={"/images/suit.png"} />
            <Testimonials header={"ماذا يقول عنا طلابنا"} />
        </>
    )
}

export const getServerSideProps = async () => {
    const response = await client.get("/courses/category/");
    const data = await response.data;

    return {
        props: {
            categories: data
        }
    }
}

export default Courses;