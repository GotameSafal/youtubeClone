import { Stack, Flex } from "@chakra-ui/react";
import Sidebar from "@/components/Sidebar";
import VideoCard from "@/components/VideoCard";
import { useGetVideosQuery } from "@/Redux/features/youtubApi";
import { useSelector } from "react-redux";
const index = () => {
    const searchData = useSelector((state) => state.fetchSideData);
  const { data, isLoading, error } = useGetVideosQuery(searchData);
  return (
    <Stack h="calc(100vh - 80px)" spacing direction="row" bg="#0f0f0f">
      <Sidebar />
      <Flex
        alignContent={"flex-start"}
        overflowY="auto"
        flexWrap="wrap"
        justify="center"
        w={{ base: "100%", lg: "calc(100% - 250px" }}
        h="100%"
        bg="#0f0f0f"
      >
        {isLoading && <h1>Loading please wait</h1>}
        {error && <h1>Something went wrong try again later</h1>}
        {data &&
          data.contents.map((elem, ind) => {
            return (
              <VideoCard
                key={ind}
                imgSrc={elem.video?.thumbnails[0]?.url}
                title={elem.video?.title}
                channelLogo={elem.video?.author?.avatar[0]?.url}
                channelName={elem.video?.author?.title}
                upload={elem.video?.publishedTimeText}
                videoLength={elem.video?.lengthSeconds}
                views={elem.video?.stats?.views}
                videoId={elem.video?.videoId}
              />
            );
          })}
      </Flex>
    </Stack>
  );
};

export default index;
