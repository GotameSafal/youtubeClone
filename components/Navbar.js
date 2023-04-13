import {
  Circle,
  Flex,
  Heading,
  HStack,
  Stack,
  chakra,
  Button,
  Avatar,
} from "@chakra-ui/react";
import {
  RxHamburgerMenu,
  FiSearch,
  RxCross2,
  RxDotsVertical,
} from "../utils/fileIcon";
import Image from "next/image";
import yt_logo from "../assets/yt_logo.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { closeSidebar, openSidebar } from "@/Redux/features/sidebarSlice";
import { useRef, useState } from "react";
import { fetchSingleData } from "@/Redux/features/fetchSideData"; 

const Navbar = () => {
  const router = useRouter();
  const searchField = useRef();
  const [searchText, setSearchText] = useState("");
  const sidebarState = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const toggleSidebar = () => {
    sidebarState ? dispatch(closeSidebar()) : dispatch(openSidebar());
    console.log(sidebarState);
  };
  const changeEvent = (e) => {
    setSearchText(e.target.value);
  };
  const submit = () => {
    if (!searchText) {
       return searchField.current.focus();
    }
    router.push('/search');
    dispatch(fetchSingleData(searchText))
    
  };
  return (
    <Stack direction="row" h="80px" bg="#0f0f0f" justify="space-between">
      <HStack>
        <Circle
          ms={2}
          cursor="pointer"
          p={2}
          _hover={{ bg: "#272727" }}
          onClick={toggleSidebar}
        >
          <RxHamburgerMenu size={20} />
        </Circle>
        <Flex cursor="pointer">
          <Link style={{ display: "flex", alignItems: "center" }} href="/">
            <Image src={yt_logo} alt="yt-logo.png" height={50} />
            <Heading
              display={{ base: "none", md: "block" }}
              letterSpacing="-1px"
              size="md"
            >
              Youtube
            </Heading>
          </Link>
        </Flex>
      </HStack>
      <HStack>
        <Flex rounded="20px" outline="whiteSmoke solid 1px">
          <Flex
            ps={2}
            roundedLeft={20}
            bg="#121212"
            align={"center"}
            pos="relative"
          >
            <chakra.input
              outline="none"
              px={2}
              w={{ base: "80%", md: "100%" }}
              type="text"
              bg="#121212"
              placeholder="search"
              value={searchText}
              onChange={changeEvent}
              ref={searchField}
            />
            <Circle
              p={2}
              display={searchText ? "block" : "none"}
              _hover={{ bg: "#3a3838" }}
              cursor="pointer"
              onClick={() => setSearchText("")}
            >
              <RxCross2 size={20} />
            </Circle>
          </Flex>
          <Button
            onClick={submit}
            size="md"
            bg="#292629"
            roundedLeft={0}
            roundedRight={20}
            _hover={{ bg: "#3a3838" }}
          >
            <FiSearch size={20} />
          </Button>
        </Flex>
      </HStack>

      <HStack>
        <Circle p={2} cursor="pointer" _hover={{ bg: "#272727" }}>
          <RxDotsVertical size={20} />
        </Circle>
        <Flex display={{ base: "none" }} pe={3}>
          <Avatar size="md" cursor="pointer" />
        </Flex>
      </HStack>
    </Stack>
  );
};

export default Navbar;
