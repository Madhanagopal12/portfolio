import { Divider, Flex, Grid } from "@chakra-ui/react";
import TypewriterText from "../../Components/TypewriterText";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

import theWildOasisReactjs from "../../assets/Projects/the-wild-oasis-react.png";
import theWildOasisNextjs from "../../assets/Projects/the-wild-oasis-nextjs.png";
import theFastReactPizza from "../../assets/Projects/fast-react-pizza.png";
import eventLoopJs from "../../assets/Projects/event-loop-js.png";
import kanbanFlow from "../../assets/Projects/kanban-flow.png";

const Project = () => {
  const text = "P r o j e c t s ".split(" ");

  return (
    <Flex
      width={"100%"}
      flexDir={"column"}
      justifyContent={"center"}
      id="projects"
      alignItems={"center"}
      // px={10}
      py={20}
      gap={10}
    >
      <Flex flexDir={"column"}>
        <TypewriterText text={text} />
        <motion.div
          initial={{ width: 0 }}
          whileInView={{
            width: "100%", // Slide in to its original position
            transition: {
              duration: 1, // Animation duration
              delay: 0.8,
            },
          }}
          viewport={{ once: true }}
        >
          <Divider borderColor="brand.buttonGreen" borderWidth={2} />
        </motion.div>
      </Flex>
      {/* Project Card */}
      <Grid
        templateColumns={{
          xl: "repeat(3, 1fr)",
          md: "repeat(2, 1fr)",
          base: "repeat(1, 1fr)",
        }}
        gap={{ xl: 10, lg: 16, md: 10, base: 5 }}
      >
        <ProjectCard
          onClick={() =>
            window.open(
              "https://the-wild-oasis-nextjs-madan.vercel.app/",
              "_blank",
            )
          }
          title={"The Wild Oasis - Cabin Reservation Platform"}
          description={
            "Built a full-stack cabin reservation platform that allows users to browse available cabins, view detailed information, and manage reservations through a modern and responsive interface. The application uses Next.js Server Components and Server Actions to efficiently handle server-side rendering and data operations."
          }
          image={theWildOasisNextjs}
          stack={[
            "Next.js",
            "React",
            "Tailwind CSS",
            "NextAuth.js",
            "Supabase",
          ]}
        />
        <ProjectCard
          onClick={() =>
            window.open("https://js-event-loop-madan.netlify.app/", "_blank")
          }
          title={"Event Loop Visualizer"}
          description={
            "Developed an interactive web application to visually demonstrate how the JavaScript Event Loop processes synchronous and asynchronous code execution. The tool helps users understand core runtime concepts such as the Call Stack, Callback Queue, Microtask Queue, and Event Loop cycle through step-by-step visualization."
          }
          image={eventLoopJs}
          stack={["Html", "CSS", "JS"]}
        />

        <ProjectCard
          onClick={() =>
            window.open("https://kanban-flow-madan.netlify.app/", "_blank")
          }
          title={"Kanban Flow"}
          description={
            "Created a Kanban-style task management application that helps users organize and track their work through a visual board interface. The application allows tasks to be organized into different workflow stages such as To-Do, In Progress, and Done, making it easier to monitor task status and project progress."
          }
          image={kanbanFlow}
          stack={["React", "TypeScript", "DnD Kit", "Tailwind CSS "]}
        />

        <ProjectCard
          onClick={() =>
            window.open("https://fast-react-pizza-madan.netlify.app/", "_blank")
          }
          title={"Fast react pizza"}
          description={
            "A responsive pizza ordering web application that allows users to browse a menu, add pizzas to a cart, and place orders seamlessly. The application uses React Router for client-side navigation and Redux Toolkit for efficient global state management of the shopping cart and order details."
          }
          image={theFastReactPizza}
          stack={["React", "Redux Toolkit", "React Router", "CSS"]}
        />
        <ProjectCard
          onClick={() =>
            window.open(
              "https://the-wild-oasis-react-madan.vercel.app/",
              "_blank",
            )
          }
          title={"The Wild Oasis"}
          description={
            "A hotel management dashboard that allows administrators to manage cabins, bookings, and guest information through a modern and responsive interface. The application integrates Supabase as the backend service for database operations and authentication."
          }
          image={theWildOasisReactjs}
          stack={["React", "React Query", "Styled Components", "Supabase"]}
        />
      </Grid>
    </Flex>
  );
};

export default Project;
