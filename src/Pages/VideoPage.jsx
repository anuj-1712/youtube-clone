import React, { useEffect, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../ContextApi/contextApi";
import { fetchDataFromApi } from "../api/Api";
import { BiLike, BiSolidLike, BiDislike, BiSolidDislike } from "react-icons/bi";
import { PiListPlusFill } from "react-icons/pi";
import { TiTick } from "react-icons/ti";
import ReactPlayer from "react-player";
import { IconContext } from "react-icons";
import SuggestedVideoCard from "../components/SuggestedVideoCard";
import loader from "../assets/giphy-unscreen.gif";
import Comments from "../components/Comments";

export default function VideoDetails() {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [video, setVideo] = useState();
  const [relatedVideo, setRelatedVideo] = useState("");
  const {
    setLoading,
    loading,
    subscribed,
    setSubscribed,
    comments,
    setComments,
  } = useContext(Context);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchVideoDetails();
    fetchRelatedVideoDetails();
    fetchCommentsDetails()
  }, [id]);

  const fetchVideoDetails = () => {
    setLoading(true);
    fetchDataFromApi(`video/details/?id=${id}`)
      .then(({ data }) => {
        console.log(data);
        setVideo(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const fetchRelatedVideoDetails = () => {
    setLoading(true);
    fetchDataFromApi(`video/related-contents/?id=${id}`)
      .then(({ data }) => {
        setRelatedVideo(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const fetchCommentsDetails = () => {
    setLoading(true);
    fetchDataFromApi(`video/comments/?id=${id}`)
      .then(({ data }) => {
        setComments(data["comments"]);
        console.log(data["comments"]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const toggleLikeBtn = () => {
    setLiked(!liked);
  };

  const toggleDislikeBtn = () => {
    setDisliked(!disliked);
  };

  const toggleSaveBtn = () => {
    setSaved(!saved);
  };

  const toggleSubscribeBtn = () => {
    setSubscribed(!subscribed);
  };

  const toggleDescBtn = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <main className="flex lg:flex-row flex-col w-full px-2 xl:pl-20 xl:pr-6 gap-6 mt-14">
      {/* video details section */}
      {loading ? (
        <img
          src={loader}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-24"
        />
      ) : (
        <>
          <section className="flex flex-col gap-2 w-full lg:w-9/12">
            <div className="w-full h-[30vh] sm:h-[60vh] xl:h-[75vh] min-h-[300px] max-h-[800px] border-[1px] border-white">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                controls
                width="100%"
                height="100%"
                playing={true}
              />
            </div>
            <h2 className="text-white text-xl font-bold">{video?.title}</h2>

            {/* channel name and buttons area */}
            <div className="flex flex-col md:flex-row gap-4 md:justify-between md:items-center w-full">
              <div className="flex sm:flex-row flex-col items-start sm:items-center gap-4 w-full md:w-[45%]">
                <div className="flex gap-4 items-center">
                  <img
                    src={video?.author?.avatar[0]?.url}
                    className="h-7 w-7 rounded-[50%]"
                  />
                  <div
                    className="flex md:flex-col gap-2 md:gap-0 items-center md:items-start"
                    onClick={() =>
                      navigate(`/channel/${video?.author?.channelId}`)
                    }
                  >
                    <p className="text-white">{video?.author?.title}</p>
                    <p className="text-[#aaa] text-xs">
                      {!video?.author?.stats?.subscribersText
                        ? "1.3M Subscribers"
                        : video?.author?.stats?.subscribersText}
                    </p>
                  </div>
                </div>
                {subscribed ? (
                  <button
                    className="bg-red-600 text-white text-sm font-medium rounded-lg px-2 py-2"
                    onClick={toggleSubscribeBtn}
                  >
                    Subscribed
                  </button>
                ) : (
                  <button
                    className="bg-white text-sm font-medium rounded-lg px-2 py-2"
                    onClick={toggleSubscribeBtn}
                  >
                    Subscribe
                  </button>
                )}
              </div>
              <IconContext.Provider value={{ size: "1.5em", color: "white" }}>
                <div className="flex md:justify-end gap-4 w-full md:w-1/3 pr-4">
                  <div className="flex gap-1 hover:cursor-pointer">
                    {liked ? (
                      <BiSolidLike onClick={toggleLikeBtn} />
                    ) : (
                      <BiLike onClick={toggleLikeBtn} />
                    )}
                    <p className="text-white">
                      {video?.stats?.likes >= 1000 &&
                      video?.stats?.likes < 1000000
                        ? `${Math.round(video?.stats?.likes / 1000)}k`
                        : video?.stats?.likes >= 1000000
                        ? `${Math.round(video?.stats?.likes / 1000000)}M`
                        : `${video?.stats?.likes}`}
                    </p>
                  </div>
                  <div className="hover:cursor-pointer">
                    {disliked ? (
                      <BiSolidDislike onClick={toggleDislikeBtn} />
                    ) : (
                      <BiDislike onClick={toggleDislikeBtn} />
                    )}
                  </div>
                  {saved ? (
                    <div className="flex gap-1 hover:cursor-pointer">
                      <TiTick onClick={toggleSaveBtn} />
                      <p className="text-white">Saved</p>
                    </div>
                  ) : (
                    <div className="flex gap-1 hover:cursor-pointer">
                      <PiListPlusFill onClick={toggleSaveBtn} />
                      <p className="text-white">Save</p>
                    </div>
                  )}
                </div>
              </IconContext.Provider>
            </div>
            <div className="flex flex-col gap-1 w-full bg-[#252525] rounded-xl px-4 py-2 mt-4">
              <div className="flex gap-4">
                <p className="text-white font-medium">
                  {video?.stats?.views >= 1000 && video?.stats?.views < 1000000
                    ? `${Math.round(video?.stats?.views / 1000)}k views`
                    : video?.stats?.views >= 1000000
                    ? `${Math.round(video?.stats?.views / 1000000)}M views`
                    : `${video?.stats?.views} views`}
                </p>
                <p className="text-white font-medium">{video?.publishedDate}</p>
              </div>

              {/* description */}
              <div className="flex flex-wrap">
                {showFullDescription ? (
                  <div>
                    <span className="text-white text-xs sm:text-sm lg:text-[16px]">{`${video?.description}...`}</span>
                    <span
                      className="text-white hover:cursor-pointer"
                      onClick={toggleDescBtn}
                    >
                      less
                    </span>
                  </div>
                ) : (
                  <div>
                    <span className="text-white text-xs sm:text-sm lg:text-[16px]">{`${video?.description.slice(
                      0,
                      200
                    )}...`}</span>
                    <span
                      className="text-white hover:cursor-pointer"
                      onClick={toggleDescBtn}
                    >
                      more
                    </span>
                  </div>
                )}
              </div>
            </div>
            {/* comments section */}
            <div className="flex flex-col gap-3">
              {
                comments?.map((comment,index)=>{
                  return(
                    <Comments key={index} avatar={comment?.author?.avatar[0]?.url} content={comment?.content} publishedTime={comment?.publishedTimeText} user={comment?.author?.title}/>
                  )
                })
              }
            </div>
          </section>

          {/* related videos section */}
          <section className="flex flex-col gap-3 overflow-y-auto no-scroll">
            {!loading &&
              relatedVideo?.contents?.map((item, index) => {
                return (
                  <SuggestedVideoCard
                    key={index}
                    id={item?.video?.videoId}
                    thumbnail={item?.video?.thumbnails[0]?.url}
                    title={item?.video?.title}
                    channelName={item?.video?.author?.title}
                    views={item?.video?.stats?.views}
                    publishedTime={item?.video?.publishedTimeText}
                    length={item?.video?.lengthSeconds}
                  />
                );
              })}
          </section>
        </>
      )}
    </main>
  );
}
