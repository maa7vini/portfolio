import styles from './Projetos.module.css'

import Micale from '../../assets/Micale.png'
import Alumitemper from '../../assets/Alumitemper.png'
import Premier_Fibra from '../../assets/Premier_Fibra.png'
import Stefania_Allodi from '../../assets/Stefania_Allodi.png'
import Bruno_Orefice from '../../assets/Bruno_Orefice.png'
import Sublime_Yoga from '../../assets/Sublime_Yoga.png'
import Ls_Digital from '../../assets/Ls_Digital.png'
import Edson_Noivas from '../../assets/Edson_Noivas.png'
import Plenitec_Desentupidora from '../../assets/Desentupidora_Plenitec.jpg'

function Projetos(){
    return(
        <section className={styles.container}>
            <h3>Meu Trabalho</h3>

            <h2>Veja os projetos em destaque</h2>

            <div className={styles.projetos_container}>

                <div className={styles.projeto_div}>

                    <img src={Alumitemper} alt='Imagem do Projeto'/>

                    <a href='https://alumitemper.com.br/' target='_blank' rel='noreferrer'>Alumitemper</a>

                    <p>Site da Alumitemper, empresa especializada em esquadrias de alumínio.</p>

                </div>

                <div className={styles.projeto_div}>

                    <img src={Micale} alt='Imagem do Projeto'/>

                    <a href='https://micale.com.br/' target='_blank' rel='noreferrer'>Micale</a>

                    <p>Site da Micale Representações, empresa especializada em consórcios.</p>

                </div>

                <div className={styles.projeto_div}>

                    <img src={Premier_Fibra} alt='Imagem do Projeto'/>

                    <a href='https://premierfibra.com.br/' target='_blank' rel='noreferrer'>Premier Fibra</a>

                    <p>Site da Premier Fibra, empresa especializada em fibra óptica.</p>

                </div>

                <div className={styles.projeto_div}>

                    <img src={Stefania_Allodi} alt='Imagem do Projeto'/>

                    <a href='https://stefaniaallodi.com.br/' target='_blank' rel='noreferrer'>Stefania Allodi</a>

                    <p>Site da Stefania Allodi, empresa especializada em perfumes.</p>

                </div>

                <div className={styles.projeto_div}>

                    <img src={Bruno_Orefice} alt='Imagem do Projeto'/>

                    <a href='https://brunooreficepsi.com.br/' target='_blank' rel='noreferrer'>Psicólogo Bruno Orefice</a>

                    <p>Site do Bruno Orefice, psicólogo com especialização em Psicologia Junguiana.</p>

                </div>

                <div className={styles.projeto_div}>

                    <img src={Sublime_Yoga} alt='Imagem do Projeto'/>

                    <a href='https://sublimeyoga.com.br/' target='_blank' rel='noreferrer'>Sublime Yoga</a>

                    <p>Site da Sublime Yoga, empresa especializada em aulas de yoga.</p>

                </div>

                <div className={styles.projeto_div}>

                    <img src={Ls_Digital} alt='Imagem do Projeto'/>

                    <a href='https://lsdigital.demodigitalnerd.com.br/' target='_blank' rel='noreferrer'>LS Digital</a>

                    <p>Site da LS Digital, empresa especializada na personalização de brindes e camisetas.</p>

                </div>

                <div className={styles.projeto_div}>

                    <img src={Edson_Noivas} alt='Imagem do Projeto'/>

                    <a href='https://edsonnoivas.com.br/' target='_blank' rel='noreferrer'>Edson Noivas</a>

                    <p>Site da Edson Noivas, empresa especializada em aluguel de trajes de festa.</p>

                </div>

                <div className={styles.projeto_div}>

                    <img src={Bill_Nova_Odessa} alt='Imagem do Projeto'/>

                    <a href='https://plenitecdesentupidora.com.br/' target='_blank' rel='noreferrer'>Plenitec Desentupidora</a>

                    <p>Site da Plenitec, empresa especializada em serviços de desentupimento.</p>

                </div>

            </div>
        </section>
    )
}

export default Projetos
