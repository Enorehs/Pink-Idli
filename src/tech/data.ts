// All content comes from Sherone_DSouza_RESUME_.docx.pdf (tech resume).

export const contact = {
  email: 'dsouzasherone@gmail.com',
  phone: '+91 74117 91663',
  phoneHref: '+917411791663',
  linkedin: 'https://www.linkedin.com/in/sheronedsouza/',
  github: 'https://github.com/Enorehs',
}

export const profile =
  'Creative technologist and performance-focused software engineer bridging robust backend architecture with complex visual computing to solve high-impact, real-world problems. I design decoupled full-stack systems, containerize environments and optimize rendering pipelines for real-time apps, turning technical constraints into scalable, secure, production-ready software.'

export const projects: { name: string; tagline: string; stack: string[]; blurb: string; href?: string }[] = [
  {
    name: 'RELIC//VOX',
    href: 'https://github.com/Enorehs/relic-vox',
    tagline: 'Real-time gesture vocoder',
    stack: ['Python', 'OpenCV', 'MediaPipe', 'MIDI'],
    blurb:
      'A zero-latency performance instrument that turns American Sign Language hand geometry into live MIDI chords. A virtual MIDI bridge pipes the tracking straight into a DAW and a polyphonic vocoder, with an OpenCV HUD showing telemetry and gesture state.',
  },
  {
    name: 'Hashtora by EmireQ',
    tagline: 'Full-stack hiring platform & ATS',
    stack: ['React + TS', 'Django REST', 'PostgreSQL', 'JWT', 'Swagger'],
    blurb:
      'A secure, decoupled two-sided portal. PostgreSQL schema built to resolve migration deadlocks and block duplicate applications, role-based JWT auth isolating employers from candidates, Swagger-documented APIs and a live dashboard that updates statuses without reloads.',
  },
  {
    name: 'Real-time ray tracer',
    tagline: 'GPU-accelerated rendering engine',
    stack: ['C++', 'Vulkan', 'NVIDIA RTX'],
    blurb:
      'Physically based lighting with reflections, refractions, shadows and volumetrics, running at 30–60 FPS on complex scenes by leaning on RTX hardware.',
  },
  {
    name: 'D.E.D',
    tagline: 'Dynamic malware detection',
    stack: ['Python', 'Flask', 'RSA'],
    blurb:
      'Behaviour-based detection instead of signature-only matching, with real-time monitoring and logging of suspicious activity and RSA-encrypted file transfer for confidentiality and integrity.',
  },
  {
    name: 'CAT',
    tagline: 'Compiler for a C++ subset',
    stack: ['Lex', 'Yacc', 'C++'],
    blurb:
      'Lexical, syntax and semantic analysis through optimization to target assembly, which taught me how vulnerabilities emerge at the compile and memory level.',
  },
  {
    name: 'Club website',
    tagline: 'Pop culture club, MIT',
    stack: ['HTML', 'CSS', 'JavaScript'],
    blurb: 'A responsive, animated site for the university pop culture club, with event calendars and interactive features to lift engagement.',
  },
]

export const experience = [
  {
    role: 'Backend Developer',
    company: 'EmireQ',
    points: [
      'Engineered a secure, decoupled Applicant Tracking System connecting a React (TypeScript) frontend with a Django REST Framework backend.',
      "Architected a real-time 'Decision Engine' dashboard for employers and shipped it in Docker containers for consistent environments.",
      'Implemented role-based authorization with JWT, strictly isolating employer and candidate data, and documented the API in Swagger (OpenAPI).',
      'Kept the architecture clean with Git, isolating features and safely merging complex database syncs.',
    ],
  },
  {
    role: 'Technical & Content',
    company: 'DatingAI Pro, AfterMarkett, TAC, Chronix Media',
    points: [
      'Supported product documentation, UI/UX enhancement and workflow automation.',
      'Contributed to cross-functional tech and marketing projects, pairing digital content with platform optimization.',
      'Coordinated live online events, keeping operations smooth and users engaged.',
    ],
  },
  {
    role: 'Core Committee & Founding Member',
    company: 'Coding & Pop Culture and Entertainment Clubs, MIT',
    points: [
      'Ran workshops on DSA, Git and Java, mentoring 100+ peers.',
      'Organized coding competitions and hackathons with structured team coordination.',
      "Grew the club's technical content repository and online visibility.",
      'Founded and managed a 200+ member community for digital creativity and events.',
    ],
  },
]

export const skills = [
  { group: 'Languages', items: ['Python', 'C++', 'C#', 'Java', 'C', 'JavaScript', 'TypeScript', 'SQL', 'Verilog'] },
  { group: 'AI & computer vision', items: ['OpenCV', 'MediaPipe', 'Computer vision', 'Machine learning', 'Behaviour analysis'] },
  { group: 'Web', items: ['React', 'Django', 'DRF', 'Flask', 'HTML/CSS', 'REST APIs', 'JWT', 'Swagger'] },
  { group: 'Data, cloud & infra', items: ['PostgreSQL', 'SQLite', 'Docker', 'Linux', 'Cloud computing', 'Distributed systems'] },
  { group: 'Security & networking', items: ['Malware analysis', 'Threat modeling', 'RSA & hashing', 'Secure file transfer', 'TCP/IP', 'Wireshark'] },
  { group: 'Graphics, audio & games', items: ['Unity', 'Unreal', 'Blender', 'Vulkan', 'Ray tracing', 'DAW', 'MIDI routing'] },
  { group: 'Dev tools', items: ['Git', 'VSCode', 'Eclipse', 'Postman', 'ThunderClient', 'Jira', 'PyTest', 'Jest'] },
  { group: 'Also handy', items: ['Figma', 'Notion', 'Trello', 'Procreate', 'Canva', 'Leadership', 'Strategic thinking'] },
]

export const education = [
  {
    degree: 'B.Tech, Computer Science & Engineering',
    school: 'Manipal Institute of Technology, Bengaluru',
    years: '2021–2025',
    gpa: '7.0',
    coursework: 'DSA, software engineering & testing, networks, cloud, IoT, distributed & parallel computing, design patterns, digital system design, game programming',
  },
  {
    degree: 'Pre-University (PCM-C)',
    school: 'Expert Pre-University College',
    years: '2019–2021',
    gpa: '9.4',
    coursework: 'C++, OOP, Boolean algebra, intro data structures, algorithms, maths, physics, chemistry',
  },
]
