import { FaqItem, Testimonial } from '../types';

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'f1',
    question: 'What is Fintech Edge Institute and what programs do you offer?',
    answer: 'Fintech Edge Institute is a premier educational platform providing practical training in FinTech, Blockchain, Web3, and AI. We offer self-paced video courses, hands-on project roadmaps, an All-Access Bundle with 1-on-1 coaching, and career placement support.',
    category: 'General'
  },
  {
    id: 'f2',
    question: 'Do I need prior coding or finance experience to enroll?',
    answer: 'No! Many of our foundational courses, such as Airdrop Mastery and Zero-Cost Earning Skill, are tailored specifically for absolute beginners. Advanced modules clearly state prerequisites like basic Python or crypto wallet usage.',
    category: 'Courses'
  },
  {
    id: 'f3',
    question: 'How long do I have access to the course content?',
    answer: 'Enrolling in any Fintech Edge Institute course gives you lifetime access to all recorded video lessons, downloadable templates, resource sheets, and future curriculum updates.',
    category: 'Courses'
  },
  {
    id: 'f4',
    question: 'What payment methods are supported?',
    answer: 'We accept Credit/Debit Cards (Visa, Mastercard), direct Bank Transfer, EasyPaisa / JazzCash (for Pakistani students), and major Crypto payments (USDT / USDC).',
    category: 'Payment'
  },
  {
    id: 'f5',
    question: 'How does the 1-on-1 Mentorship in the All Access Bundle work?',
    answer: 'When you purchase the All Access Bundle, you unlock direct booking access to our senior mentors. You can schedule 1-on-1 video calls to review your Web3 wallet strategies, CV, portfolio, or custom learning goals.',
    category: 'Coaching'
  },
  {
    id: 'f6',
    question: 'Will I receive a certificate upon completion?',
    answer: 'Yes! Upon completing 100% of course lessons and passing the practical assessment, you will be issued a verifiable digital Fintech Edge Institute Certificate of Completion.',
    category: 'General'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Hamza Malik',
    role: 'Web3 Growth Manager',
    company: 'Decentralized Labs',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    courseTaken: 'Airdrop Mastery & Web3 Marketing',
    content: 'Fintech Edge Institute completely changed my career path. The Airdrop Mastery course taught me systematic strategies that helped me qualify for major Layer 2 drops, and the Web3 Marketing skills landed me a remote role at a Web3 startup!',
    location: 'Lahore, Pakistan'
  },
  {
    id: 't2',
    name: 'Ayesha Khan',
    role: 'FinTech Analyst',
    company: 'PayTech Solutions',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    courseTaken: 'AI in FinTech Automation',
    content: 'The depth of content and hands-on Python scripts in the AI in FinTech course gave me a huge advantage during my interview. The mentors are always active in the community to clear doubts.',
    location: 'Karachi, Pakistan'
  },
  {
    id: 't3',
    name: 'Usman Chaudhry',
    role: 'Full-Time Crypto Researcher',
    company: 'Self-Employed',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    courseTaken: 'All Access Bundle + 1-on-1 Coaching',
    content: 'The All Access Bundle was the best investment I made this year. Having direct 1-on-1 sessions with senior mentors helped me avoid scam protocols and focus strictly on high-yield opportunities.',
    location: 'Islamabad, Pakistan'
  }
];
