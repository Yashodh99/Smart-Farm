import React from 'react'

function ResearchProblem() {
    return (
        <section className='mt-1' id="Problem">
            <h1 style={{ marginLeft: '8%' }}>Research Problem & Solution</h1>
            <br /><br />
            <div className="container-fluid " id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h5 style={{ fontWeight: '700' }} className='ms-3'>Proposed Problem</h5>
                            <h5 style={{ fontWeight: '700', color: 'green' }} className='ms-3'>What are the current challenges faced by Farmers in Protecting Agricultural Lands from Wildlife Intrusions?</h5>
                            <p style={{ textAlign: 'justify' }} className='ms-3 mt-4'>
                            Current trends show that farmers rely heavily on traditional methods like fences, trenches, and manual patrolling, which are often costly, reactive, and ineffective in modern agricultural settings. These methods fail to provide early warnings, species identification, or real-time protection, leading to frequent crop damage and financial losses.

                                <br /><br />
                                How can technology help farmers by introducing smart solutions such as vibration detection, machine learning, and predictive alerts to improve security, reduce human-wildlife conflict, and promote sustainable agriculture?


                            </p>
                        </div>
                        <div className="col-lg-6 pb-4 pb-lg-0">
                            <iframe style={{ marginLeft: '5%' }} width="560" height="315" src="https://www.youtube.com/embed/W-0lSiV-H7k?si=Ai0uKvQySVG78eJB" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                        </div>
                    </div>
                    <h5 style={{ fontWeight: '700' }} className='ms-3 mt-3'>Proposed Solution</h5>
                    <p style={{ textAlign: 'justify' }} className='ms-3 mt-4'>
                    
                    Through the Smart Farm Security System, we empower farmers to protect their lands from wildlife intrusions by using smart technologies like vibration sensing, machine learning, and predictive analytics. By combining traditional farming knowledge with modern technological solutions, we aim to build a proactive, real-time system that strengthens agricultural productivity, reduces crop losses, and promotes sustainable and secure farming practices.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ResearchProblem