import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");
  const [limit, setLimit] = useState(10);
  const navigate = useNavigate();

  const handleStart = () => {
    if (difficulty && category && limit) {
      navigate("/quiz", {state: { difficulty,category, limit } });
    } else {
      alert("Please select category and difficulty");
    }
  };

  return (
    <div className="home-container">
      <h1>Select Quiz Options</h1>
      <label>
        Difficulty:
        <select 
                  value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="">Select</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>
      <br />
      
      <label>
        Category:
        <select
                  value={category} onChange={(e) => setCategory(e.target.value)} >
          <option value="">Select</option>
          <option value="linux">Linux</option>
          <option value="react">React</option>
          <option value="nodeJS">Node.js</option>
          <option value="laravel">Laravel</option>
        </select>
      </label>
      <br/>
      <label>
        Limit:
        <input max="10" min="1" type="number" 
               value={limit} onChange={(e) => setLimit(e.target.value)}/>
      </label>
      <br/>
      <button onClick={handleStart}>Start Quiz</button>
    </div>
  );
};

export default Home;