import Logo from "./Logo"
import Menu from "./Menu"
import Button from "./Button"
import style from "./navbar.module.css"
const Navbar=()=>{
        return(
           <section id={style.main}>
            <article>
                <div className={style.Logo}><Logo/></div>
                <div className={style.Menu}><Menu/></div>
                <div className={style.Button}><Button/></div>
            </article>
           </section>
        )
}
export default Navbar