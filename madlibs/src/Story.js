import React, { useState } from "react";
import NewStoryForm from "./NewStoryForm";
import { v4 as uuid } from "uuid";
import GenerateStory from "./GenerateStory";

function Story() {
  const [stories, setStories] = useState({});
  const [start, setStart] = useState(true);
  const addStory = (newStory) => {
    setStories({ ...newStory, id: uuid() });
    setStart(false);
  };
  const resetStory = () => {
    setStories({});
    setStart(true);
  };

  return (
    <div>
      <h1>Madlibs</h1>
      {start ? 
        <NewStoryForm addStory={addStory} />
       : 
        <GenerateStory
          resetStory={resetStory}
          key={stories.id}
          noun={stories.noun}
          noun2={stories.noun2}
          adjective={stories.adjective}
          color={stories.color}
        />
      }
    </div>
  );
}

export default Story;
