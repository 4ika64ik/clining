import s from './menu.module.scss'

function Menu(props) {
  return (
      <aside className={s.menu__main} id='menu'>
        <a href="#1" onClick={props.handleClick} className={s.menu__info}></a>
          <div className={s.menu}>
            <a href='#umov' className={s.menu__item}>Условия</a>
            <a href='#etap' className={s.menu__item}>Этапы работы</a>
            <a href='#sotr' className={s.menu__item}>Для сотрудников</a>
            <a href='#sendt' className={`${s.menu__item} ${s.menu__item_act}`}>Обратная связь</a>
          </div>
        <a href="#1" onClick={props.handleClick} className={s.menu__info2}></a>
      </aside>
  );
}

export default Menu;