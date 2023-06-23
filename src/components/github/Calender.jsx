import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { Box, Text } from "@chakra-ui/react";

// fontSize={["3xl", "4xl", "5xl"]}
//80,80,72
function Calender() {
  return (
    <section id="github">
      <Box bg="#0e0e11" color="#fff" pb="60px">
        <Box
          w={["100%", "90%", "90%", "60%"]}
          transform="scale(1.05)"
          m="auto"
          textAlign="center"
          p="60px auto"
        >
          <Row
            style={{
              justifyContent: "center",
              padding: "20px auto",
              paddingTop: "60px",
            }}
          >
            <Text
              mb="25px"
              textAlign="center"
              color="white"
              fontWeight="800"
              fontSize="50px"
            >
              Github Calender
            </Text>
            <GitHubCalendar
              username="manishawadhe"
              blockSize={15}
              blockMargin={5}
              fontSize={10}
              color="green"
              width="fit-content"
            />
          </Row>
        </Box>
      </Box>
    </section>
  );
}

export default Calender;
