import { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";

function App() {
  const [selectedOption, setSelectedOption] = useState();

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    fetchChapterDetails(event.target.value);
  };

  return (
    <div>
      <div className="select-container">
        <label htmlFor="chapter-select">Select a chapter: </label>
        <option defaultValue="01"></option>
        <select
          id="chapter-select"
          value={selectedOption}
          onChange={handleSelectChange}
        ></select>
      </div>
      <br></br>
      <Carousel showThumbs={true} showStatus={true}>
        <div>
          <img src="https://uploads.mangadex.org/data/3303dd03ac8d27452cce3f2a882e94b2/1-f7a76de10d346de7ba01786762ebbedc666b412ad0d4b73baa330a2a392dbcdd.png" />
        </div>
      </Carousel>
    </div>
  );
}

export default App;
