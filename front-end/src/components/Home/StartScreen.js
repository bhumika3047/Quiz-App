function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to Quiz!</h2>
      <h3>
        <div>Total {numQuestions} questions</div>
        <br />
        <div>You have 15 minutes to complete all 15 questions</div>
      </h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
