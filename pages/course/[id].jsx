// Components
import Main from "@/components/course/Main";
// APIs
import client from "@/lib/client";
import { setOneCourse } from "@/redux/slices/apiSlice";
// Hooks
import { useDispatch } from "react-redux";

const Course = ({ course }) => {
    const dispatch = useDispatch();
    course && dispatch(setOneCourse({ value: course }));

    return (
        <Main />
    )
}

export const getServerSideProps = async (context) => {
    const response = await client.get(`/courses/course/${context.query.id}`);
    const data = await response.data;

    return {
        props: {
            course: data
        }
    }
}

export default Course;