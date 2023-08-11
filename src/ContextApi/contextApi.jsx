import React, { useState, useEffect, createContext } from "react";
import { fetchDataFromApi } from "../api/Api";

export const Context = createContext();

export const AppContext = (props) => {
  // states
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState();
  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState("new");
  const [showSideNav, setShowSideNav] = useState(false);
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLogin, setLogin] = useState(false);
  const [subscribers, setSubscribers] = useState([]);
  const [channelDetails, setChannelDetails] = useState();
  const [channelVideos, setChannelVideos] = useState();
  const [subscribed, setSubscribed] = useState(false);
  const [comments, setComments] = useState();

  useEffect(() => {
    fetchSelectedCategoryData(selectedCategories);
  }, [selectedCategories]);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`)
      .then((res) => {
        setData(res["data"]["contents"]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectedCategories,
        setSelectedCategories,
        data,
        showSideNav,
        setShowSideNav,
        query,
        setQuery,
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        isLogin,
        setLogin,
        subscribers,
        setSubscribers,
        channelVideos,
        setChannelVideos,
        channelDetails,
        setChannelDetails,
        subscribed,
        setSubscribed,
        comments,
        setComments,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
