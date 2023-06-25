import { createSlice } from "@reduxjs/toolkit";
import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import { v4 as uuidv4 } from 'uuid';

const constantsSlice = createSlice({
    name: "constants",
    initialState: {
        value: {
            ratings: [5, 1, 3, 2, 4, 3, 4, 5, 2, 1, 3, 4, 5, 1, 2, 4, 3, 5 , 1, 2, 3, 4, 3 , 2 , 2, 4, 5, 1, 1, 5, 3, 4, 2, 4, 2, 1, 3, 5, 5, 5, 1, 2, 4, 1, 4, 4, 3, 1, 3, 3 ,2, 2, 1, 5, 5, 4, 1, 2],
            dropItems: [
              { title: 'برمجة', href: '/courses/programming' },
              { title: 'إدارة', href: '/courses/business' },
              { title: 'محاسبة', href: '/courses/accounting' },
              { title: 'تصميم', href: '/courses/design' },
              { title: 'مونتاج', href: '/courses/photoshop' },
            ],
            footerLinks: [
                {title: "الرئيسية", href: "/"},
                {title: "مقدم دورة", href: "/comingsoon"},
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
                { title: 'مصطفى حمدى', subTitle: 'مستقل مشهور', body: "اكتشفت منصة علمنى مؤخرًا أثناء البحث عن [منتج] معين. لم يكن لديهم فقط العنصر الذي كنت أبحث عنه ، ولكن اختيارهم كان واسعًا ، وكانت الأسعار تنافسية. كان من السهل التنقل في موقع الويب ، وكانت أوصاف المنتج مفيدة ودقيقة." },
                { title: 'عماد الدين', subTitle: 'رجل أعمال', body: "لقد كان العمل علة منصة علمنى من دواعي سروري المطلق. فريقهم من المهنيين المهرة ليس فقط على دراية في مجال عملهم ولكنه مكرس أيضًا لتقديم خدمة ودعم من الدرجة الأولى. لقد أخذوا الوقت الكافي لفهم احتياجاتنا الفريدة وطوروا حلاً مخصصًا تجاوز توقعاتنا." },
                { title: 'خالد شوقى', subTitle: 'خبير إقتصاد', body: "بدأت مؤخرًا في استخدام منصة علمنى ولم أكن منبهرًا بوظائفه وواجهة مستخدم سهلة الاستخدام. لقد أحدث التطبيق تأثيرًا كبيرًا على روتيني اليومي ، حيث قام بتبسيط المهام وتقديم رؤى قيمة. من الواضح أن المطورين بذلوا قدرًا كبيرًا من التفكير والجهد لإنشاء تطبيق من الدرجة الأولى يلبي احتياجات المستخدمين." },
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
                {id: "0", track: "المقدمة", content: [{title: "المقدمة", duration: "1:32"}, {title: "المهم", duration: "5:12"}, {title: "الخاتمة", duration: "0:15"}]},
                {id: "1", track: "المهم", content: [{title: "المقدمة", duration: "1:32"}, {title: "المهم", duration: "5:12"}, {title: "الخاتمة", duration: "0:15"}]},
                {id: "2", track: "الخاتمة", content: [{title: "المقدمة", duration: "1:32"}, {title: "المهم", duration: "5:12"}, {title: "الخاتمة", duration: "0:15"}]}
            ]
        }
    }
})

export default constantsSlice.reducer;
