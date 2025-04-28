import React from 'react'

function LiteratureSurvey() {
    return (
        <section className='mt-5' id='Literature'>
            <h1 style={{ marginLeft: '8%' }}>Literature Survey</h1>
            <div className="container-fluid py-5" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <p style={{ textAlign: 'justify' }} className='me-5'>
                                Vibration-based animal detection and identification systems in smart farm security systems are gaining attention for their capability in addressing human-animal conflicts in agricultural fields. These systems utilize unique vibrational signatures of animals for identification across different species, thus providing early warnings and achieving breakthroughs in farm protection. Research has shown the effectiveness of vibration sensors in detecting large animals such as elephants, deer, and wild boars in agricultural fields [1]. Integrating machine learning into these systems enhances accuracy in animal species identification by classifying vibrational patterns. The integration of traditional detection methods with modern technologies like the Internet of Things (IoT) and machine learning offers significant potential for a comprehensive wildlife management solution for farms [2].

                                <br /><br />
                                Adaptive sensitivity calibration systems have been explored in research focusing on sensor technology and environmental conditions affecting vibration sensor performance. Vibration sensors have been used to detect animals like elephants and wild boars; however, distinguishing between animal-induced vibrations and environmental noise remains a challenge [2]. The use of adaptive filtering techniques has been proposed to mitigate the influence of environmental conditions on vibration sensors, suggesting that real-time sensitivity variations could improve detection reliability and accuracy. Machine learning techniques for dynamic sensor calibration have also been introduced to adapt sensitivity based on environmental variables, further enhancing detection accuracy [2]. Despite these advancements, limited research addresses the calibration of vibration sensors in agricultural settings, highlighting a gap that requires further exploration.

                                <br /><br />
                                Human-wildlife interactions, especially in farm environments, pose significant challenges in terms of crop destruction and threats to human life. Traditional deterrent measures, such as fencing and noise-making, have often proven ineffective in real-world conditions. Recent advancements have explored the use of machine learning to enhance deterrent systems by analyzing patterns in animal behavior. Predictive models can optimize deterrence strategies, reducing reliance on trial-and-error methods [3]. For instance, in acoustic repellent systems, machine learning algorithms assist in identifying sound frequencies that effectively deter specific animals with minimal habituation. The use of IoT technology in conjunction with machine learning ensures real-time sensing and adaptability in deterrent strategies, thus supporting sustainable practices in managing wild animals [4].
                            </p>   
                        </div>
                        <div className="col-lg-6">
                            <p style={{ textAlign: 'justify' }} className='me-5'>
                                Technological advancements in agriculture have led to the development of animal movement prediction and early warning systems. Traditional surveillance methods, such as motion-activated cameras and infrared sensors, primarily offer real-time detection without predictive capabilities [3]. The use of vibration data for monitoring animals is emerging, with some studies analyzing seismic vibrations from large animals like elephants, deer, and wild boars. However, there is still little research on the use of vibration data in early warning applications, suggesting a viable research area for exploration [7]. Predictive models using Recurrent Neural Networks (RNN) and Long Short-Term Memory (LSTM) networks have shown promise in forecasting animal movements based on sequential data, offering proactive farm security measures [7].

                                <br /><br />
                                In summary, the use of machine learning and advanced sensor technologies in vibration-based animal detection and identification systems holds promise for effectively mitigating human-animal conflicts in agricultural fields. However, challenges such as sensor calibration, adaptability in different environmental conditions, and the development of learning-based predictive models need further research to create efficient and flexible solutions for diverse agricultural conditions. The proposed Smart Farm Security System aims to address these gaps by integrating vibration-based detection, adaptive sensitivity calibration, optimized deterrence strategies, and predictive modeling to provide a comprehensive solution for farm protection and wildlife management.

                                <br /><br />
                                <span style={{ fontSize: '12px' }}>References
                                    <br />
                                    [1] M. D. Milosevic, "Towards Model-Based Condition Monitoring of Railway Switches and Crossings," Ph.D. dissertation, Chalmers Tekniska Hogskola, Goteborg, Sweden, 2021.
                                    <br />
                                    [2] N. F. Espinora Sepúlveda and J. K. Sinha, "Blind application of developed smart vibration-based machine learning (SVML) model for machine faults diagnosis to different machine conditions," Journal of Vibration Engineering & Technologies, vol. 9, pp. 587-596, 2021.
                                    <br />
                                    [3] K. Li et al., "Vibration-based health monitoring of ball screw in changing operational conditions," Journal of Manufacturing Processes, vol. 53, pp. 55-68, 2020.
                                    <br />
                                    [4] S. R. S. R. Y. R. K. D. S. Sowmiya P, "IoT Influenced Automatic Elephant Repelling System for Enhancing Safety of Public and Plantations," Journal of Multimassional & Control Systems, vol. 12, no. 7, pp. 2244-2249, 2020.
                                    <br />
                                    [5] R. H. N. K. R. S. S. S. S. K. D. S. Prakash, "Machine Learning-Based Acoustic Repellent System for Protecting Crops against Wild Animal Attacks," Journal of Advanced Research in Dynamical & Control Systems, vol. 12, no. 7, pp. 2250-2255, 2020.
                                    <br />
                                    [6] J. L. W. M. W. L. J. M. W., Jaliya L., Wijayaraja, "Towards Long Range for Embedded Systems," IEEE Access, p. 10, 2024.
                                    <br />
                                    [7] J. Rew, S. Park, Y. Cho, S. Jung, and E. Hwang, "Animal Movement Protection Based on Predictive and Maternal Network," Research, Oct. 2019. [Online]. Available: https://www.researchgate.net/publication/336527012_Animal_Movement_Prediction_Based_on_Predictive_Recurrent_Neural_Network.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LiteratureSurvey