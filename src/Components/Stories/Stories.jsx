import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Stories.scss";

import storiesServer from "../../dt/stories.json";

export default function Stories() {
  const [stories, setStories] = useState(storiesServer);
  return (
    <div className="stories-content">
      {stories.map((item) => (
        <div className="stories__item" key={uuidv4()}>
          <div className={item.active}>
            <img src={item.img} alt="#" />
          </div>
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
}
