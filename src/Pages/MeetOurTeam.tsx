import React from 'react';

interface TeamMember {
    name: string;
    position: string;
    image: string;
    department: string;
    scholarLink?: string;
    email?: string;
}

function MeetOurTeam() {
    const ourTeamPanl: TeamMember[] = [
        {
            name: 'Mrs.Gaya Thamali Dasanayaka',
            position: 'Supervisor',
            image: '/thamali_madam.jpg',
            department: 'Computer Science',
            scholarLink: 'https://scholar.google.com/citations?user=tv9uctwAAAAJ&hl=en&oi=ao',
            email: 'mailto:thamali.d@sliit.lk'
        },
        {
            name: 'Mr.Ravi Supunya',
            position: 'Co_Supervisor',
            image: '/ravi_sir.jpg',
            department: 'Information Technology',
            scholarLink: 'https://scholar.google.com/citations?user=W_x-lmkAAAAJ&hl=en&oi=ao',
            email: 'mailto:ravi.s@sliit.lk'
        }
    ];

    const ourTeamMem: TeamMember[] = [
        {
            name: 'Fernando W.Y.M',
            position: 'Group Leader',

            

            image: '/yashodh.jpg',
            department: 'Information Technology',
            email: 'mailto:yashfern99@gmail.com'

        },
        {
            name: 'Chanuka Weerasinghe',
            position: 'Group Member',
            image: '/chanuka.png',
            department: 'Information Technology',
            email: 'mailto:chanukasweerasinghe@gmail.com'
        },
        {
            name: 'Thilan Akmeemana',
            position: 'Group Member',
            image: '/thilan.png',
            department: 'Information Technology',
            email: 'mailto:thilandasantha9@gmail.com'
        },
        {
            name: 'Tharusha Hapuarachchi',
            position: 'Group Member',
            image: '/tharusha.png',
            department: 'Information Technology',
            email: 'mailto:tharuhapuarachchi00@gmail.com'
        }
    ];

    const renderCard = (person: TeamMember, showScholar: boolean) => (
    <div className="col-xs-12 col-sm-3" key={person.name}>
        <div className="card d-flex flex-column h-100">
            <a className="img-card">
                <img src={person.image} alt={person.name} />
            </a>
            <div className="card-content">
                <h4 className="card-title mb-3">{person.name}</h4>
                <img
                    className="mb-2"
                    src={`https://img.shields.io/badge/-${person.position}-807e7e`}
                    alt="badge"
                />
                <p style={{ fontSize: '14px' }}>
                    Sri Lanka Institute of Information Technology
                </p>
                <p style={{ fontSize: '14px' }}>
                    <span style={{ fontWeight: 700 }}>Department</span>
                    <br />
                    {person.department}
                </p>
            </div>
            <div
                className="card-read-more d-flex justify-content-center gap-3"
                style={{ paddingBottom: '10px' }}
            >
                {showScholar && person.scholarLink && (
                    <a
                        href={person.scholarLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '14px', color: 'green' }}
                        className="btn btn-link"
                    >
                        <i className="fab fa-google me-1"></i> G-Scholar
                    </a>
                )}
                {person.email && (
                    <a
                        href={person.email}
                        style={{ fontSize: '14px', color: 'green' }}
                        className="btn btn-link"
                    >
                        <i className="fas fa-envelope-open-text me-1"></i> E-Mail
                    </a>
                )}
            </div>
        </div>
    </div>
);


    return (
        <section className="mt-5 meetteam" id="aboutus">
            <h1 style={{ marginLeft: '8%' }}>Meet Our Team !</h1>
            <div className="container mt-5">
                <div className="row">
                    {ourTeamPanl.map(member => renderCard(member, true))}
                </div>
                <div className="row mt-5">
                    {ourTeamMem.map(member => renderCard(member, false))}
                </div>
            </div>
        </section>
    );
}

export default MeetOurTeam;
