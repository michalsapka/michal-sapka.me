import { 
  Link,
  Box, 
  HStack, 
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Container,
  Image,
  useMediaQuery,
  useColorModeValue
} from '@chakra-ui/react'
import { GiHamburgerMenu } from "react-icons/gi"
import { DiGithubBadge } from "react-icons/di"
import ThemeToggleButton from "../components/toggle_theme_button"

function MobileNav() {
  return <>
  <Menu>
    <MenuButton as={IconButton} icon={<GiHamburgerMenu/>}>
      Action
    </MenuButton>
    <MenuList>
      <MenuItem icon={<DiGithubBadge/>}>View source</MenuItem>
    </MenuList>
  </Menu>
  </>
}

function DesktopNav() {
  return <HStack>
    <Box flex="1">
      <Link variant="topnav-link" href="https://github.com/michalsapka/michal-sapka-pl"> <Icon as={DiGithubBadge}/> Source code</Link>
    </Box>
  </HStack>
}


export default function Navbar() {
 const [isMobile] = useMediaQuery("(max-width: 768px)")
  return <Box
    as="header"
    position="fixed"
    backdropFilter="auto" 
    backdropBlur="6px"
    backdropBrightness={useColorModeValue("1.1", "1")}
    width="100%"
    pt="5px"
  >
    <Container 
      maxW="xl"
      mt="0"
      mb="1"
    >
      <HStack>
        <Box minW="189px" h={["22px", "22px", "30px", "30px"]} flex="0" >
          <Image 
            h="24px" 
            src={useColorModeValue("images/logo_light.png", "images/logo_dark.png")}
            />
        </Box>
        <Box flex="1">
          {isMobile ? null : <DesktopNav/>}
        </Box>
        <ThemeToggleButton/>
        {isMobile ? <MobileNav/> : null}
      </HStack>
    </Container>
  </Box>
}


