import { createSlice } from "@reduxjs/toolkit";
import { Twitter, LinkedIn, Facebook, Instagram, DifferenceOutlined, PeopleAltOutlined, QuestionAnswerOutlined, VerifiedUserOutlined, BusinessCenterOutlined, PersonOutlineOutlined  } from "@mui/icons-material";

export const constantsSlice = createSlice({
    name: "constants",
    initialState: {
        value: {
            navLinks: [
                {title: "مستقلين", href: "/freelancers"},
                {title: "وظائف", href: "/jobs"},
                {title: "الرئيسية", href: "/"}
            ],
            footerLinks: [
                {title: "أسئلة شائعة", href: "/FAQ"},
                {title: "عنا", href: "/about"},
                {title: "مستقلين", href: "/freelancers"},
                {title: "وظائف", href: "/jobs"},
                {title: "الرئيسية", href: "/"}
            ],
            footerIcons: (color) => (
                [
                    <Facebook key={0} sx={{color: color, cursor: "pointer"}} />,
                    <Twitter key={1} sx={{color: color, cursor: "pointer"}} />,
                    <LinkedIn key={2} sx={{color: color, cursor: "pointer"}} />,
                    <Instagram key={3} sx={{color: color, cursor: "pointer"}} />
                ]
            ),
            testimonialsCards: [
                {title: "Testimonial One", body: "Body One"},
                {title: "Testimonial Two", body: "Body Two"},
                {title: "Testimonial Three", body: "Body Three"}
            ],
            coursesTracks: [
                ["statistics", "إحصائي"],
                ["robotics", "مهندس روبوتات"],
                ["dataAnalysis", "علوم البيانات"],
                ["accounting", "محاسبه"],
                ["business", "إدارة اعمال"],
                ["programming", "مهندس برمجيات"]
            ],
            coursesTracksCards: {
                programming: [
                    {title: "كورس البرمجة", subTitle: "مهندس برمجيات", ratings: 5},
                    {title: "كورس البرمجة", subTitle: "مهندس برمجيات", ratings: 5},
                    {title: "كورس البرمجة", subTitle: "مهندس برمجيات", ratings: 5},
                    {title: "كورس البرمجة", subTitle: "مهندس برمجيات", ratings: 5},
                    {title: "كورس البرمجة", subTitle: "مهندس برمجيات", ratings: 5},
                    {title: "كورس البرمجة", subTitle: "مهندس برمجيات", ratings: 5}
                ],
                business: [
                    {title: "كورس إدارة الأعمال", subTitle: "إدارة اعمال", ratings: 5},
                    {title: "كورس إدارة الأعمال", subTitle: "إدارة اعمال", ratings: 5},
                    {title: "كورس إدارة الأعمال", subTitle: "إدارة اعمال", ratings: 5},
                    {title: "كورس إدارة الأعمال", subTitle: "إدارة اعمال", ratings: 5},
                    {title: "كورس إدارة الأعمال", subTitle: "إدارة اعمال", ratings: 5},
                    {title: "كورس إدارة الأعمال", subTitle: "إدارة اعمال", ratings: 5}
                ],
                accounting: [
                    {title: "كورس المحاسبة", subTitle: "محاسبه", ratings: 5},
                    {title: "كورس المحاسبة", subTitle: "محاسبه", ratings: 5},
                    {title: "كورس المحاسبة", subTitle: "محاسبه", ratings: 5},
                    {title: "كورس المحاسبة", subTitle: "محاسبه", ratings: 5},
                    {title: "كورس المحاسبة", subTitle: "محاسبه", ratings: 5},
                    {title: "كورس المحاسبة", subTitle: "محاسبه", ratings: 5}
                ],
                dataAnalysis: [
                    {title: "كورس علوم البيانات", subTitle: "علوم البيانات", ratings: 5},
                    {title: "كورس علوم البيانات", subTitle: "علوم البيانات", ratings: 5},
                    {title: "كورس علوم البيانات", subTitle: "علوم البيانات", ratings: 5},
                    {title: "كورس علوم البيانات", subTitle: "علوم البيانات", ratings: 5},
                    {title: "كورس علوم البيانات", subTitle: "علوم البيانات", ratings: 5},
                    {title: "كورس علوم البيانات", subTitle: "علوم البيانات", ratings: 5}
                ],
                robotics: [
                    {title: "كورس الروبوتات", subTitle: "مهندس روبوتات", ratings: 5},
                    {title: "كورس الروبوتات", subTitle: "مهندس روبوتات", ratings: 5},
                    {title: "كورس الروبوتات", subTitle: "مهندس روبوتات", ratings: 5},
                    {title: "كورس الروبوتات", subTitle: "مهندس روبوتات", ratings: 5},
                    {title: "كورس الروبوتات", subTitle: "مهندس روبوتات", ratings: 5},
                    {title: "كورس الروبوتات", subTitle: "مهندس روبوتات", ratings: 5}
                ],
                statistics: [
                    {title: "كورس تحليل البيانات", subTitle: "إحصائي", ratings: 5},
                    {title: "كورس تحليل البيانات", subTitle: "إحصائي", ratings: 5},
                    {title: "كورس تحليل البيانات", subTitle: "إحصائي", ratings: 5},
                    {title: "كورس تحليل البيانات", subTitle: "إحصائي", ratings: 5},
                    {title: "كورس تحليل البيانات", subTitle: "إحصائي", ratings: 5},
                    {title: "كورس تحليل البيانات", subTitle: "إحصائي", ratings: 5}
                ],
            }
        }
    }
});

export default constantsSlice.reducer;