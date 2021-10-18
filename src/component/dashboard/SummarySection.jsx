import React from 'react';

function SummarySection({ summaryData }) {
    return (
        <>
            <div className="summary-section">
                <h3> { summaryData.heading } </h3>
                <p> { summaryData.text } </p>
            </div>
        </>
    )
}

export default SummarySection;