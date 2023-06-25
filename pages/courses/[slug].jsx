// Components
import Main from "@/components/courses/Main";
// Hooks
import { useDispatch, useSelector } from "react-redux";
// APIs
import client from "@/lib/client";
import { setCategoryCourses } from "@/redux/slices/apiSlice";


const Courses = ({ categoryCourses }) => {
    const dispatch = useDispatch();
    const ratings = useSelector(state => state.constants.value.ratings);
    dispatch(setCategoryCourses({ value: categoryCourses.map((course, index) => ({ ...course, ratings: ratings[index] })) }));

    return (
        <>
            <Main />
        </>
    )
}

export const getServerSideProps = async (context) => {
    const response = await client.get(`/courses/category_fliter/?cat_has_courses__category_name=${context.query.slug}`);
    const data = await response.data;

    return {
        props: {
            categoryCourses: data
        }
    }
}

export default Courses;