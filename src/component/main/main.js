import s from './main.module.scss'
import clin from '../../image/car/clin1.jpg'
import Etap from './etap/etap';
import Sotr from './sotr/sotr';
import SendForm from './sendform/sendform';
import SendTwoForm from './sendtwoform/sendtwoform';
import Abaut from './abaut-us/abaut-us';

function Main() {
  return (
      <main className={s.main}>
        <div className={s.main__container}>
          <section className={s.umov} id='usov'>
            <img src={clin} className={s.umov__ride} alt='clean'/>
            <div className={s.umov__content}>
              <h2 className={s.umov__title}>УСЛОВИЯ РАБОТЫ</h2>
              <p className={s.umov__whyme}>Почему именно мы:</p>
              <div className={s.umov__info}>
                <p className={s.umov__item}>Заработная плата: 2600- 2900 € в месяц (нетто)</p>
                <p className={s.umov__item}>Легальное трудоустройство, даже без знания немецкого.</p>
              </div>
              <div className={s.umov__info}>
                <p className={s.umov__item}>Своевременные выплаты, дважды в месяц </p>
                <p className={s.umov__item}>Оплачиваем жильё </p>
              </div>
              <a href='#sotr' className={s.vigoda}>Выгодные условия для сотрудников</a>
            </div>
          </section>
        </div>
        <Etap />
        <Sotr />
        <SendForm />
        <Abaut />
        <SendTwoForm />
      </main>
  );
}

export default Main;