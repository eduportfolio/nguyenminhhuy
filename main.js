
// Active section tracking
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Active section tracking
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');


// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const modalData = {
    'aijam': {
        title: "Gold Award - AI-JAM ASIA 2025",
        color: "blue",
        date: "August 2025",
        subtitle: "Silicon Valley, USA | SmartGuard Wrist: AI-Powered Health Monitor",
        desc: `
            <p><strong>Stroke Alert & Rehabilitation Wearable Device</strong> is a comprehensive health monitoring ecosystem designed to provide early warnings for strokes and emergency situations.</p>
            
            <h4 style="margin-top:15px; color:var(--blue-400);">Technical Highlights:</h4>
            <ul style="margin-left: 20px; color: var(--text-secondary);">
                <li><strong>Multi-modal Detection:</strong> Correlates biometric data (ECG, SpO2, BPM) with <strong>Computer Vision (YOLOv8)</strong> to detect falls or respiratory distress with high precision.</li>
                <li><strong>Signal Processing:</strong> Implemented <strong>Kalman Filters</strong> and Band-pass filters to denoise MPU6050 accelerometer data, distinguishing between daily activities and actual medical emergencies.</li>
                <li><strong>IoT Ecosystem:</strong> Engineered a real-time data pipeline using <strong>MQTT/HTTP</strong> protocols, integrating instant alerts via Mobile App, SMS, and Email.</li>
            </ul>

            <h4 style="margin-top:15px; color:var(--blue-400);">Key Contributions:</h4>
            <p style="color: var(--text-secondary);">Designed embedded circuits, programmed C++ Firmware, trained YOLOv8 models on custom datasets, and developed a cloud-based monitoring dashboard.</p>
        `,
        tags: ["Computer Vision", "IoT", "Signal Processing", "Embedded Systems"],
        img: "assets/aijam.jpg"
    },
    'physics-2025': {
        title: "15th Place Global - Physics Brawl Online",
        color: "blue",
        date: "November 2025",
        subtitle: "Charles University, Czech Republic | Category B",
        desc: `
            <p>Achieved a prestigious World Top 15 ranking in one of the most challenging international physics competitions for high school students.</p>
            <h4 style="margin-top:15px; color:var(--blue-400);">Competition Scope:</h4>
            <ul style="margin-left: 20px; color: var(--text-secondary);">
                <li><strong>High-Speed Problem Solving:</strong> Solved complex physics problems across Mechanics, Thermodynamics, and Electromagnetism under a strict 3-hour time limit.</li>
                <li><strong>Global Competition:</strong> Competed against elite student teams from over 50 countries, representing VNU-HCM High School for the Gifted.</li>
                <li><strong>Advanced Physics:</strong> Tackled undergraduate-level problems requiring deep analytical thinking and collaborative strategy.</li>
            </ul>
        `,
        tags: ["Theoretical Physics", "Global Ranking", "Analytical Thinking"],
        img: "assets/PhysicsBrawlOnline2025_page-0001.jpg"
    },
    'physics-2024': {
        title: "91st Place Global - Physics Brawl Online",
        color: "blue",
        date: "November 2024",
        subtitle: "Charles University, Czech Republic | Category C",
        desc: `
            <p>Secured a Top 100 global position in my first major international Physics Brawl appearance.</p>
            <h4 style="margin-top:15px; color:var(--blue-400);">Key Achievements:</h4>
            <ul style="margin-left: 20px; color: var(--text-secondary);">
                <li><strong>International Debut:</strong> Successfully applied advanced physical principles to solve non-standard problems alongside a competitive team.</li>
                <li><strong>Skill Foundation:</strong> Developed a strong foundation in collaborative scientific inquiry and high-pressure mathematical modeling.</li>
            </ul>
        `,
        tags: ["Competitive Physics", "Problem Solving", "Collaboration"],
        img: "assets/PhysicsBrawlOnline2024_page-0001.jpg"
    },
    'iwise': {
        title: "Gold Medal - iWISE Global Final 2026",
        color: "blue",
        date: "February 2026",
        subtitle: "International World Innovative Student Exhibition (iWISE) | Dubai, UAE",
        desc: `
        <p>Awarded the prestigious Gold Medal at the global final stage for exceptional innovation and scientific excellence.</p>
        <h4 style="margin-top:15px; color:var(--blue-400);">Key Achievements:</h4>
        <ul style="margin-left: 20px; color: var(--text-secondary);">
            <li><strong>Global Recognition:</strong> Presented an advanced technical project to an international panel of experts, competing against top-tier global student researchers.</li>
            <li><strong>Technical Mastery:</strong> Demonstrated outstanding engineering innovation and practical application of STEM principles in a highly competitive international arena.</li>
        </ul>
    `,
        tags: ["Innovation", "STEM", "Engineering", "Global Final"],
        img: "assets/iwise.jpg"
    },
    'olympic-opho': {
        title: "Certificate of Participation - Olympic OPHO",
        color: "blue",
        date: "2024",
        subtitle: "Open Physics Olympiad (OPHO) | International Level",
        desc: `
        <p>Recognized for demonstrating advanced theoretical physics knowledge in a rigorous global competitive setting.</p>
        <h4 style="margin-top:15px; color:var(--blue-400);">Key Achievements:</h4>
        <ul style="margin-left: 20px; color: var(--text-secondary);">
            <li><strong>Advanced Mastery:</strong> Successfully tackled complex, university-level problems focusing on advanced mechanics, thermodynamics, and electromagnetism.</li>
            <li><strong>Global Standards:</strong> Competed alongside elite international physics students, showcasing strong analytical and critical thinking skills.</li>
        </ul>
    `,
        tags: ["Theoretical Physics", "Advanced Mechanics", "Electromagnetism"],
        img: "assets/opho-certificate.jpg"
    },
    'physics-9': {
        title: "First Prize - Excellent Student in Physics",
        color: "blue",
        date: "2023 - 2024",
        subtitle: "Ho Chi Minh City Department of Education and Training | Grade 9 City Level",
        desc: `
        <p>Achieved the highest distinction First Prize in the official city-level Physics Olympiad for outstanding academic merit.</p>
        <h4 style="margin-top:15px; color:var(--blue-400);">Key Achievements:</h4>
        <ul style="margin-left: 20px; color: var(--text-secondary);">
            <li><strong>Elite Ranking:</strong> Competed against top-tier students across Ho Chi Minh City, demonstrating exceptional analytical problem-solving and deep conceptual mastery.</li>
            <li><strong>Advanced Problem Solving:</strong> Excelled in solving high-level classical mechanics, thermodynamics, and electromagnetism problems under competitive constraints.</li>
        </ul>
    `,
        tags: ["Physics Olympiad", "Analytical Thinking", "Academic Excellence"],
        img: "assets/physic_9.jpg"
    },

    'outstanding-student': {
        title: "Outstanding Student Award",
        color: "blue",
        date: "2023 - 2024",
        subtitle: "Saigon Practical High School (SGU)",
        desc: `
        <p>Honored with the school's highest academic distinction for comprehensive excellence and top-tier GPA performance.</p>
        <h4 style="margin-top:15px; color:var(--blue-400);">Key Achievements:</h4>
        <ul style="margin-left: 20px; color: var(--text-secondary);">
            <li><strong>Academic Leadership:</strong> Maintained a flawless academic record, ranking at the top of the cohort through rigorous coursework and scientific dedication.</li>
            <li><strong>Holistic Contribution:</strong> Demonstrated strong leadership and active engagement by bridging academic excellence with student-led initiatives and extracurricular activities.</li>
        </ul>
    `,
        tags: ["Top Tier GPA", "Academic Distinction", "Student Leadership"],
        img: "assets/hstb.jpg"
    },
    'locker': {
        title: "IoT-Based Smart Locker System",
        color: "yellow",
        date: "2025",
        subtitle: "Full-stack IoT Solution | Hardware & Software Integration",
        desc: `
        <p>A sophisticated end-to-end security solution that replaces traditional physical keys with a secure, centralized digital management system.</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; margin-bottom: 20px;">
            <img src="assets/spcn/spcn_3.jpeg" alt="spcn1" style="width: 100%; height: 160px; object-fit: cover; border-radius: 4px; border: 1px solid rgba(168, 85, 247, 0.2); cursor: pointer;" onclick="openImageModal(this)">
            <img src="assets/spcn/spcn_4.jpeg" alt="spcn2" style="width: 100%; height: 160px; object-fit: cover; border-radius: 4px; border: 1px solid rgba(168, 85, 247, 0.2); cursor: pointer;" onclick="openImageModal(this)">
            <img src="assets/spcn/spcn_1.jpg" alt="spcn3" style="width: 100%; height: 160px; object-fit: cover; border-radius: 4px; border: 1px solid rgba(168, 85, 247, 0.2); cursor: pointer;" onclick="openImageModal(this)">
        </div>
        <h4 style="margin-top:15px; color:var(--yellow-400);">Key Technical Achievements:</h4>
        <ul style="margin-left: 20px; color: var(--text-secondary);">
            <li><strong>Full-Stack Architecture:</strong> Developed a responsive Web Interface using <strong>Flask (Python)</strong>, allowing administrators to monitor locker status and manage user permissions in real-time.</li>
            <li><strong>Embedded Control:</strong> Programmed <strong>ESP32</strong> microcontrollers to interface with electromagnetic solenoid locks via relay modules, ensuring high reliability and rapid response times.</li>
            <li><strong>Data Integrity:</strong> Implemented a robust <strong>SQL Database</strong> to maintain encrypted user credentials, access logs, and real-time device telemetry.</li>
            <li><strong>Network Protocols:</strong> Engineered secure communication between the hardware and server using HTTP/REST APIs, with a future roadmap for <strong>MQTT</strong> integration to enhance low-latency performance.</li>
        </ul>

        <h4 style="margin-top:15px; color:var(--yellow-400);">Problem Solved:</h4>
        <p style="color: var(--text-secondary);">Eliminated the logistical challenges of physical key management and provided an auditable trail of locker usage for high-security environments like schools and coworking spaces.</p>
        <a style="margin-top:15px; color:var(--yellow-400);" href="https://drive.google.com/file/d/19c_fys-Pj4RjChtJz9Y2uQx0RLmnAcUK/view?usp=sharing">View Technical Brief</a>
    `,
        tags: ["Flask", "ESP32", "SQL", "IoT Architecture"],
        img: "assets/spcn/SPCN_2.jpg"
    },
    'heart2heal': {
        title: "Founder - Heart2Heal (Non-profit Project)",
        color: "green",
        date: "2025 - Present",
        subtitle: "Community Health & Digital Media Initiative",
        desc: `
        <p>Founded and spearheaded a healthcare-focused non-profit project targeting public awareness and community relief.</p>
        
        <h4 style="margin-top:15px; margin-bottom:10px; color:var(--green-400);">Project Gallery:</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 10px; margin-bottom: 20px;">
            <img src="assets/heart2heal/h2h_1.jpg" alt="Heart2Heal Team Meeting" style="width: 100%; height: 160px; object-fit: cover; border-radius: 4px; border: 1px solid rgba(168, 85, 247, 0.2); cursor: pointer;" onclick="openImageModal(this)">
            <img src="assets/heart2heal/h2h_3.jpg" alt="Fundraising Event" style="width: 100%; height: 160px; object-fit: cover; border-radius: 4px; border: 1px solid rgba(168, 85, 247, 0.2); cursor: pointer;" onclick="openImageModal(this)">
            <img src="assets/heart2heal/h2h_4.jpg" alt="Relief Package Distribution" style="width: 100%; height: 160px; object-fit: cover; border-radius: 4px; border: 1px solid rgba(168, 85, 247, 0.2); cursor: pointer;" onclick="openImageModal(this)">
            <img src="assets/heart2heal/h2h_5.jpg" alt="Community Outreach" style="width: 100%; height: 160px; object-fit: cover; border-radius: 4px; border: 1px solid rgba(168, 85, 247, 0.2); cursor: pointer;" onclick="openImageModal(this)">
        </div>

        <a href="https://www.facebook.com/heart2heal.project">Heart2Heal Fanpage</a>
        <p>Contact email: heart2heal.project@gmail.com</p>
        
        <h4 style="margin-top:15px; color:var(--green-400);">Key Responsibilities:</h4>
        <ul style="margin-left: 20px; color: var(--text-secondary);">
            <li><strong>Team Leadership:</strong> Managed and directed a cross-functional team of 50 members to execute digital media campaigns.</li>
            <li><strong>Fundraising:</strong> Secured <strong>10,000,000+ VND</strong> in crowd-sourced donations through targeted online fundraising strategies.</li>
            <li><strong>Operations Management:</strong> Overseen logistics and supply chain distribution of medical/essential relief packages, directly impacting <strong>100+ underprivileged children</strong>.</li>
        </ul>
    `,
        tags: ["Project Management", "Fundraising", "Digital Campaigns", "Community Health"],
        img: "assets/heart2heal/h2h.jpg"
    },

    'akee-adhd': {
        title: "Head of HCMC Chapter - ADHD Kids: Embrace & Empower",
        color: "green",
        date: "2025 - Present",
        subtitle: "ADHD Kids: Embrace & Empower (AKEE)",
        desc: `
        <p>Directed regional operations and strategic scaling for an educational advocacy group for ADHD awareness.</p>
        
        <h4 style="margin-top:15px; margin-bottom:10px; color:var(--green-400);">Project Gallery:</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 10px; margin-bottom: 20px;">
            <img src="assets/adhd/adhd_2.jpg" alt="ADHD Awareness Workshop" style="width: 100%; height: 160px; object-fit: cover; border-radius: 4px; border: 1px solid rgba(168, 85, 247, 0.2); cursor: pointer;" onclick="openImageModal(this)">
            <img src="assets/adhd/adhd_3.jpg" alt="Family Engagement Session" style="width: 100%; height: 160px; object-fit: cover; border-radius: 4px; border: 1px solid rgba(168, 85, 247, 0.2); cursor: pointer;" onclick="openImageModal(this)">
            <img src="assets/adhd/adhd_4.jpg" alt="HCMC Chapter Team Meeting" style="width: 100%; height: 160px; object-fit: cover; border-radius: 4px; border: 1px solid rgba(168, 85, 247, 0.2); cursor: pointer;" onclick="openImageModal(this)">
            <img src="assets/adhd/adhd_5.jpg" alt="Community Outreach Campaign" style="width: 100%; height: 160px; object-fit: cover; border-radius: 4px; border: 1px solid rgba(168, 85, 247, 0.2); cursor: pointer;" onclick="openImageModal(this)">
        </div>

        <a href="https://www.facebook.com/akee.org">ADHD Kids: Embrace & Empower Fanpage</a><br />
        <a href="https://www.instagram.com/adhdkids.embrace_empower">ADHD Kids: Embrace & Empower Instagram</a><br />
        <a href="https://www.youtube.com/@ADHDKidsEmbraceEmpower">ADHD Kids: Embrace & Empower Youtube channel</a><br />
        <p>Contact email: adhdkidsembraceempower@gmail.com</p>

        <h4 style="margin-top:15px; color:var(--green-400);">Key Responsibilities:</h4>
        <ul style="margin-left: 20px; color: var(--text-secondary);">
            <li><strong>Regional Operations:</strong> Supervised localized fundraising, partnerships, and high-impact media outreach across Ho Chi Minh City.</li>
            <li><strong>Event Coordination:</strong> Organized and executed <strong>50+ specialized workshops</strong> and community events, directly engaging <strong>100+ families and schools</strong>.</li>
            <li><strong>Strategic Partnerships:</strong> Established key collaborations with local institutions and stakeholders to maximize advocacy footprint.</li>
        </ul>
    `,
        tags: ["Regional Operations", "Public Relations", "Workshop Facilitation", "ADHD Advocacy"],
        img: "assets/adhd/adhd_1.jpg"
    },

    'promethean-flame': {
        title: "Vice Head of Academic Department - The Promethean Flame",
        color: "green",
        date: "2024 - Present",
        subtitle: "Community Tutoring & Operational Management Initiative",
        desc: `
        <p>Promoted from core member to executive leadership, optimizing educational distribution and team workflows.</p>
        <h4 style="margin-top:15px; color:var(--green-400);">Key Responsibilities:</h4>
        <ul style="margin-left: 20px; color: var(--text-secondary);">
            <li><strong>Human Resources:</strong> Co-managed internal operations and optimized project assignments for a team of nearly <strong>20 active members</strong>.</li>
            <li><strong>Curriculum Design:</strong> Built and structured foundational Math and Physics curricula tailored specifically to non-traditional learning gaps.</li>
            <li><strong>Direct Instruction:</strong> Delivered interactive teaching and academic support directly to <strong>50+ underprivileged children</strong>.</li>
        </ul>
    `,
        tags: ["Curriculum Architecture", "Team Management", "STEM Tutoring", "Operations"],
        img: "assets/promethean.jpg"
    },

    'lucky-village': {
        title: "Event MC & Logistics Coordinator - Lucky Village Event",
        color: "green",
        date: "Jul 2025",
        subtitle: "Smiling Chances Initiative & Cho Ray Hospital Charity",
        desc: `
        <p>Controlled main-stage public speaking and cross-organizational supply chain logistics for high-density environments.</p>
        <h4 style="margin-top:15px; color:var(--green-400);">Key Responsibilities:</h4>
        <ul style="margin-left: 20px; color: var(--text-secondary);">
            <li><strong>Crowd Control:</strong> Acted as Lead MC and Co-host on the main stage, hosting interactive programs for over <strong>80+ children</strong>.</li>
            <li><strong>Game Optimization:</strong> Co-designed operational frameworks for interactive games, ensuring smooth logistics and scheduling.</li>
        </ul>
    `,
        tags: ["Public Speaking", "Event Logistics", "Field Operations", "Supply Chain Control"],
        img: "assets/lucky_village.jpg"
    },
    'kindness-bookshelf': {
        title: "Volunteer Member - Kindness Bookshelf Initiative",
        color: "cyan",
        date: "2025 - Present",
        subtitle: "Tủ Sách Nhân Ái | Educational Logistics & Supply Chain",
        desc: `
        <p>Optimized logistics and inventory distribution channels to support rural education networks in remote highland regions.</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 10px; margin-bottom: 20px;">
            <img src="assets/tusach/tusach_2.jpg" alt="ADHD Awareness Workshop" style="width: 100%; height: 160px; object-fit: cover; border-radius: 4px; border: 1px solid rgba(168, 85, 247, 0.2); cursor: pointer;" onclick="openImageModal(this)">
            <img src="assets/tusach/tusach_3.jpg" alt="Family Engagement Session" style="width: 100%; height: 160px; object-fit: cover; border-radius: 4px; border: 1px solid rgba(168, 85, 247, 0.2); cursor: pointer;" onclick="openImageModal(this)">
            <img src="assets/tusach/tusach_4.jpg" alt="HCMC Chapter Team Meeting" style="width: 100%; height: 160px; object-fit: cover; border-radius: 4px; border: 1px solid rgba(168, 85, 247, 0.2); cursor: pointer;" onclick="openImageModal(this)">
            <img src="assets/tusach/tusach_5.jpg" alt="Community Outreach Campaign" style="width: 100%; height: 160px; object-fit: cover; border-radius: 4px; border: 1px solid rgba(168, 85, 247, 0.2); cursor: pointer;" onclick="openImageModal(this)">
        </div>

        <h4 style="margin-top:15px; color:var(--cyan-400);">Key Contributions:</h4>
        <ul style="margin-left: 20px; color: var(--text-secondary);">
            <li><strong>Supply Chain Logistics:</strong> Systematic inventory management, packaging, and sorting of over <strong>3,000+ academic textbooks</strong> and learning kits.</li>
            <li><strong>Operational Streamlining:</strong> Re-engineered packaging workflows within the volunteer team to accelerate batch processing for bi-annual shipments.</li>
            <li><strong>Direct Impact:</strong> Facilitated the seamless delivery of high-quality learning resources to over <strong>500+ underprivileged students</strong> across targeted highland centers.</li>
        </ul>
    `,
        tags: ["Inventory Management", "Logistics", "Community Education", "Operations"],
        img: "assets/tusach/tusach_1.jpg"
    },

    'choray-charity': {
        title: "Field Volunteer - Cho Ray Hospital Charity Drive",
        color: "cyan",
        date: "March 2026",
        subtitle: "Direct Patient Aid & Medical Support Initiative",
        desc: `
        <p>Executed critical frontline charity operations inside heavy-traffic clinical environments, delivering direct support to patients facing acute economic hardship.</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 10px; margin-bottom: 20px;">
            <img src="assets/choray/choray_1.jpg" alt="ADHD Awareness Workshop" style="width: 100%; height: 160px; object-fit: cover; border-radius: 4px; border: 1px solid rgba(168, 85, 247, 0.2); cursor: pointer;" onclick="openImageModal(this)">
            <img src="assets/choray/choray_2.jpg" alt="Family Engagement Session" style="width: 100%; height: 160px; object-fit: cover; border-radius: 4px; border: 1px solid rgba(168, 85, 247, 0.2); cursor: pointer;" onclick="openImageModal(this)">
            <img src="assets/choray/choray_3.jpg" alt="HCMC Chapter Team Meeting" style="width: 100%; height: 160px; object-fit: cover; border-radius: 4px; border: 1px solid rgba(168, 85, 247, 0.2); cursor: pointer;" onclick="openImageModal(this)">
        </div>
        
        <h4 style="margin-top:15px; color:var(--cyan-400);">Key Contributions:</h4>
        <ul style="margin-left: 20px; color: var(--text-secondary);">
            <li><strong>Direct Financial Aid:</strong> Supervised the distribution of immediate medical care grants, providing <strong>1,000,000 VND per patient</strong> directly to 6 selected critical cases to offset surgery/treatment costs.</li>
            <li><strong>Clinical Empathy & Patient Outreach:</strong> Conducted bed-side wellness check-ins, engaging directly with patients and medical staff to coordinate logistics and offer psycho-social motivation.</li>
        </ul>
    `,
        tags: ["Healthcare Support", "Direct Aid Operations", "Crisis Empathy", "Fieldwork"],
        img: "assets/choray/choray_1.jpg"
    },

    'gifted-battlefield': {
        title: "Academic Content Creator - The Gifted Battlefield",
        color: "cyan",
        date: "2024 - 2025",
        subtitle: "Physics Competition Platform & Material Design",
        desc: `
        <p>Curated and architected advanced physical and theoretical frameworks for high-level competitive simulations.</p>
        <h4 style="margin-top:15px; color:var(--cyan-400);">Key Contributions:</h4>
        <ul style="margin-left: 20px; color: var(--text-secondary);">
            <li><strong>Problem Set Architecture:</strong> Designed complex academic problem sets, challenge criteria, and physics competition mechanics for advanced student cohorts.</li>
            <li><strong>Peer Review & Quality Control:</strong> Collaborated within a cross-peer review department to stress-test learning formulas and ensure total academic precision.</li>
            <li><strong>Platform Verification:</strong> Enhanced project credibility by maintaining rigorous verification of complex mathematical modeling used in resources.</li>
        </ul>
    `,
        tags: ["Physics Curriculum", "Mathematical Modeling", "Problem Architecture", "Peer Editing"],
        img: "assets/gifted_battlefield.jpg"
    },

    'tram-chuyen-cap': {
        title: "Core Content Member - Trạm Chuyển Cấp 26:29",
        color: "cyan",
        date: "2025 - Present",
        subtitle: "Academic Transition Guidance Platform",
        desc: `
        <p>Authored strategic guidance assets to streamline high school transition paths for incoming secondary students.</p>
        <h4 style="margin-top:15px; color:var(--cyan-400);">Key Contributions:</h4>
        <ul style="margin-left: 20px; color: var(--text-secondary);">
            <li><strong>Academic Publication:</strong> Produced and published <strong>10+ intensive academic deep-dive blogs</strong> focusing on learning strategies and psychological adaptations.</li>
            <li><strong>Quality Management:</strong> Evaluated and peer-edited curriculum advisory media within the writing pool to ensure compliance with strict school guidelines.</li>
        </ul>
    `,
        tags: ["Academic Writing", "Strategic Roadmapping", "Mentorship Media", "Peer Review"],
        img: "assets/tram_chuyen_cap.jpg"
    },

    'project-alpha': {
        title: "Content Member - Project Alpha (Non-profit Initiative)",
        color: "cyan",
        date: "2025",
        subtitle: "Public Funding & Charity Material Distribution",
        desc: `
        <p>Engineered digital outreach pipelines to generate crowd-sourced financing and drive localized humanitarian operations.</p>
        <h4 style="margin-top:15px; color:var(--cyan-400);">Key Contributions:</h4>
        <ul style="margin-left: 20px; color: var(--text-secondary);">
            <li><strong>Capital Acquisition:</strong> Designed engaging media copy and promotional outreach assets, helping secure <strong>7,000,000 VND</strong> in targeted community donations.</li>
            <li><strong>Volunteer Coordination:</strong> Co-directed field workflows for 20 active volunteers during resource mobilization and critical package drops for youth centers.</li>
        </ul>
    `,
        tags: ["Outreach Media", "Capital Fundraising", "Volunteer Synergies", "Field Distribution"],
        img: "assets/project_alpha.jpg"
    },

    'buom-project': {
        title: "Academic Department Member - Buồm Project",
        color: "cyan",
        date: "June 2025 - November 2025",
        subtitle: "Educational Outreach & Youth Engagement Performance",
        desc: `
        <p>Formulated student engagement methods and provided strategic operational support within the core academic division.</p>
        <h4 style="margin-top:15px; color:var(--cyan-400);">Key Contributions:</h4>
        <ul style="margin-left: 20px; color: var(--text-secondary);">
            <li><strong>Operational Excellence:</strong> Commended with official institutional recognition for valuable performance in scheduling, material structuring, and executing department initiatives.</li>
            <li><strong>Workshop Execution:</strong> Assisted in managing digital classrooms and community meetups, optimizing real-time feedback loops for students.</li>
        </ul>
    `,
        tags: ["Performance Merit", "Academic Operations", "Workshop Logistics", "Youth Engagement"],
        img: "assets/buom_1.jpg"
    },

    'euphrosyne-project': {
        title: "Outreach & Branding Manager - The Euphrosyne Project",
        color: "cyan",
        date: "2024 - Present",
        subtitle: "Digital Branding & Community Engagement Campaigns",
        desc: `
        <p>Supervised brand architecture and media scaling to drive platform impressions and organic audience retention.</p>
        <h4 style="margin-top:15px; color:var(--cyan-400);">Key Contributions:</h4>
        <ul style="margin-left: 20px; color: var(--text-secondary);">
            <li><strong>Campaign Architecture:</strong> Programmed cross-platform digital outreach roadmaps, drastically increasing social visibility and community sign-ups.</li>
            <li><strong>Creative Asset Control:</strong> Developed engaging copywriting and interactive graphic concepts to refine project identity across target channels.</li>
        </ul>
    `,
        tags: ["Brand Architecture", "Outreach Optimization", "Media Strategy", "Audience Growth"],
        img: "assets/euphro_1.png"
    }
};

