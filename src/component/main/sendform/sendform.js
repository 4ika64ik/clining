import s from './sendform.module.scss'
import Form from '../../form/form';

function SendForm() {
  return (
          <section className={s.sendform} id='sendform'>
            <div className={s.sendform__content}>
              <div className={s.sendform__container}>
                <h2 className={s.sendform__title}>Запишись <span className={s.sendform__online}>онлайн</span></h2>
                <p className={s.sendform__info}>Оставьте заявку прямо сейчас и наши специалисты свяжутся с Вами как можно скорее</p>
              </div>
              <Form butt={true}/>
            </div>
          </section>
  );
}

export default SendForm;