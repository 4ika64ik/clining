import s from './sotr.module.scss'

function Sotr() {
  return (
          <section className={s.sotr} id='sotr'>
            <div className={s.sotr__container}>
              <h2 className={s.sotr__title}>Что предоставляется нашим сотрудникам</h2>
              <p className={s.sotr__info}>99% наших сотрудников довольны работой</p>

              <div className={s.sotr__blockinfo}>
                <div className={s.sotr__block}>
                  <div className={s.sotr__item}>Помощь при оформление документов</div>
                  <div className={s.sotr__item}>Помощь при переезде и по прибытию</div>
                </div>
                <div className={s.sotr__block}>
                  <div className={s.sotr__item}>Русскоговорящий коллектив и куратор.</div>
                  <div className={s.sotr__item}>Медецинская страховка на роботе за наш счёт</div>
                </div>
                <div className={s.sotr__block}>
                  <div className={s.sotr__item}>Комфортоный график  который Вы подбираете под себя</div>
                  <div className={s.sotr__item}>Бесплатное жильё</div>
                </div>
                <div className={s.sotr__block}>
                  <div className={s.sotr__item}>Связь 24/7 по любым вопросам</div>
                  <div className={s.sotr__item}>Дружественный колектив</div>
                </div>
              </div>
            </div>
          </section>
  );
}

export default Sotr;