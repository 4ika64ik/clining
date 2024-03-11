import s from './etap.module.scss'

function Etap() {
  return (
          <section className={s.etap} id='etap'>
            <div className={s.etap__container}>
              <h2 className={s.etap__title}>Этапы сотрудничества с нами</h2>
              <div className={s.etap__term}>
                <p className={s.etap_num}><span className={s.etap_number}>01</span> Заявка</p>
                <p className={s.etap__info}>Оставьте заявку на сайте по кнопке</p>
              </div>
              <div className={s.etap__term}>
                <p className={s.etap_num}><span className={s.etap_number}>02</span> Консультация</p>
                <p className={s.etap__info}>С Вами  связываются наши специалисты и бесплатно проводят Вам консультацию</p>
              </div>
              <div className={s.etap__term}>
                <p className={s.etap_num}><span className={s.etap_number}>03</span> Договорённости</p>
                <p className={s.etap__info}>После консультации Вы принимаете решение, а наши сотрудники в короткий срок готовлят все необходимые документы</p>
              </div>
              <div className={s.etap__term}>
                <p className={s.etap_num}><span className={s.etap_number}>04</span> Переезд и начало работы</p>
                <p className={s.etap__info}>С Вами на связи 24/7 наши помощники, Вас заселяют и полностью ведут Вас помогая со всеми вопросами при переезде. </p>
              </div>
            </div>
          </section>
  );
}

export default Etap;