import scss from './Section.module.scss';

const Section = ({ children }) => {
  return (
    <section className={scss.section}>
      <div className={scss.container}>{children}</div>
    </section>
  );
};

export default Section;
