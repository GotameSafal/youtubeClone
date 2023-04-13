import { Stack, Text } from "@chakra-ui/react";
const SidebarItem = ({ icon, text, bg, action }) => {
  return (
    <Stack
      rounded="md"
      mb={1}
      py={2}
      px={3}
      bg={bg}
      spacing={4}
      _hover={{ bg: "#272727" }}
      direction="row"
      cursor="pointer"
      onClick={action}
    >
      {icon}
      <Text fontSize="sm" fontWeight={"600"}>
        {text}
      </Text>
    </Stack>
  );
};

export default SidebarItem;
