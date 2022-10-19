import scss from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className={scss.container}>
        <p>&copy; 2022 Stanislav Zavadskyi, Inc. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
