// MUI Components
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
// Hooks
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
// CSS Modules
import styles from "@/styles/modules/course/course.module.css";

const Content = () => {
    const accordions = useSelector(state => state.constants.value.courseAccordions);
    const router = useRouter();

    return (
        <Box className={styles.content}>
            <Typography variant="h2">
                المحتوي الدراسي
            </Typography>
            <Box sx={{width: "75%"}}>
                {
                    accordions.map(accordion => (
                        <Accordion key={accordion.id} sx={{width: "100%"}}>
                            <AccordionSummary
                              expandIcon={<ExpandMore />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <Typography variant="h6">
                                  {accordion.track}
                              </Typography>
                            </AccordionSummary>
                            {
                                accordion.content.map((lesson, index) => (
                                    <AccordionDetails key={index} sx={{borderTop: "solid silver 1px"}}>
                                      <Box className={styles.accordionItem}>
                                          <Typography>
                                            {lesson.title}
                                          </Typography>
                                          <Box className={styles.accordionItemButtonContainer}>
                                              <Typography color="primary">
                                                  {lesson.duration}
                                              </Typography>
                                              <Button onClick={() => router.push(`/course/${accordion.id}`)} variant="outlined">
                                                  شاهد
                                              </Button>
                                          </Box>
                                      </Box>
                                    </AccordionDetails>
                                ))
                            }
                        </Accordion>
                    ))
                }
            </Box>
        </Box>
    )
}

export default Content;