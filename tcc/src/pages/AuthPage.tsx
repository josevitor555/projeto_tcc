// Componentes do Shadcn
// import { Button } from "@/components/ui/button";

// Estilos do Componente PixelLogin
import styles from "../styles/AuthPage.module.css";
console.log(styles);

// Componente
const PixelLogin = () => {
    return (
        <div className={styles['container-bg']}>
            <div className={styles['pixel-card']}>
                <h2 className={styles['pixel-title']}>Cadastrar-se</h2>

                <div className={styles['input-group']}>
                    <label className={styles['pixel-label']}>Nome do participante </label>
                    <input type="text" className={styles['pixel-input']} placeholder="Digite seu nome..." />
                </div>

                <div className={styles['input-group']}>
                    <label className={styles['pixel-label']}>Senha</label>
                    <input type="password" className={styles['pixel-input']} placeholder="Cria uma Senha" />
                </div>

                <div className={styles['input-group']}>
                    <label className={styles['pixel-label']}>Matrícula (Opcional) </label>
                    <input type="text" className={styles['pixel-input']} />
                </div>

                <div className={styles['input-group']}>
                    <label className={styles['pixel-label']}>Nome da Sala </label>
                    <input type="text" className={styles['pixel-input']} />
                </div>

                {/* Salas Disponpiveis */}
                <div className={styles['input-group']}>
                    <label className={styles['pixel-label']}>Código da Sala</label>
                    <select className={styles['pixel-input']}>
                        <option value="">Selecione uma sala</option>
                        <option value="SALA-01">SALA-01</option>
                        <option value="SALA-02">SALA-02</option>
                        <option value="SALA-03">SALA-03</option>
                        <option value="SALA-04">SALA-04</option>
                        <option value="SALA-05">SALA-05</option>
                        <option value="SALA-06">SALA-06</option>
                        <option value="SALA-07">SALA-07</option>
                    </select>
                </div>

                <button className={styles['pixel-button']}>
                    Próxima Etapa
                </button>

                <p className={styles['pixel-footer']}>v 1.0 - Paleta: Hora de Aventura</p>
            </div>
        </div>
    );
};

export default PixelLogin;
