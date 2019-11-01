import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import chamomile from './chamomile.jpg'

import styles from './style.css';

class App extends Component {
    render() {
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
                </div>
            </div>
        );
    }
}

App.propTypes = {
    title: PropTypes.string
};

export default App;
