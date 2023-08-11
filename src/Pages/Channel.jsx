import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../ContextApi/contextApi";
import Navbar from "../components/Navbar";
import { fetchDataFromApi } from "../api/Api";
import ChannelVideoCard from "../components/ChannelVideoCard";
import loader from "../assets/giphy-unscreen.gif"

export default function Channel() {
  const { channelId } = useParams();
  const {
    setLoading,
    loading,
    channelVideos,
    setChannelVideos,
    channelDetails,
    setChannelDetails,
    subscribed,
    setSubscribed,
  } = useContext(Context);

  const fetchChannelVideos = async () => {
    setLoading(true);
    fetchDataFromApi(`channel/videos/?id=${channelId}`)
      .then(({ data }) => {
        console.log(data["contents"]);
        setChannelVideos(data["contents"]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const fetchChannelDetails = async () => {
    setLoading(true);
    fetchDataFromApi(`channel/details/?id=${channelId}`)
      .then(({ data }) => {
        console.log(data);
        setChannelDetails(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const toggleSubscribeBtn = () => {
    setSubscribed(!subscribed);
  };

  useEffect(() => {
    fetchChannelVideos();
    fetchChannelDetails();
  }, [channelId]);

  return (
    <>
      {loading ? (
        <img src={loader} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-24"/>
      ) : (
        <main className="flex gap-4 w-screen mt-20 px-4">
          <section className="w-0 md:w-1/12 xl:w-[6%]">
            <Navbar />
          </section>
          <section className="flex flex-col w-full md:w-11/12 gap-8">
            {/* banner */}
            <img
              src={`${channelDetails?.banner?.desktop[0]?.url}`}
              className="w-full max-h-[350px]"
            />
            {/* channel details */}
            <div className="w-full flex flex-col sm:flex-row gap-4 sm:justify-evenly items-center">
              <div className="flex flex-col sm:flex-row gap-8 items-center">
                <img
                  src={channelDetails?.avatar[0]?.url}
                  className="h-20 w-20 rounded-[50%]"
                />
                <div className="flex flex-col gap-2 items-center sm:items-start">
                  <p className="text-white text-xl">{channelDetails?.title}</p>
                  <div className="flex items-center gap-4">
                    <p className="text-[#aaa] text-sm">
                      {channelDetails?.username}
                    </p>
                    <p className="text-[#aaa] text-sm">
                      {channelDetails?.stats?.subscribersText
                        ? channelDetails?.stats?.subscribersText
                        : "1.3m Subscribers"}
                    </p>
                    <p className="text-[#aaa] text-sm">
                      {channelDetails?.stats?.videosText
                        ? channelDetails?.stats?.videosText
                        : ""}
                    </p>
                  </div>
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
            {/* channel videos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {channelVideos?.map((item, index) => {
                return (
                  <ChannelVideoCard
                    key={index}
                    id={item?.video?.videoId}
                    thumbnail={item?.video?.thumbnails[0]?.url}
                    channelLogo={item?.video?.author?.avatar[0]?.url}
                    views={item?.video?.stats?.views}
                    title={item?.video?.title}
                    length={item?.video?.lengthSeconds}
                    publishedTime={item?.video?.publishedTimeText}
                  />
                );
              })}
            </div>
          </section>
        </main>
      )}
    </>
  );
}
