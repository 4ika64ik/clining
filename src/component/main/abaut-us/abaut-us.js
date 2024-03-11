import s from './abaut-us.module.scss';
import './abaut-us.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import klining1 from '../../../image/fact/klining1.jpg';
import klining2 from '../../../image/fact/klining2.jpg';
import klining3 from '../../../image/fact/klining3.jpg';
import klining4 from '../../../image/fact/klining4.jpg';
import klining5 from '../../../image/fact/klining5.jpg';

function Abaut() {

  return (
    <section className={s.abaut}>
      <h2 className={s.abaut__title}>Факты о нашей компании</h2>
      <Carousel swipeable={false}>
        <div>
          <img src={klining1} className={s.foto + ' foto'} alt='clening-h'/>
          <p className={s.abaut__info}>Работаем с 2017 года, за это время мы смогли добиться лучших условий работы для наших сотрудников, 99,8% человек остались довольны нашим сотрудничеством. </p>
        </div>
        <div>
          <img src={klining2} className={s.foto + ' foto'} alt='clening-h'/>
          <p className={s.abaut__info}>Постоянный спрос клиентов. Благодаря регулярному потреблению услуг уборки со стороны клиентов, клининговая компания может обеспечить стабильный поток дохода. </p>
        </div>
        <div>
          <img src={klining3} className={s.foto + ' foto'} alt='clening-h'/>
          <p className={s.abaut__info}>Мы используем только экологические средства. Благодаря чему обеспечиваем безопасность для клиентов и персонала, так же снижая риск аллергий и раздражений. </p>
        </div>
        <div>
          <img src={klining4} className={s.foto + ' foto'} alt='clening-h'/>
          <p className={s.abaut__info}>Наличие всех сертификатов и лицензий на свою деятельность. Включая полное свое соответствие стандартам и профессиональным требованиям. </p>
        </div>
        <div>
          <img src={klining5} className={s.foto + ' foto'} alt='clening-h'/>
          <p className={s.abaut__info}>Широкий спектр услуг. Предлагаем разнообразные услуги уборки, включая не только основное, но специализированную и глубокую уборку, что помогает нашим сотрудникам расширить свои навыки и получить разнообразный опыт. </p>
        </div>
      </Carousel>
    </section>
  );
}

export default Abaut;