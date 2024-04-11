import Image from "next/image";
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
Navbar
export default function Home() {
  return (
    <Box h="100vh" bg="gray.100">
      <Center h="100%">
        <Box borderRadius={20} w="25%" p={2} bg="white" boxShadow="lg">
          <Header />
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
                <ChatMessage
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
