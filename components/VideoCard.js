import Image from "next/image";
import { Stack, Heading, Flex, HStack, Circle, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Timeconverter } from "@/utils/Timeconverter";
const VideoCard = ({
  title,
  channelName,
  upload,
  videoLength,
  views,
  imgSrc,
  videoId,
  channelLogo,
}) => {
  return (
    <Link href={`/watch?v=${videoId}`}>
      <Flex
        direction="column"
        cursor="pointer"
        bg="#0f0f0f"
        m={2}
        w="360px"
        h="350px"
      >
        <Flex pos="relative">
          <Image
            src={imgSrc}
            width={360}
            height={10}
            alt='just.png'
            style={{ borderRadius: "12px" }}
          />s
          <Text
            fontSize="xs"
            rounded={6}
            px={3}
            py={1}
            pos="absolute"
            right={1}
            bottom={1}
            bg="#0f0f0f"
          >
            {Timeconverter(videoLength)}
          </Text>
        </Flex>
        <Stack direction="row" mx={2} my={3} align={"self-start"}>
          <Circle>
            <Image
              width={40}
              height={40}
              style={{ borderRadius: "50px" }}
              alt="channel.logo"
              src={channelLogo}
            />
          </Circle>
          <Stack spacing={1}>
            <Heading as="h6" fontSize="md" noOfLines={2}>
              {title}
            </Heading>
            <Text fontSize="sm" pt={1}>
              {channelName}
            </Text>
            <HStack spacing={3}>
              <Text fontSize="sm">{`${views} views`}</Text>
              <Text fontSize="sm">{`${upload}`}</Text>
            </HStack>
          </Stack>
        </Stack>
      </Flex>
    </Link>
  );
};

export default VideoCard;
