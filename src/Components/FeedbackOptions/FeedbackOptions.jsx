import shortid from 'shortid';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map(option => (
        <button
          type="button"
          name={option}
          className={s.button}
          onClick={onLeaveFeedback}
          key={shortid.generate()}
        >
          {option}
        </button>
      ))}
    </>
  );
}
