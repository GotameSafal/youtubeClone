import { Divider, Box, Flex, Stack } from "@chakra-ui/react";
import { categories } from "@/utils/categories";
import SidebarItem from "./SidebarItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleData } from "@/Redux/features/fetchSideData";
import { changeSidebar } from "@/Redux/features/changeContentSlice";
import { useRouter } from "next/router";
const Sidebar = () => {
  const router = useRouter();
  const sidebarState = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const activeSidebarItem = useSelector((state) => state.activeSidebar);

  const clickedAction = (name, type) => {
    if (type !== "menu" || type === "home") {
      dispatch(fetchSingleData(name));
    }
    if (type !== "menu" || type !== "home") {
      router.push(`/${name.toLowerCase()}`);
    }
    dispatch(changeSidebar(name));
  };
  return (
    <Stack
      overflowY="auto"
      pos={{ base: "fixed", lg: "relative" }}
      h="100%"
      transform={{
        base: `${sidebarState ? "translateX(-400px)" : "translateX(0px)"}`,
        lg: "translateX(0px)",
      }}
      w="250px"
      transition="transform 0.3s ease-in-out"
      bg="#0f0f0f"
      zIndex={2}
      p={5}
    >
      <Flex direction="column" spacing={1}>
        {categories.map((elem) => {
          return (
            <Box key={elem.name}>
              <SidebarItem
                icon={elem.icon}
                text={elem.type === "home" ? "Home" : elem.name}
                action={() => clickedAction(elem.name, elem.type)}
                bg={elem.name === activeSidebarItem ? "#272727" : ""}
              />
              {elem.divider && <Divider my={6} />}
            </Box>
          );
        })}
      </Flex>
    </Stack>
  );
};

export default Sidebar;
