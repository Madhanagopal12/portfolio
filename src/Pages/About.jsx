import { Flex, Text, Code, Image } from "@chakra-ui/react";
import bg from "../assets/aboutbg4.png";
import profilePic from "../assets/profilePic.jpg";
import aboutRight from "../assets/aboutright.png";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Flex
      bgImg={bg}
      bgSize="cover"
      // minH={{ lg: "100vh", base: "auto" }}
      w="100%"
      alignItems="center"
      bgBlendMode={"darken"}
      color="white"
      id="about"
      py={{ base: 10, md: 12, lg: 20 }}
      flexDir={{ base: "column", md: "row" }}
    >
      {/* Left Side */}
      <Flex
        flexDir={"column"}
        justifyContent={"center"}
        height={"100%"}
        w={{ lg: "70%" }}
        gap={{ lg: 5, md: 8, base: 6 }}
        alignItems={"center"}
      >
        <Flex
          width={{ lg: "80%", md: "85%", base: "90%" }}
          alignSelf={{ lg: "center", base: "center" }}
          zIndex={2}
          mt={4}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0, // Slide in to its original position
              transition: {
                duration: 0.5, // Animation duration
                delay: 0.5,
              },
            }}
            viewport={{ once: true }}
          >
            <Text
              fontSize={{ lg: "4xl", md: "26px", base: "2xl" }}
              fontWeight="bold"
              border={"1px solid"}
              borderColor={"brand.buttonGreen"}
              textAlign={"center"}
              width={{ lg: "250px", md: "180px", base: "150px" }}
              borderRadius={"20px 0 20px 0"}
              bg={"black"}
            >
              About Me
            </Text>
          </motion.div>
        </Flex>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0, // Slide in to its original position
            transition: {
              duration: 0.5, // Animation duration
              delay: 0.5,
            },
          }}
          viewport={{ once: true }}
        >
          <Flex
            flexDirection={"column"}
            gap={2}
            fontSize={{ lg: 16, md: 14, base: 12 }}
            width={{ lg: "80%", md: "85%", base: "90%" }}
            p={{ md: 6, base: 4 }}
            borderRadius={{ md: 30, base: 20 }}
            bg={"#1D2023"}
            alignSelf={{ lg: "center", base: "center" }}
            zIndex={100}
            m={"auto"}
          >
            <Code bg="none" color="#33FFCC">
              Hello! 👋
            </Code>

            <Code bg="none" color="white">
              Hi, I'm <span style={{ color: "#33FFCC" }}>Madana Gopal</span>, a
              passionate
              <span style={{ color: "#33FFCC" }}> Frontend Developer </span>
              who enjoys building fast, scalable, and user-friendly web
              applications. I specialize in developing modern React applications
              and have hands-on experience delivering production-ready features
              for real-world projects.
            </Code>

            <Code bg="none" color="white">
              My primary expertise includes
              <span style={{ color: "#33FFCC" }}>
                {" "}
                React, Next.js, JavaScript, TypeScript, TanStack Query, React
                Router, Tailwind CSS, and RESTful APIs
              </span>
              . I also work with
              <span style={{ color: "#33FFCC" }}>
                {" "}
                Node.js, Express, MySQL, and Supabase
              </span>
              , allowing me to understand the complete application workflow from
              frontend to backend.
            </Code>

            <Code bg="none" color="white">
              Recently, I've been building
              <span style={{ color: "#33FFCC" }}> qnaHub</span>, a full-stack
              certification exam platform featuring secure authentication,
              AI-powered question generation using Google Gemini, role-based
              dashboards, server-state management with TanStack Query, and
              production deployment on Hostinger.
            </Code>

            <Code bg="none" color="white">
              I enjoy solving challenging problems, debugging complex issues,
              optimizing application performance, and writing clean,
              maintainable, and scalable code that delivers a great user
              experience.
            </Code>

            <Code bg="none" color="white">
              I'm always exploring modern frontend technologies and best
              practices to build better software while continuously growing as a
              developer.
            </Code>
          </Flex>
        </motion.div>
        {/* For mobile screen */}
        <Tilt>
          <Flex
            flex={1}
            justifyContent={"center"}
            alignItems={"center"}
            display={{ base: "flex", lg: "none" }}
          >
            <Tilt>
              <Image
                height={{ lg: "300px", md: "250px", base: "200px" }}
                width={{ lg: "300px", md: "250px", base: "200px" }}
                borderRadius={"100%"}
                src={aboutRight}
                bg="linear-gradient(to top, #33FFCC, #111111 )" // Gradient background
                boxShadow="
                  inset -8px -8px 15px rgba(255, 255, 255, 0.2), 
                  inset 8px 8px 15px rgba(0, 0, 0, 0.5)         
                "
              />
            </Tilt>
          </Flex>
        </Tilt>
      </Flex>
      {/* Right Side */}
      <Flex
        flex={1}
        justifyContent={"flex-start"}
        alignItems={"center"}
        display={{ base: "none", lg: "flex" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0, // Slide in to its original position
            transition: {
              duration: 0.5, // Animation duration
              delay: 0.5,
            },
          }}
          viewport={{ once: true }}
        >
          <Tilt>
            <Image
              height={{ xl: "300px", md: "250px", base: "200px" }}
              width={{ xl: "300px", md: "250px", base: "200px" }}
              borderRadius={"100%"}
              src={profilePic}
              bg="linear-gradient(to top, #33FFCC, #111111 )" // Gradient background
              boxShadow="
                  inset -8px -8px 15px rgba(255, 255, 255, 0.2), 
                  inset 8px 8px 15px rgba(0, 0, 0, 0.5)         
                "
            />
          </Tilt>
        </motion.div>
      </Flex>
    </Flex>
  );
};

export default About;
