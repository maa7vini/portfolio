import styles from './Contato.module.css'

import Linkedin_Logo from '../../assets/LinkedinLogo.svg'
import Github from '../../assets/GithubLogo.svg'
import Arrow from '../../assets/ArrowUpRight.svg'

function Contato (){
    return(
        <section className={styles.container}>
            <h3>Contato</h3>

            <h2>Gostou do meu trabalho?</h2>

            <span>Entre em contato ou acompanhe as minhas redes sociais!</span>

            <div className={styles.links_container}>

                <a href='https://www.linkedin.com/in/maa7vini/' target='_blank' rel='noreferrer'>

                    <div className={styles.link_div}>

                        <div className={styles.link_icon}>

                            <img src={Linkedin_Logo} alt='Logo'/>

                            <p> Linkedin </p>

                        </div>

                        <img src={Arrow} alt='Icone Seta' className={styles.seta}/>

                    </div>

                </a>

                <a href='https://github.com/maa7vini' target='_blank' rel='noreferrer'>

                    <div className={styles.link_div}>

                        <div className={styles.link_icon}>

                            <img src={Github} alt='Logo'/>

                            <p> GitHub </p>

                        </div>

                        <img src={Arrow} alt='Icone Seta' className={styles.seta}/>

                    </div>

                </a>

            </div>
        </section>
    )
}

export default Contato