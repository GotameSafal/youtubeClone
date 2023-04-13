import { Stack, Text, Flex, Heading, HStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Timeconverter } from "@/utils/Timeconverter";

const RelatedVideo = ({
  title,
  channelName,
  upload,
  videoLength,
  views,
  videoId,
  imgSrc,
}) => {
  return (
    <Link href={`/watch?v=${videoId}`}>
      <Stack direction="row" cursor="pointer">
        <Stack pos="relative">
          <Image
            src={imgSrc}
            width={220}
            height={120}
            alt="video.yt"
            style={{minWidth:'220px', minHeight:'120px', borderRadius:'8px'}}
          />
          <Text
            fontSize="10px"
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
        </Stack>
        <Stack spacing>
          <Heading noOfLines={2} size="xs">
            {title}
          </Heading>
          <Text fontSize="sm">{channelName}</Text>
          <HStack justify="space-between">
            <Text fontSize="sm">{`${views} views`}</Text>
            <Text fontSize="sm">{upload}</Text>
          </HStack>
        </Stack>
      </Stack>
    </Link>
  );
};

export default RelatedVideo;
