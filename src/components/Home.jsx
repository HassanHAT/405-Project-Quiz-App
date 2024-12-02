import { useState } from "react"

const Home = () =>{
    const [difficulty , setDifficulty] = useState(null);
    const [category , setCategory] = useState(null);
    const [limit , setLimit] = useState(10);


    return(
        <div className="home-container">
            <h1>Create Quiz</h1>
            <h2>Select your quiz options</h2>
            <label>
                Difficulty:
                <select
                value = {difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                >
                    <option value="">Select</option>

                    <option value="easy">Easy</option>
                    
                    <option value="medium">Medium</option>
                    
                    <option value="hard">Hard</option>
                </select>
                <br />
            </label>
        </div>
    );

};

export default Home;
