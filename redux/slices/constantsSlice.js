import { createSlice } from "@reduxjs/toolkit";
import { Twitter, LinkedIn, Facebook, Instagram  } from "@mui/icons-material";
import { v4 as uuidv4 } from 'uuid';

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
                {title: "يوسف مصطفي", subTitle: "مبرمج فرونت أند", body: "“للبقاء في طليعة ابتكارات تكنولوجيا المعلومات ، يحتاج فريقك إلى إعادة ابتكار مجموعة مهاراته بانتظام. مع Udemy Business ، يمكنني منح فريقي مساحة للتعلم وأخذ زمام المبادرة. هذا يعني أنه يمكننا إنتاج أعمال عالية الجودة بسرعة أكبر .”"},
                {title: "يوسف مصطفي", subTitle: "مبرمج فرونت أند", body: "“للبقاء في طليعة ابتكارات تكنولوجيا المعلومات ، يحتاج فريقك إلى إعادة ابتكار مجموعة مهاراته بانتظام. مع Udemy Business ، يمكنني منح فريقي مساحة للتعلم وأخذ زمام المبادرة. هذا يعني أنه يمكننا إنتاج أعمال عالية الجودة بسرعة أكبر .”"},
                {title: "يوسف مصطفي", subTitle: "مبرمج فرونت أند", body: "“للبقاء في طليعة ابتكارات تكنولوجيا المعلومات ، يحتاج فريقك إلى إعادة ابتكار مجموعة مهاراته بانتظام. مع Udemy Business ، يمكنني منح فريقي مساحة للتعلم وأخذ زمام المبادرة. هذا يعني أنه يمكننا إنتاج أعمال عالية الجودة بسرعة أكبر .”"}
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
            },
            coursesCards: [
                {id: uuidv4(), title: "أساسيات مشروع SAP...", ratings: 5, image: "/images/courses-sap.png", body: "تغطية كل شيء عن أساسيات تنفيذ SAP خصوصيات وعموميات مع SAP Activate وتسريع SAP"},
                {id: uuidv4(), title: "أساسيات مشروع SAP...", ratings: 5, image: "/images/courses-sap.png", body: "تغطية كل شيء عن أساسيات تنفيذ SAP خصوصيات وعموميات مع SAP Activate وتسريع SAP"},
                {id: uuidv4(), title: "أساسيات مشروع SAP...", ratings: 5, image: "/images/courses-sap.png", body: "تغطية كل شيء عن أساسيات تنفيذ SAP خصوصيات وعموميات مع SAP Activate وتسريع SAP"},
                {id: uuidv4(), title: "أساسيات مشروع SAP...", ratings: 5, image: "/images/courses-sap.png", body: "تغطية كل شيء عن أساسيات تنفيذ SAP خصوصيات وعموميات مع SAP Activate وتسريع SAP"},
                {id: uuidv4(), title: "أساسيات مشروع SAP...", ratings: 5, image: "/images/courses-sap.png", body: "تغطية كل شيء عن أساسيات تنفيذ SAP خصوصيات وعموميات مع SAP Activate وتسريع SAP"},
                {id: uuidv4(), title: "أساسيات مشروع SAP...", ratings: 5, image: "/images/courses-sap.png", body: "تغطية كل شيء عن أساسيات تنفيذ SAP خصوصيات وعموميات مع SAP Activate وتسريع SAP"},
                {id: uuidv4(), title: "أساسيات مشروع SAP...", ratings: 5, image: "/images/courses-sap.png", body: "تغطية كل شيء عن أساسيات تنفيذ SAP خصوصيات وعموميات مع SAP Activate وتسريع SAP"},
                {id: uuidv4(), title: "أساسيات مشروع SAP...", ratings: 5, image: "/images/courses-sap.png", body: "تغطية كل شيء عن أساسيات تنفيذ SAP خصوصيات وعموميات مع SAP Activate وتسريع SAP"},
                {id: uuidv4(), title: "أساسيات مشروع SAP...", ratings: 5, image: "/images/courses-sap.png", body: "تغطية كل شيء عن أساسيات تنفيذ SAP خصوصيات وعموميات مع SAP Activate وتسريع SAP"},
                {id: uuidv4(), title: "أساسيات مشروع SAP...", ratings: 5, image: "/images/courses-sap.png", body: "تغطية كل شيء عن أساسيات تنفيذ SAP خصوصيات وعموميات مع SAP Activate وتسريع SAP"},
                {id: uuidv4(), title: "أساسيات مشروع SAP...", ratings: 5, image: "/images/courses-sap.png", body: "تغطية كل شيء عن أساسيات تنفيذ SAP خصوصيات وعموميات مع SAP Activate وتسريع SAP"},
                {id: uuidv4(), title: "أساسيات مشروع SAP...", ratings: 5, image: "/images/courses-sap.png", body: "تغطية كل شيء عن أساسيات تنفيذ SAP خصوصيات وعموميات مع SAP Activate وتسريع SAP"},
            ],
            coursesCheckboxes: [
                "علوم البيانات",
                "برمجة الويب",
                "فرونت إند",
                "باك إند",
                "برمجة تطبيقات",
                "devOps",
            ],
            coursesOptions: [
                "الأفضل",
                "الأحدث",
                "الأشهر"
            ],
            courseAccordions: [
                {id: "0", track: "فرونت إند", content: [{title: "المقدمة", duration: "1:32"}, {title: "المهم", duration: "5:12"}, {title: "الخاتمة", duration: "0:15"}]},
                {id: "1", track: "باك إند", content: [{title: "المقدمة", duration: "1:32"}, {title: "المهم", duration: "5:12"}, {title: "الخاتمة", duration: "0:15"}]},
                {id: "2", track: "داتا بيز", content: [{title: "المقدمة", duration: "1:32"}, {title: "المهم", duration: "5:12"}, {title: "الخاتمة", duration: "0:15"}]}
            ]
        }
    }
});

export default constantsSlice.reducer;