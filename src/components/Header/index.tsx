import { useSidebarDrawer } from "@/contexts/sidebarDrawerContext";
import { Flex,IconButton,useBreakpointValue,Icon } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import Logo from "./logo";
import NotificationNav from "./notificationNav";
import Profile from "./profile";
import SearchBox from "./searchBox";

export function Header() {

  const { onOpen} = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })


  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton icon={<Icon as={RiMenuLine} />} 
        aria-label="Open navigation"
        fontSize="24"
        variant="ustyled"
        onClick={onOpen}
        mr="2"
        
        >
          
        </IconButton>
      )}

      <Logo />
      {isWideVersion && <SearchBox />}
      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile  showProfileData={isWideVersion}/>
      </Flex>
    </Flex>
  );
}
