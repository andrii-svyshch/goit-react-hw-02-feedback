export default function Section({ title, children }) {
  return (
    <section className="feedback">
      <h2 className="feedback__title">{title}</h2>
      {children}
    </section>
  );
}
