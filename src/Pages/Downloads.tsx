import React from 'react'

function Downloads() {

    const documents = [
        {
            name: 'Topic Assessment',
            submittionDate: '2023-09-28',
            grouporindi: 'Group',
            link: 'https://docs.google.com/document/d/1V3lsV5mIgbX9QURzJ8GIn63MeHZrzOM3/edit?usp=sharing&ouid=115625229743362297140&rtpof=true&sd=true'
            
        },
        {
            name: 'Project Charter',
            submittionDate: '2023-09-28',
            grouporindi: 'Group',
            link: ''
        },
        {
            name: 'Project Proposal',
            submittionDate: '2023-09-28',
            grouporindi: 'Individual',
            link: 'https://drive.google.com/drive/folders/1I_ExrA41-lIeNZFwtscgeIi9sQCn0moc?usp=sharing'
        },
        {
            name: 'Status Documents I',
            submittionDate: '2023-09-28',
            grouporindi: 'Individual',
            link: 'https://drive.google.com/drive/folders/1t6QtZqTfOjWfkK5X4JKLr7SeYMeZ8_JQ?usp=sharing'
        },
        {
            name: 'Status Documents II',
            submittionDate: '2023-09-28',
            grouporindi: 'Individual',
            link: 'https://drive.google.com/drive/folders/1wBghtePY8ZYiWI0T14iFJCF5REba3EbP?usp=sharing'
            
        },
        {
            name: 'Research Paper',
            submittionDate: '2023-09-28',
            grouporindi: 'Group',
            link: 'https://drive.google.com/drive/folders/1sRxDIRRG_V93KU6NtwUn8Lz9A7sKx1h4?usp=sharing'
        },
        {
            name: 'Final Report',
            submittionDate: '2023-09-28',
            grouporindi: 'Group',
            link: 'https://drive.google.com/drive/folders/18Xf5PLXMkXRAeHoNLYjihFvBWRwgiYHa?usp=sharing'
        },
        {
            name: 'Poster',
            submittionDate: '2023-09-28',
            grouporindi: 'Group',
            link: 'https://drive.google.com/file/d/1aM1OggETK-k2eUY08SMY1e6hQMON0Xw3/view?usp=sharing'
        }
    ]

    const presentations = [
        {
            name: 'Project Proposal',
            submittionDate: '2023-09-28',
            grouporindi: 'Group',
            link: 'https://docs.google.com/presentation/d/1SU5kIvM2Ub1nnKRqA5W_1Hr8F9AFn2QQ/edit?usp=sharing&ouid=115625229743362297140&rtpof=true&sd=true'
        },
        {
            name: 'Progress Presentation I',
            submittionDate: '2023-09-28',
            grouporindi: 'Group',
            link: 'https://docs.google.com/presentation/d/1SU5kIvM2Ub1nnKRqA5W_1Hr8F9AFn2QQ/edit?usp=sharing&ouid=115625229743362297140&rtpof=true&sd=true'
        },
        {
            name: 'Progress Presentation II',
            submittionDate: '2023-09-28',
            grouporindi: 'Group',
            link: 'https://docs.google.com/presentation/d/1SBasgdnEifLM-qxqgrqrF-5sYOLFqjcn/edit?usp=sharing&ouid=115625229743362297140&rtpof=true&sd=true'
        },
        {
            name: 'Final Presentation',
            submittionDate: '2023-09-28',
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