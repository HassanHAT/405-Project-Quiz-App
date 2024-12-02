import { useEffect, useState } from "react"

const Quiz = () =>{
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});

    useEffect(() => {
        const fetchQuestions = async () => {
            const response = await fetch(

            );
            const data = await response.json();
            setQuestions(data);
        }
    }

    )
};


export default Quiz;