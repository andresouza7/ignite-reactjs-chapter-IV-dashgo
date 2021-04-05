import { Flex, useBreakpointValue, IconButton, Icon } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBar } from "./SearchBar";


export function Header() {
  const { onOpen } = useSidebarDrawer()

  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1400}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideScreen && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          mr="2"
          onClick={onOpen}
        >

        </IconButton>
      )}

      <Logo />

      {isWideScreen && <SearchBar />}

      <Flex
        align="center"
        ml="auto"
      >
        <NotificationsNav />
        <Profile showProfileData={isWideScreen} />
      </Flex>
    </Flex>
  )
}