import React, { useState, useEffect } from "react";

const StoryContainer = () => {
    const [storyIds, setStoryIds] = useState([]);
    const [stories, setStories] = useState([]);
    useEffect(() => {
      fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
        .then((res) => res.json())
        .then((data) => setStoryIds(data));
      const promises = storyIds.splice(0, 20).map((storyId) => {
        return fetch(
          `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
        ).then((res) => res.json());
      });
      console.log(promises);
      Promise.all(promises).then((data) => {
        console.log(data);
        setStories(data);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <h1>Story List</h1>;
  };
  export default StoryContainer;
  
  
  
  
  
  
  
  
  
  
  
  
  