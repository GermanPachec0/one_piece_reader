import { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import './App.css';

function App() {
    const [chapters, setChapters] = useState([]);
    const [chapter, setChapter] = useState({ pages: [] });
    const [selectedOption, setSelectedOption] = useState();

    const fetchChapters = async () => {
            try {
                const response = await axios.get('http://localhost:1234/chapters');
                if (response.data) {
                    setChapters(response.data);

                }
            } catch (error) {
                console.error('Error fetching chapters:', error);
            }
        };
 
    const fetchChapterDetails = async (chapterId) => {
        try {
            const response = await axios.get(`http://localhost:1234/chapter_details/${chapterId}`);
            if (response.data) {
                setChapter(response.data);
            }
        } catch (error) {
            console.error('Error fetching chapter details:', error);
        }
    };

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
        fetchChapterDetails(event.target.value);
    };

    useEffect(() =>{fetchChapters()},[])

    return (
        <div>
            <div className="select-container">
                <label htmlFor="chapter-select">Select a chapter:   </label>
                <option defaultValue='01'></option>
                <select
                    id="chapter-select"
                    value={selectedOption}
                    onChange={handleSelectChange}
                >
                    {chapters.map((option) => (
                        <option key={option.text} value={option.value}>
                            {option.text}
                        </option>
                    ))}
                </select>
            </div>
            <br></br>
            <Carousel 
                showThumbs={true}
                showStatus={true}
            >
                {chapter.pages.map((page) => (
                    <div key={page.page}>
                        <img src={page.img} alt={`Page ${page.value}`} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default App;
