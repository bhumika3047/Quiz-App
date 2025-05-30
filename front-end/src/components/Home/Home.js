import { useEffect, useReducer } from "react";
import axios from "axios";

import Header from "../Layout/Header";
import Main from "./Main";
import Loader from "../Layout/Loader";
import Error from "../Common/Error";
import StartScreen from "./StartScreen";
import Question from "../Question";
import NextButton from "../Common/NextButton";
import Progress from "../Common/Progress";
import FinishScreen from "../Common/FinishScreen";
import Footer from "../Layout/Footer";
import Timer from "./Timer";
import "../../index.css";

import myQuestionData from "../../mockData/questionList.json";
import { initialState, reducer } from "../../constants/reducer";

export default function Home() {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  useEffect(function () {
    // Mock data for question list
    const getQuestionListData = myQuestionData;

    dispatch({
      type: "dataReceived",
      payload: getQuestionListData.questions,
    });

    /*call question list api */
    // axios.get('http://localhost:4001/questions/list')
    //   .then(response => {
    //     console.log("login api response", response.data.list);
    //     dispatch({
    //       type: "dataReceived",
    //       payload: response.data.list,
    //     })
    //     // navigate("/home");
    //   })
    //   .catch(error => {
    //     dispatch({ type: "dataFailed" })
    //     console.error("Error sending data: ", error);
    //   });
  }, []);

  return (
    <div className="wrapper">
      <div className="app">
        <div className="headerWrapper">
          <Header />

          <Main>
            {status === "loading" && <Loader />}
            {status === "error" && <Error />}
            {status === "ready" && (
              <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
            )}{" "}
            {status === "active" && (
              <>
                <Progress
                  index={index}
                  numQuestions={numQuestions}
                  points={points}
                  maxPossiblePoints={maxPossiblePoints}
                  answer={answer}
                />
                <Question
                  question={questions[index]}
                  dispatch={dispatch}
                  answer={answer}
                />
                <Footer>
                  <Timer
                    dispatch={dispatch}
                    secondsRemaining={secondsRemaining}
                  />
                  <NextButton
                    dispatch={dispatch}
                    answer={answer}
                    numQuestions={numQuestions}
                    index={index}
                  />
                </Footer>
              </>
            )}
            {status === "finished" && (
              <FinishScreen
                points={points}
                maxPossiblePoints={maxPossiblePoints}
                highscore={highscore}
                dispatch={dispatch}
              />
            )}
          </Main>
        </div>
      </div>
    </div>
  );
}
