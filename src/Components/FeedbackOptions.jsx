export default function FeedbackOptions({
  options,
  onLeaveFeedback,
}) {
  return (
    <>
      {options.map(option => (
        <button
          type="button"
          name={option}
          className="feedback__button"
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </>
  );
}
