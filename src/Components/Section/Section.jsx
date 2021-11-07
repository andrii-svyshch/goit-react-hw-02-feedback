import s from './Section.module.css';

export default function Section({ title, children }) {
  return (
    <section className={s.feedback}>
      <h2 className="feedback__title">{title}</h2>
      {children}
    </section>
  );
}
