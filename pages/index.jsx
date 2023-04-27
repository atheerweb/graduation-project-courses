import Hero from "@/components/home/Hero/Hero";
import Tracks from "@/components/home/Tracks/Tracks";
import Tribute from "@/components/home/Tribute/Tribute";
import Testimonials from "@/components/home/Testimonials/Testimonials";

const Courses = () => {
    return (
        <>
            <Hero />
            <Tracks />
            <Tribute title={"انضم لأكثر من 20 ألف طالب و طالبه"} image={"/images/suit.png"} />
            <Testimonials header={"ماذا يقول عنا طلابنا"} />
        </>
    )
}

export default Courses;