function openModal(id) {
    const item = modalData[id];
    const modal = document.getElementById('infoModal');
    const content = modal.querySelector('.modal-content');

    // Reset class màu cũ và thêm class mới
    content.className = 'modal-content ' + item.color;

    document.getElementById('modalTitle').innerText = item.title;
    document.getElementById('modalDate').innerText = item.date;
    document.getElementById('modalDate').className = 'card-date ' + item.color;
    document.getElementById('modalDesc').innerHTML = item.desc;
    document.getElementById('modalImg').src = item.img;

    // Đổ tags theo màu
    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = item.tags.map(t => `<span class="tag ${item.color}">${t}</span>`).join('');

    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById('infoModal').style.display = "none";
    document.body.style.overflow = "auto";
}

// Đóng khi click ra ngoài
window.onclick = function (event) {
    if (event.target == document.getElementById('infoModal')) closeModal();
}

//image in research section
function openImageModal(element) {
    const lightbox = document.getElementById("imageLightbox");
    const lightboxImg = document.getElementById("lightboxImg");

    lightbox.style.display = "block";
    lightboxImg.src = element.src;
    document.body.style.overflow = "hidden";
}

function closeImageModal() {
    const lightbox = document.getElementById("imageLightbox");
    lightbox.style.display = "none";
    document.body.style.overflow = "auto";
}

