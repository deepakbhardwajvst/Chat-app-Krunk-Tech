"use client"
import {
  Box,
  Center,
  Text,
  Button,
  Input,
  VStack,
  HStack,
} from "@chakra-ui/react";
import Navbar from "@/Components/Navbar/Navbar";
import Conversation from "@/Components/Conversation/Conversation";
import Filters from "@/Components/Filters/Filters";
import SendMessage from "@/Components/SendMessage/SendMessage";
import ProductChat from "@/Components/ProductChat/ProductChat";
import Tags from "@/Components/Tags/Tags";
import { FaSlidersH } from "react-icons/fa";

export default function Home() {
  const messages = [
    {
      message:
        "Hi Sam! I am your personal shopping assistant , how can i help you today ?",
      timestamp: "4:45 PM",
      isComponent: false,
      from: "chatbot",
    },
    {
      message: "I am looking for a hand bag, with long strap .",
      timestamp: "4:46 PM",
      isComponent: false,
      from: "me",
    },
    {
      isComponent: true,
      componentHeader: "Popular tags for handbag",
      component: <Tags />,
    },
    {
      isComponent: true,
      component: <ProductChat />,
    },
    {
      isComponent: true,
      componentHeader: "Select Filters",
      component: <Filters />,
      hasRightItem: true,
    },
  ];
  return (
    <Box h="100vh" bg="gray.100">
      <Center h="100%">
        <Box borderRadius={20} w="25%" p={2} bg="white" boxShadow="lg">
          <Navbar />
          <Box h="400px" overflowY="scroll" mb={4}>
            {messages.map((item, i) =>
              item.isComponent ? (
                <div>
                  {item.componentHeader ? (
                    <HStack justifyContent={"space-between"}>
                      <Text
                        ml={1}
                        letterSpacing={1}
                        mt={2}
                        fontWeight={400}
                        fontSize="13px"
                        color="#949494"
                      >
                        {item.componentHeader}
                      </Text>

                      {item.hasRightItem && (
                        <HStack>
                          <FaSlidersH color="#666666" />
                          <Text color={"#666666"} fontSize={"13px"}>
                            Filters
                          </Text>
                        </HStack>
                      )}
                    </HStack>
                  ) : null}
                  {item.component}
                </div>
              ) : (
                <Conversation
                  key={i}
                  message={item.message}
                  timestamp={item.timestamp}
                  fromWho={item.from}
                />
              )
            )}
          </Box>
          <SendMessage />
        </Box>
      </Center>
    </Box>
  );
}
