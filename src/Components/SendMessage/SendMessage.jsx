"use client"
import {
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  VStack,
  Text,
  Image,
} from "@chakra-ui/react";
import { AttachmentIcon } from "@chakra-ui/icons";
import { FaChevronRight } from "react-icons/fa";

export default function SendMessage() {
  return (
    <VStack
      spacing={0}
      borderBottomLeftRadius={"20px"}
      borderBottomRightRadius={"20px"}
      bg={"linear-gradient(to left, rgba(229,238,255,0.3), #E5EEFF)"}
    >
      <HStack mt={1} py={2} d="flex" alignItems="flex-end">
        <InputGroup
          backgroundColor={"white"}
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          borderRadius={10}

        >
          <Input
            size={"md"}
            p={3}
            bg={"white"}
            outline="none"
            placeholder="Type your message..."
          />

          <IconButton
            aria-label="Attachment"
            icon={<AttachmentIcon />}
            variant="ghost"
            colorScheme="gray"
          />
        </InputGroup>
        <IconButton
          bg={"#4C82EF"}
         py={8}
         px={20}
         borderRadius={10}


          icon={<FaChevronRight />}
          colorScheme="blue"
        />
      </HStack>
      <Text
        pb={2}
        fontSize="13px"
        color="#B1B1B1"
        display="flex"
        alignItems="center"
        justifyContent={"center"}
      >
        Powered by
        <Text
          ml={1}
          as="span"
          fontWeight="bold"
          color="#7A7F8C"
          fontSize="13px"
        >
          Krunk.ai
        </Text>
        <Image mr={1} src="./krun.png" width={18} height={18} alt="image"/>
      </Text>
    </VStack>
  );
}
