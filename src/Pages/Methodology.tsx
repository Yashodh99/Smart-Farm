import React from 'react'

function Methodology() {
    return (
        <section className='mt-5' id="Methodology">
            <h1 style={{ marginLeft: '8%' }}>Methodology</h1>
            <div className="container-fluid py-5" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-4 pb-lg-0 ">
                            <img className="img-fluid rounded " style={{ height: '900px',width:'400px', marginLeft: '18%' }} src="" alt="" />
                        </div>
                        <div className="col-lg-5">
                            <p style={{ textAlign: 'justify' }} className='me-5'>
                            The proposed Smart Farm Security System consists of 4 main components. They are
                                <br /><br /><ol style={{ fontWeight: '600', marginLeft: '5%' }}>
                                    <li>Vibration-Based Animal Detection and Identification</li>
                                    <li>Adaptive Sensitivity Calibration</li>
                                    <li>Predictive Animal Movement and Early Warning System</li>
                                    <li>Intelligent Species-Specific Deterrent System</li>
                                   
                                </ol>
                                The Vibration-Based Animal Detection and Identification component captures ground vibration signals through sensors placed around the farm. These vibration signals are processed and converted into spectrograms, which are then analyzed using machine learning models based on Support Vector Classifier (SVC) and Convolutional Neural Networks (CNN). The output provides real-time detection of the animal type and estimates its proximity to the farm boundary.
                                <br /><br />
                                The Adaptive Sensitivity Calibration component adjusts the sensitivity of vibration sensors dynamically based on environmental conditions like soil moisture, rain, and wind. Machine learning algorithms using supervised learning models were applied to tune the sensor thresholds. The Python language was used for model development, and environmental data collection was handled through ESP32 microcontrollers integrated with soil moisture and temperature sensors.
                                
                                <br /><br />
                                The Predictive Animal Movement and Early Warning System component was implemented using deep learning techniques, particularly Recurrent Neural Networks (RNN) and Long Short-Term Memory (LSTM) models. TensorFlow and Keras libraries were used for model training. This component forecasts potential animal intrusions based on historical and real-time sensor data, providing farmers with early warning notifications via a mobile application developed using React Native and Firebase Cloud Messaging.
                                <br/><br/>
                                The Intelligent Species-Specific Deterrent System component uses machine learning-driven decision logic to trigger appropriate deterrent actions such as lights, predator sounds, or vibrations depending on the detected species. Reinforcement learning techniques were used to optimize deterrent actions over time. The backend was developed using the FastAPI framework for Python, while real-time control and updates were managed through Firebase integration with the mobile application
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Methodology