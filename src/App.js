import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import chamomile from './chamomile_2.jpg'
import ra from './ra4.jpg'

import styles from './style.css';

class App extends Component {
    render() {
        const herb_tradition_content = `W medycynie tradycyjnej  uchodził za panaceum. Tradycja stosowania rumianku w ziołolecznictwie sięga czasów najdawniejszych. Starożytni Egipcjanie uważali rumianek za dar Ra, boga Słońca i leczyli za jego pomocą oparzenia słoneczne. Dioskurides w „De Materia Medica” (50-70 r.n.e.) zalecał go jako środek na ból brzucha.`
        return (
            <div className={styles['app-container']}>
                <div className={styles['title']}>{this.props.title}</div>
                <div className={styles['herb-card-container']}>
                    <div className={styles['herb-header-container']}>
                        <div className={styles['herb-icon-container']}>
                            <img className={styles['herb-icon']} src={chamomile} alt='chamomile icon'/>
                        </div>
                        <div className={styles['herb-name-container']}>
                            <div className={styles['herb-name-locale-container']}>{'RUMIANEK'}</div>
                            <div className={styles['herb-name-latin-container']}>{'Matricaria chamomilla'}</div>
                        </div>
                    </div>
                    <div className={styles['herb-tradition-container']}>
                        <div className={styles['tradition-icon-container']}>
                            <img className={styles['herb-content-icon']} src={ra} alt='tradition icon'/>
                        </div>
                        <div className={styles['herb-tradition-content-container']}>
                            <div className={styles['herb-tradition-header-container']}>{'Tradycja'}</div>
                            <div className={styles['herb-tradition-content-container']}>{herb_tradition_content}</div>
                        </div>
                    </div>
                    <div className={styles['herb-effects-container']}>
                        <div className={styles['herb-tradition-header-container']}>{'Działanie'}</div>
                        <div className={styles['herb-tradition-content-container']}>
                            <ul>
                                <li>{'Wspomagające trawienie'}</li>
                                <li>{'Przeciwzapalne'}</li>
                                <li>{'Nasenne i uspokajające'}</li>
                                <li>{'Wspomagające gojenie'}</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles['herb-effects-container']}>
                        <div className={styles['herb-tradition-header-container']}>{'Dolegliwości'}</div>
                        <div className={styles['herb-tradition-content-container']}>
                            <ul>
                                <li>{'Niestrawność'}</li>
                                <li>{'Infekcje'}</li>
                                <li>{'Stres'}</li>
                                <li>{'Lekkie urazy skóry'}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    title: PropTypes.string
};

export default App;
