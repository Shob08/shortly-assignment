import React from 'react';
import FeatureCard from '../../components/js/FeatureCard.js';
import '../css/FeaturesPage.css';
import BrandLogo from '../../assets/icon-brand-recognition.svg';

const features = [
    {title:"Brand Recognition",body:"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."},
    {title:"Brand Recognition",body:"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."},
    {title:"Brand Recognition",body:"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."}

]

const FeaturesPage = () => {
    return (
        <div className='features-section'>
            <div className='features-section-inner'>               
                <div className='feature-title'>
                    <h2>Advanced Statistics</h2>
                    <p>Track how your links are performing across the web with our advanced statistics dashboard. </p>
                </div>

                <div className='feature-cards'>

                    {features.map(item =>(
                        <FeatureCard image={BrandLogo} class={'card brand'}>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </FeatureCard>
                    )) }
                </div>
            </div>
        </div>
    )
}

export default FeaturesPage;