import RelatedVideo from "@/components/RelatedVideo"
import {useGetVideosQuery} from "../../Redux/features/youtubApi"
import { useSelector } from "react-redux"
import fetchSideData from "@/Redux/features/fetchSideData"
const Find = () => {
    const srchTxt = useSelector(state=>state.fetchSideData)
    const {data, isLoading, error} =  useGetVideosQuery()
  return (
    <Stack h="calc(100vh - 80px)" bg="rgb(15, 15, 15)">
        {data && data.contents.map(elem=>{
            return(
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
            )
        })}

    </Stack>
  )
}

export default Find