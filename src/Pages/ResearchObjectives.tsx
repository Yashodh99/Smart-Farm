import React from 'react'

function ResearchObjectives() {
    return (
        <section className='mt-5 objectives ' id="Objectives">
            <h1 style={{ marginLeft: '8%' }}>Research Objectives</h1>
            <div className="mt-5" style={{ marginLeft: '15%', marginRight: '15%' }}>
                <div className="container mt-5">

                    <div className="row align-items-center  d-flex">
                        <div className="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
                            <div className="circle font-weight-bold">1</div>
                        </div>
                        <div className="col-6">
                            <h5> Vibration-Based Animal Detection and Identification Component</h5>
                            <p style={{ textAlign: 'justify' }}>Introducing a smart farm system that detects ground vibrations caused by animal movements, identifies the species in real-time using machine learning models, and provides immediate alerts to farmers.</p>
                        </div>
                    </div>

                    <div className="row timeline">
                        <div className="col-2">
                            <div className="corner top-right"></div>
                        </div>
                        <div className="col-8">
                            <hr />
                        </div>
                        <div className="col-2">
                            <div className="corner left-bottom"></div>
                        </div>
                    </div>

                    <div className="row align-items-center justify-content-end  d-flex">
                        <div className="col-6 text-right">
                            <h5> Adaptive Sensitivity Calibration Component</h5>
                            <p style={{ textAlign: 'justify' }}>The purpose of this component is to dynamically adjust sensor sensitivity based on real-time environmental factors like soil moisture, temperature, and weather conditions, minimizing false alarms and improving detection accuracy. </p>
                        </div>
                        <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                            <div className="circle font-weight-bold">2</div>
                        </div>
                    </div>

                    <div className="row timeline">
                        <div className="col-2">
                            <div className="corner right-bottom"></div>
                        </div>
                        <div className="col-8">
                            <hr />
                        </div>
                        <div className="col-2">
                            <div className="corner top-left"></div>
                        </div>
                    </div>

                    <div className="row align-items-center  d-flex">
                        <div className="col-2 text-center top d-inline-flex justify-content-center align-items-center">
                            <div className="circle font-weight-bold">3</div>
                        </div>
                        <div className="col-6">
                            <h5>Predictive Animal Movement and Early Warning System</h5>
                            <p style={{ textAlign: 'justify' }}>This component aims to provide farmers with early warnings by predicting animal movement patterns using Recurrent Neural Networks (RNN) and Long Short-Term Memory (LSTM) models, enabling proactive farm protection.</p>
                        </div>
                    </div>

                    <div className="row timeline">
                        <div className="col-2">
                            <div className="corner top-right"></div>
                        </div>
                        <div className="col-8">
                            <hr />
                        </div>
                        <div className="col-2">
                            <div className="corner left-bottom"></div>
                        </div>
                    </div>

                    <div className="row align-items-center justify-content-end  d-flex">
                        <div className="col-6 text-right">
                            <h5>Intelligent Species-Specific Deterrent System</h5>
                            <p style={{ textAlign: 'justify' }}>The purpose of this component is to implement humane, species-specific deterrent actions (like sounds, lights, or vibrations) triggered based on detected animal type, reducing crop damage while minimizing harm to wildlife.
                            </p>
                        </div>
                        <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                            <div className="circle font-weight-bold">4</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ResearchObjectives