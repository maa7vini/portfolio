import styles from './Servicos.module.css'

import PC_Desktop from '../../assets/Devices.svg'
import Banco_Dados from '../../assets/HardDrives.svg'

function Servicos(){
    return(
        <section className={styles.container}>
            <h3>Meus Serviços</h3>

            <h2>Como posso ajudar o seu negócio</h2>

            <div className={styles.servicos_container}>

                <div className={styles.servico_div}>

                    <img src={PC_Desktop} alt='Icone'/>

                    <h2> Websites e Aplicativos </h2>

                    <p> Desenvolvimento de interfaces </p>

                </div>

                <div className={styles.servico_div}>

                    <img src={Banco_Dados} alt='Icone'/>

                    <h2> API e Banco de Dados </h2>

                    <p> Criação de serviços do sistema </p>

                </div>

            </div>
        </section>
    )
}

export default Servicos