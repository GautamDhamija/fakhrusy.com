import {
  BackgroundProps,
  Flex,
  IconButton,
  Modal,
  ModalContent,
  Text,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { PropsWithChildren } from "react";

type Props = {
  title: string;
  onClose: () => void;
  isOpen: boolean;
  isScrollable?: boolean;
  noPadding?: boolean;
  bgColor?: BackgroundProps["bgColor"];
};

export function AppLayout({
  title,
  children,
  onClose,
  isOpen,
  isScrollable = true,
  noPadding = false,
  bgColor = "white",
}: PropsWithChildren<Props>) {
  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      size="full"
      styleConfig={{ marginTop: 0 }}
    >
      <ModalContent overflowY="auto">
        <Flex
          flexDir="column"
          w="100%"
          h="auto"
          overflowY={isScrollable ? "auto" : "hidden"}
        >
          <Flex pos="relative" bgColor="#5a595c" h="30px" w="100%">
            <Text
              flexGrow={1}
              textAlign="center"
              alignItems="center"
              justifyContent="center"
              color="aliceblue"
              pt="2px"
              fontWeight="600"
              letterSpacing="wider"
            >
              {title}
            </Text>
            <IconButton
              icon={<CloseIcon w="15px" h="15px" />}
              aria-label={`Close ${title} Icon`}
              onClick={onClose}
              w="30px"
              maxW="30px"
              minW="30px"
              h="30px"
              borderRadius="0"
            />
          </Flex>
          <Flex
            borderBottom="1px solid #5a595c"
            borderRight="1px solid #5a595c"
            borderLeft="1px solid #5a595c"
            h="auto"
            w="100%"
            flexGrow={1}
            bgColor={bgColor}
            pl={noPadding ? 0 : 3}
            pr={noPadding ? 0 : 3}
            pt={noPadding ? 0 : 2}
            pb={noPadding ? 0 : 2}
          >
            {children}
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
}
