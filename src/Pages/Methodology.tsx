import React from 'react'

function Methodology() {
    return (
        <section className="mt-5" id="Methodology">
  <h1 className="text-center mb-5" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Methodology</h1>
  <div className="container-fluid py-5" id="about">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 pb-4 pb-lg-0 d-flex justify-content-center">
          <img
            className="img-fluid rounded shadow"
            style={{ maxHeight: '500px', maxWidth: '100%', objectFit: 'contain', marginRight:'100px'}}
            src="/elephant.png"
            alt="Elephant illustration for Smart Farm Security System"
          />
        </div>
        <div className="col-lg-6">
          <div className="methodology-content">
            <p className="lead text-justify mb-4">
              The proposed Smart Farm Security System consists of four main components:
            </p>
            <ol className="list-group list-group-numbered mb-4" style={{ fontWeight: 600 }}>
              <li className="list-group-item border-0">Vibration-Based Animal Detection and Identification</li>
              <li className="list-group-item border-0">Adaptive Sensitivity Calibration</li>
              <li className="list-group-item border-0">Predictive Animal Movement and Early Warning System</li>
              <li className="list-group-item border-0">Intelligent Species-Specific Deterrent System</li>
            </ol>

            <div className="component-section mb-4">
              <h4 className="fw-bold">1. Vibration-Based Animal Detection and Identification</h4>
              <p className="text-justify">
                This component captures ground vibration signals using sensors placed around the farm. The signals are processed into spectrograms and analyzed with machine learning models (Support Vector Classifier and Convolutional Neural Networks). It provides real-time detection of animal types and estimates proximity to the farm boundary.
              </p>
            </div>

            <div className="component-section mb-4">
              <h4 className="fw-bold">2. Adaptive Sensitivity Calibration</h4>
              <p className="text-justify">
                This adjusts the sensitivity of vibration sensors dynamically based on environmental conditions (e.g., soil moisture, rain, wind). Supervised learning models were applied to tune sensor thresholds, developed using Python. ESP32 microcontrollers integrated with soil moisture and temperature sensors handled environmental data collection.
              </p>
            </div>

            <div className="component-section mb-4">
              <h4 className="fw-bold">3. Predictive Animal Movement and Early Warning System</h4>
              <p className="text-justify">
                Implemented using deep learning (Recurrent Neural Networks and Long Short-Term Memory models), this component forecasts potential animal intrusions. TensorFlow and Keras were used for training. Early warnings are sent to farmers via a mobile app built with React Native and Firebase Cloud Messaging.
              </p>
            </div>

            <div className="component-section">
              <h4 className="fw-bold">4. Intelligent Species-Specific Deterrent System</h4>
              <p className="text-justify">
                This uses machine learning-driven decision logic to trigger deterrents (lights, predator sounds, vibrations) based on the detected species. Reinforcement learning optimizes actions over time. The backend uses FastAPI, with real-time control managed via Firebase integration with the mobile app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default Methodology