document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        closeImageModal();
    }
});

//matrix text
document.addEventListener("DOMContentLoaded", () => {
    // Tìm tất cả các phần tử có class matrix-scramble
    const targets = document.querySelectorAll(".matrix-scramble");
    const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&_+=//::";

    // Chạy hiệu ứng độc lập cho từng dòng một
    targets.forEach((target) => {
        const finalValue = target.innerText;
        let iteration = 0;
        let interval = null;

        const triggerScramble = () => {
            clearInterval(interval);
            iteration = 0;

            interval = setInterval(() => {
                target.innerText = finalValue
                    .split("")
                    .map((char, index) => {
                        if (char === " ") return " ";

                        if (index < iteration) {
                            return finalValue[index];
                        }

                        return matrixChars[Math.floor(Math.random() * matrixChars.length)];
                    })
                    .join("");

                if (iteration >= finalValue.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 5;
            }, 30);
        };

        // Kích hoạt khi vừa load trang
        triggerScramble();

        // Kích hoạt khi hover chuột vào từng dòng riêng biệt
        target.addEventListener("mouseover", triggerScramble);
    });
});

// dark/light theme with cache - bonus by minhle
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    if (!themeToggle) return;

    const toggleText = themeToggle.querySelector(".toggle-text");

    const savedTheme = localStorage.getItem("operation-mode");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        if (toggleText) toggleText.innerText = "LIGHT MODE";
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        let currentMode = "dark";
        if (document.body.classList.contains("light-mode")) {
            currentMode = "light";
            if (toggleText) toggleText.innerText = "LIGHT MODE";
        } else {
            if (toggleText) toggleText.innerText = "DARK MODE";
        }

        localStorage.setItem("operation-mode", currentMode);
    });
});