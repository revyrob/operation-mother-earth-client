function QuestionSingle({ question }) {
  return (
    <div className="single">
      {question && (
        <>
          <p className="joke__question">{question.question}</p>
          <p className="joke__answer">{question.answer}</p>
          {/* <img className="joke__image" src={question.image} alt={question.question} /> */}
        </>
      )}
    </div>
  );
}
export default QuestionSingle;
