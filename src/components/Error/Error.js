// Imports
import React from 'react';

// Styling Imports
import './_Error.scss';

const Error = () => {
    return (
        <section className='errorSection'>
            <article className='errorMessage'>
                <h2>We are having technical difficulties.</h2>
                <p><em>Please try again or revisit at a later time.</em></p>
            </article>
        </section>
    )
}

export default Error
