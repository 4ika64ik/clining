import s from './sendtwoform.module.scss'
import Form from '../../form/form';

function SendTwoForm() {
  return (
          <section className={s.sendform} id='sendt'>
            <div className={s.sendform__content}>
              <div className={s.sendform__container}>
                <h2 className={s.sendform__title}>Остались вопросы?</h2>
                <p className={s.sendform__info}>Получите консультацию бессплатно</p>
              </div>
              <Form butt={false}/>
            </div>
          </section>
  );
}

export default SendTwoForm;