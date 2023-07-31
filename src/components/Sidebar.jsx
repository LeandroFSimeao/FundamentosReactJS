import style from './Sidebar.module.css';
import {PencilLine} from '@phosphor-icons/react';

export function Sidebar () {
    return(
        <aside className={style.sidebar}>
            <img 
                className={style.cover} 
                src='https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50' 
            />
            <div className={style.profile}>
                <img className={style.avatar} src='https://github.com/LeandroFSimeao.png'></img>

                <strong>Leandro Simeão</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}