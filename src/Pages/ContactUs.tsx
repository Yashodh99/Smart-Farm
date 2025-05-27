import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';

function ContactUs() {
    useEffect(() => {
        // Initialize EmailJS once when the component mounts
        emailjs.init('2ZDkcLHfPtIIlKu3V');
    }, []);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const serviceID = 'service_znmsfix';
        const templateID = 'template_uo5wmtr';

        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const subject = e.target.elements.subject.value;
        const message = e.target.elements.message.value;

        if (!name || !email || !subject || !message) {
            alert('❗ Please fill in all fields.');
            return;
        }

        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_email: 'yashfern99@gmail.com', // Include this ONLY if your template uses {{to_email}}
        };

        emailjs.send(serviceID, templateID, templateParams)
            .then((response) => {
                console.log('✅ Email sent successfully!', response.status, response.text);
                alert('✅ Email sent successfully!');
                e.target.reset();
            })
            .catch((error) => {
                console.error('❌ Email sending failed:', error);
                alert(`❌ Failed to send email: ${error.text || error}`);
            });
    };

    return (
        <section id="ContactUs" className='mt-5'>
            <h1 style={{ marginLeft: '8%' }}>Contact Us</h1>
            <div className="container mt-5 contactContent">
                <div className="row mt-4">
                    {/* Google Map */}
                    <div className="col-lg-6">
                        <div style={{ overflow: 'hidden', resize: 'none', maxWidth: '100%', width: '500px', height: '500px' }}>
                            <iframe
                                style={{ height: '100%', width: '100%', border: '0' }}
                                frameBorder="0"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3854.5101513425207!2d79.97036957483822!3d6.914682818494246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a6771c5%3A0x2c63e344ab9a7536!2sSri%20Lanka%20Institute%20of%20Information%20Technology!5e1!3m2!1sen!2slk!4v1694113968171!5m2!1sen!2slk"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-lg-6 d-flex align-items-center">
                        <form className="w-100" onSubmit={handleSubmit}>
                            <p>If you have any questions or would like to contact us, please fill out the form below and we will get back to you as soon as possible.</p>
                            <input type="text" className="form-control" name="name" placeholder="Name" />
                            <input type="email" className="form-control mt-3" name="email" placeholder="Email" />
                            <input type="text" className="form-control mt-3" name="subject" placeholder="Subject" />
                            <div className="mb-3 mt-3">
                                <textarea className="form-control" rows={5} name="message" placeholder="Message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-success mt-3" style={{ width: '100%' }}>Send Mail</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;
