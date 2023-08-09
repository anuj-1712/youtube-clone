import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Searchcard from "../components/Searchcard";
import loader from "../assets/giphy-unscreen.gif";
import { Context } from "../ContextApi/contextApi";
import { fetchDataFromApi } from "../api/Api";

export default function SearchResultPage() {
  const { searchQuery } = useParams();
  const { setLoading, loading, searchResults, setSearchResults } =
    useContext(Context);

  useEffect(() => {
    fetchSearchResults();
  }, [searchQuery]);

  const fetchSearchResults = () => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${searchQuery}`).then((res) => {
      console.log(res["data"]);
      setSearchResults(res["data"]?.contents);
      setLoading(false);
    });
  };
  return (
    <>
      <section className="flex flex-col gap-8 my-14 sm:mx-8 mx-4">
        {loading ? (
          <img
            src={loader}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-24"
          />
        ) : (
          searchResults?.map((item, index) => {
            return (
              <Searchcard
                key={index}
                id={item?.video?.videoId}
                thumbnail={item?.video?.thumbnails[0]?.url}
                title={item?.video?.title}
                channelName={item?.video?.author?.title}
                channelLogo={item?.video?.author?.avatar[0]?.url}
                views={item?.video?.stats?.views}
                publishedTime={item?.video?.publishedTimeText}
                length={item?.video?.lengthSeconds}
                descSnippet={item?.video?.descriptionSnippet}
              />
            );
          })
        )}
      </section>
    </>
  );
}
