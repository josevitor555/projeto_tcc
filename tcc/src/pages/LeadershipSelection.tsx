// import React from 'react';
import styles from '../styles/LeadershipSelection.module.css';

const participants = [
    { name: 'João da Silva', id: '23435453', votes: '1/5', active: true },
    { name: 'Maria Eduarda', id: '56788976', votes: '4/5', active: false },
    { name: 'Maria Helena', id: '14685453', votes: '0/5', active: true },
    { name: 'David Pereira', id: '14594913', votes: '0/5', active: true },
    { name: 'João Maria', id: '14933553', votes: '0/5', active: true },
];

const LeadershipSelection = () => {
    return (
        <div className={styles['leadership-screen']}>
            <h1 className={styles['main-title']}>Quem Vai Ser o Líder ?</h1>

            <div className={styles['pixel-card-container']}>
                <div className={styles['card-header']}>
                    <div className={styles['header-left']}>
                        <h2>Participantes do Grupo</h2>
                        <span>SALA-01</span>
                    </div>
                    <span className={styles['group-name']}>Grupo kepler</span>
                </div>

                <div className={styles['participants-list']}>
                    {participants.map((person, index) => (
                        <div
                            key={index}
                            className={`${styles['participant-row']} ${person.active ? styles['row-active'] : styles['row-inactive']}`}
                        >
                            <div className={styles['person-info']}>
                                <span className={styles['person-name']}>{person.name}</span>
                                <span className={styles['person-id']}>ID: {person.id}</span>
                            </div>

                            <div className={styles['vote-count']}>{person.votes}</div>

                            {/* Corrigido: styles.pixel-btn-leader não funciona, use colchetes */}
                            <button className={`${styles['pixel-btn-leader']} ${!person.active ? styles['btn-selected'] : ''}`}>
                                VOTAR
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LeadershipSelection;