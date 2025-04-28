import React from 'react'

function ResearchGap() {
    return (
        <section className='mt-2' id='researchgap'>
            <h1 style={{ marginLeft: '8%' }}>Research Gap</h1>
            <p style={{ marginLeft: '8%' }}>Following areas are the research gaps found in most of the recent researches.</p>
            <div className="achievements">
                <div className="work">
                    <i className="fas fa-search"></i>
                    <p className="work-heading">Identification & Classification</p>
                    <p className="work-text">In the process of identifying and classifying the Smart Farm Security System project, key areas such as vibration-based animal detection, adaptive sensitivity calibration, predictive analytics, and species-specific deterrent strategies emerged as important aspects for improving farm protection against wildlife intrusions.</p>
                </div>
                <div className="work">
                    <i className="fas fa-chart-line"></i>
                    <p className="work-heading">Severity Assessment</p>
                    <p className="work-text">Severity assessment refers to the process of evaluating the seriousness or potential impact of an event, issue, or situation. It plays a crucial role in areas such as system performance, security, agriculture, and risk management to prioritize appropriate actions.</p>
                </div>
                <div className="work">
                    <i className="fas fa-comments"></i>
                    <p className="work-heading">Information Sharing</p>
                    <p className="work-text">Information sharing involves the exchange or distribution of data, insights, or updates between individuals, groups, or systems. It ensures better communication, decision-making, and coordination across different sectors, including agriculture, technology, and community management.</p>
                </div>
            </div>
        </section>
    )
}

export default ResearchGap