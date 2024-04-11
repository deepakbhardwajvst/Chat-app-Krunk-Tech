"use client"
import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

const Conversation = ({ message, timestamp, fromWho }) => {
  const isMe = fromWho === "me";

  return (
    <Flex w="100%" justifyContent={isMe ? "flex-end" : "flex-start"} mt={20}>
      <Flex
        flexDirection="column"
        alignItems={isMe ? "flex-end" : "flex-start"}
        mb={2}
        maxW="70%"
        ml={isMe ? "auto" : 0}
      >
        <Box
          borderRadius="20px"
          bg={
            isMe
              ? "#DCF7C5"
              : "linear-gradient(to left, rgba(229,238,255,0.3), #E5EEFF)"
          }
          p={10}
          textAlign={isMe ? "right" : "left"}
          
        >
          <Text fontSize={13}>{message}</Text>
        </Box>
        <Text ml={2} mt={2} fontSize="10px" color="gray.700" >
          {timestamp}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Conversation;
