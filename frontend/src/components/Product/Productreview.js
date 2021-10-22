import React from 'react'
import './Productreview.css'
import profile from '../../images/Profile.png'
import ReactStars from 'react-stars'
const Productreview = () => {
    return (
        <>
            <div className="review-container">
                <img className="profile" src={profile} />
                <p>vikhyath shetty</p>
                <ReactStars />
                <p>The hrefrequired for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles.Compiled with warnings.</p>
            </div>
        </>
    )
}

export default Productreview
