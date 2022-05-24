import React from 'react';
import '../css/Intro.css';
import AuthButton from './AuthButton.js';
import ImgWorking from '../../assets/people working.svg';

const Intro = () => {
    return (
        <div className='intro'>
            <div className='description'>
                <h1 >MORE THAN JUST SHORTER LINKS</h1>
                <div className='illustration'>
                    <img width={"50%"} src={ImgWorking} alt='illustration of a person working' />
                </div>
            </div>


        </div>
    )
}

export default Intro;