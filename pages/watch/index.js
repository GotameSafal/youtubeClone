import RelatedVideo from "@/components/RelatedVideo";
import {
  Stack,
  AspectRatio,
  Box,
  Text,
  HStack,
  Circle,
  Heading,
} from "@chakra-ui/react";
import {
  useRelatedVideoQuery,
  useVideoDetailsQuery,
} from "@/Redux/features/youtubApi";
import { useRouter } from "next/router";
import Image from "next/image";
import { AiFillDislike, AiFillLike } from "../../utils/fileIcon";

const Stream = () => {
  const router = useRouter();
  const { v } = router.query;
  const { data, isLoading, error } = useRelatedVideoQuery(v);
  const obj = useVideoDetailsQuery(v);
  const userdetails = obj.data;
  return (
    <Stack h="calc(100vh - 80px)" bg="rgb(15, 15, 15)">
      <Stack
        direction={{ base: "column", lg: "row" }}
        h="100%"
        w={{ base: "full", lg: "80vw" }}
        mx="auto"
        overflowY="auto"
        spacing={2}
      >
        <Stack w="full" h="100%">
          <AspectRatio
            w={{ base: "100%", lg: "100%" }}
            h={{ base: "500px", lg: "400px" }}
            ratio={1}
          >
            <iframe
              title="naruto"
              src={`https://www.youtube.com/embed/${v}`}
              allowFullScreen
            />
          </AspectRatio>
          {userdetails && (
            <>
              <Stack spacing={2} direction="row">
                <Circle m={2} cursor={'pointer'}>
                  <Image
                    src={userdetails.author?.avatar[0]?.url}
                    alt="channel.logo"
                    width={48}
                    height={48}
                    style={{ borderRadius: "50px" }}
                  />
                </Circle>
                <Stack width="100%" justify="space-between" direction="row">
                  <HStack spacing={8}>
                    <Box>
                      <Heading w={70} size="sm">
                        {userdetails.author?.title}
                      </Heading>
                      <Text fontSize="sm">
                        {userdetails.author?.stats?.subscribersText}
                      </Text>
                    </Box>
                    <Heading
                      size="sm"
                      rounded="20px"
                      bg="white"
                      color="red"
                      px={4}
                      py={2}
                      noOfLines={1}
                      cursor='pointer'
                    >
                      Subscribe
                    </Heading>
                  </HStack>
                  <HStack>
                    <Circle cursor="pointer" bg="#272727" p={2}>
                      <AiFillLike size={20} />
                    </Circle>
                    <Circle cursor="pointer" bg="#272727" p={2}>
                      <AiFillDislike size={20} />
                    </Circle>
                  </HStack>
                </Stack>
              </Stack>
              <Stack w="100%" bg="#272727" p={3} rounded={4}>
                <HStack spacing={5}>
                  <Text>{`${userdetails?.stats?.views} views`}</Text>
                  <Text>{`${userdetails.publishedDate}`}</Text>
                </HStack>
                <Text noOfLines={4}>{userdetails?.description}</Text>
              </Stack>
            </>
          )}
        </Stack>
        <Stack w={{ base: "full", lg: "700px" }} h="100%">
          {error && <h1>Something went wrong</h1>}
          {isLoading && <h1>Loading...</h1>}
          {data &&
            data?.contents.map((elem) => {
              return (
                <RelatedVideo
                  key={elem.video?.videoId}
                  title={elem.video?.title}
                  channelName={elem.video?.author?.title}
                  upload={elem.vide?.publishedTimeText}
                  videoLength={elem.video?.lengthSeconds}
                  videoId={elem.video?.videoId}
                  imgSrc={elem.video?.thumbnails[0]?.url}
                  views={elem.video?.views}
                />
              );
            })}
        </Stack>
      </Stack>
    </Stack>
  );
};
export default Stream;
