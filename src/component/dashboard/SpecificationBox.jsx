import React from 'react';

function SpecificationBox({ boxData }) {
    return (
        <>
            <div className="specification-box">
                <div> { boxData.heading } </div>
                <h4> { boxData.text } </h4>
            </div>
        </>
    )
}

export default SpecificationBox;