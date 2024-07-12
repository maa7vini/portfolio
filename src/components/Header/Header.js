import React from "react";

import styles from "./Header.module.css"
import Foto_Perfil from '../../assets/Group 5.png'
import Git_Hub from '../../assets/GitHub.svg'
import Html from '../../assets/HTML.svg'
import Css from '../../assets/CSS.svg'
import Javascript from '../../assets/JavaScript.svg'
import ReactJS from '../../assets/React.svg'
import Node from '../../assets/Node.js.svg'

function Header(){
    return(
        <div className={styles.header}>

            <img src={Foto_Perfil} alt="Foto de Perfil"/>

            <h3 className={styles.txt}>
                Hello World! Meu nome é <span className={styles.nome}> Matheus Vinicius </span> e sou
            </h3>

            <h1>
                Desenvolvedor Web 
            </h1>

            <p className={styles.paragrafo}>
                Transformo necessidades em aplicações reais, envolventes e funcionais. Desenvolvo sistemas 
                através da <br></br> minha paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes 
                para desafios complexos.
            </p>

            <div className={styles.icones_container}>

                <div className={styles.icone_div}>

                    <img src={Git_Hub} alt="Icone"/>

                    <p>GitHub</p>

                </div>

                <div className={styles.icone_div}>

                    <img src={Html} alt="Icone"/>

                    <p>HTML</p>

                </div>

                <div className={styles.icone_div}>

                    <img src={Css} alt="Icone"/>

                    <p>CSS</p>

                </div>

                <div className={styles.icone_div}>

                    <img src={Javascript} alt="Icone"/>

                    <p>Javascript</p>

                </div>

                <div className={styles.icone_div}>

                    <img src={ReactJS} alt="Icone"/>

                    <p>React</p>

                </div>

                <div className={styles.icone_div}>

                    <img src={Node} alt="Icone"/>

                    <p>Node</p>

                </div>

            </div>

        </div>
    )
}

export default Header