import React from 'react'

function Downloads() {

    const documents = [
        {
            name: 'Topic Assessment',
            submittionDate: '2025-05-26',
            grouporindi: 'Group',
            link: 'https://drive.google.com/drive/folders/16OLb04llBKQr7cYc8-zHfTqT8bIM_4FT'
            
        },
       
        {
            name: 'Project Proposal',
            submittionDate: '2025-05-26',
            grouporindi: 'Individual',
            link: 'https://drive.google.com/drive/folders/1TK4F5P5ISIhWYZe5FMYmCRNwa-aKa-I5'
        },
        
        {
            name: 'Research Paper',
            submittionDate: '2025-05-26',
            grouporindi: 'Group',
            link: 'https://drive.google.com/drive/folders/1_W93vt00h4CFqA-QzQRxEMNdp3Hn9TEF'
        },
        {
            name: 'Final Report',
            submittionDate: '2025-05-26',
            grouporindi: 'Group',
            link: 'https://drive.google.com/drive/folders/16qjehLU1P6KbFzIOP3nMudgwBefiN7mk'
        },
        
    ]

    const presentations = [
        {
            name: 'Project Proposal',
            submittionDate: '2025-05-26',
            grouporindi: 'Group',
            link: 'https://drive.google.com/drive/folders/1-rBEIo0XND6EL5Ts7s_u2aGV0OodgxO0'
        },
        {
            name: 'Progress Presentation I',
            submittionDate: '2025-05-26',
            grouporindi: 'Group',
            link: 'https://drive.google.com/drive/folders/1vDrbRAHOYPzUBrKwHIcDG_eYCGQT72UP'
        },
        {
            name: 'Progress Presentation II',
            submittionDate: '2025-05-26',
            grouporindi: 'Group',
            link: 'https://drive.google.com/drive/folders/1i5OA-gHQiwHQUSBgmr0NBwvkgfWq0clx'
        },
        {
            name: 'Final Presentation',
            submittionDate: '2025-05-26',
            grouporindi: 'Group',
            link: ''
        }
    ]

    return (
        <section className='mt-5 meetteam' style={{ backgroundColor: '#dff5eb', padding: '30px' }} id='Documents'>
            <h1 style={{ marginLeft: '8%' }} className='mb-5'>Downloads</h1>

            <h4 style={{ marginLeft: '10%' }}>Documents</h4>
            <p style={{ marginLeft: '10%' }}>Please find all documents related to this project below.</p>
            <div className=" mt-4" style={{ marginInlineStart: '14%', marginInlineEnd: '14%' }}>
                <div className="row">
                    {documents.map((document) => (
                        <div className="col-xs-12 col-sm-3 mb-5">
                            <div className="card carddowndolad d-flex flex-column h-100">
                                <div className="card-content" style={{ height: '150px' }}>
                                    <h5 className=" mb-3"> <i className="fas fa-file-alt me-2 docicon"></i> {document?.name}</h5>
                                    <p style={{ fontSize: '14px', color: "gray" }}>
                                        Submitted on {document?.submittionDate}
                                    </p>

                                </div>
                                <div className="card-read-more">
                                    <p style={{ fontSize: '15px', color: 'black', textDecoration: 'none', fontWeight: '500' }} className="btn btn-link btn-block ms-2">
                                        {document?.grouporindi}
                                    </p>
                                    <p style={{ fontSize: '15px', color: 'green', float: 'right', textDecoration: 'none' }} className="btn btn-link btn-block" onClick={() => { window.open(`${document?.link}`) }}>
                                        <i className="fas fa-download me-1"></i> Download
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <h4 style={{ marginLeft: '10%' }} id='Presentations'>Presentations</h4>
            <p style={{ marginLeft: '10%' }}>Please find all presentations related this project below.</p>
            <div className=" mt-4" style={{ marginInlineStart: '14%', marginInlineEnd: '14%' }}>
                <div className="row">
                    {presentations.map((presentation) => (
                        <div className="col-xs-12 col-sm-3 mb-5">
                            <div className="card carddowndolad d-flex flex-column h-100">
                                <div className="card-content" style={{ height: '150px' }}>
                                    <h5 className=" mb-3"> <i className="fas fa-file-alt me-2 docicon"></i> {presentation?.name}</h5>
                                    <p style={{ fontSize: '14px', color: "gray" }}>
                                        Submitted on {presentation?.submittionDate}
                                    </p>

                                </div>
                                <div className="card-read-more">
                                    <p style={{ fontSize: '15px', color: 'black', textDecoration: 'none', fontWeight: '500' }} className="btn btn-link btn-block ms-2">
                                        {presentation?.grouporindi}
                                    </p>
                                    <p style={{ fontSize: '15px', color: 'green', float: 'right', textDecoration: 'none' }} className="btn btn-link btn-block" onClick={() => { window.open(`${presentation?.link}`) }}>
                                        <i className="fas fa-download me-1"></i> Download
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Downloads