import s from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.first}>Copyright © 2017. All Rights Reserved.</div>
      <a href='https://yandex.ru/maps/177/berlin/house/ZUoYdQBgSkYBQFtofXlydXxqYA==/?ll=13.370637%2C52.534175&source=serp_navig&z=17.63' className={s.adres}>Адресс: Scharnhorststraße 24, 10115 Berlin, Germany</a>
    </footer>
  );
};

export default Footer;
