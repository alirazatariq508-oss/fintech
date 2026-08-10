import { Course } from '../types';

export const COURSES_DATA: Course[] = [
  {
    id: 'airdrop-mastery-course',
    title: 'Airdrop Mastery Course: From Zero to Web3 Rewards',
    slug: 'airdrop-mastery-course',
    tagline: 'Learn step-by-step strategies to qualify for high-tier crypto airdrops safely and systematically.',
    description: 'Master the art and science of crypto airdrops. Discover legitimate protocols, automated workflows, sybil avoidance techniques, multi-chain interaction strategies, and risk management to maximize your Web3 reward allocation.',
    category: 'Trading & Airdrops',
    level: 'Beginner',
    rating: 4.9,
    reviewCount: 384,
    studentCount: 2450,
    durationHours: 18,
    lessonsCount: 42,
    priceUSD: 99,
    originalPriceUSD: 199,
    pricePKR: 28000,
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1000&q=80',
    badge: 'Best Seller',
    instructor: {
      name: 'Mentors Team',
      role: 'Lead Web3 & On-Chain Analyst',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    updatedDate: 'August 2026',
    whatYouWillLearn: [
      'Identify early-stage Web3 projects with confirmed or high-probability retroactive token drops',
      'Execute multi-chain on-chain interactions (Bridges, Swaps, Liquidity Pools, Staking)',
      'Understand Sybil prevention mechanisms (Gitcoin Passport, Layer Zero, Linea Voyagers)',
      'Manage multiple EVM & Solana wallets with strict security & capital risk management',
      'Track gas fees, mainnet vs testnet workflows, and claim timelines'
    ],
    requirements: [
      'Basic computer literacy and internet connection',
      'No prior blockchain programming experience needed'
    ],
    modules: [
      {
        id: 'm1',
        title: 'Module 1: Fundamentals of Crypto Airdrops & Web3 Ecosystem',
        lessonsCount: 8,
        duration: '3h 15m',
        lessons: [
          { id: 'l1', title: 'Welcome to Airdrop Mastery', duration: '12m', isPreview: true, type: 'video' },
          { id: 'l2', title: 'Why Web3 Projects Distribute Airdrops', duration: '20m', isPreview: true, type: 'video' },
          { id: 'l3', title: 'Setting Up Secure Web3 Wallets (MetaMask, Rabby, Phantom)', duration: '35m', isPreview: false, type: 'video' },
          { id: 'l4', title: 'Safety First: Cold Storage, Burner Wallets & Scams Avoidance', duration: '40m', isPreview: false, type: 'video' }
        ]
      },
      {
        id: 'm2',
        title: 'Module 2: Layer 2s, Bridges & Testnet Farming Strategies',
        lessonsCount: 12,
        duration: '5h 30m',
        lessons: [
          { id: 'l5', title: 'Arbitrum, Optimism, zkSync & Linea Deep Dive', duration: '45m', isPreview: false, type: 'video' },
          { id: 'l6', title: 'Cross-Chain Bridges & Cross-Message Protocol Farming', duration: '50m', isPreview: false, type: 'video' },
          { id: 'l7', title: 'Executing Zero-Cost Testnet Routes (Berachain, Monad, Movement)', duration: '60m', isPreview: false, type: 'video' }
        ]
      },
      {
        id: 'm3',
        title: 'Module 3: Advanced Sybil Defense & Gas Optimization',
        lessonsCount: 10,
        duration: '4h 45m',
        lessons: [
          { id: 'l8', title: 'How Anti-Sybil Algorithms Flag Wallets', duration: '40m', isPreview: false, type: 'video' },
          { id: 'l9', title: 'Wallet Aging, Organic Tx Schedules & Liquidity Seeding', duration: '55m', isPreview: false, type: 'video' }
        ]
      }
    ]
  },
  {
    id: 'web3-marketing-skills',
    title: 'Web3 Marketing Skills: Building & Scaling Decentralized Brands',
    slug: 'web3-marketing-skills',
    tagline: 'Learn quest platforms, community building, tokenomics marketing, and contributor growth.',
    description: 'Transform your marketing expertise for the decentralized era. Master quest platforms like Galxe and Zealy, Telegram & Discord community growth, Web3 influencer relations, and organic user retention strategies.',
    category: 'Web3 & Blockchain',
    level: 'Intermediate',
    rating: 4.8,
    reviewCount: 210,
    studentCount: 1320,
    durationHours: 15,
    lessonsCount: 36,
    priceUSD: 120,
    originalPriceUSD: 240,
    pricePKR: 33600,
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
    badge: 'Featured',
    instructor: {
      name: 'Fintech Edge Lead Marketer',
      role: 'Growth Strategist & Web3 Advisor',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    updatedDate: 'July 2026',
    whatYouWillLearn: [
      'Design high-conversion campaign quests on Galxe, Layer3, and TaskOn',
      'Build and nurture engaged Discord and Telegram communities with bot automation',
      'Construct Web3 PR & influencer marketing strategies with verifiable ROI',
      'Analyze on-chain user growth metrics using Dune Analytics & Token Terminal'
    ],
    requirements: [
      'Basic understanding of digital marketing principles',
      'Familiarity with social media platforms (X/Twitter, Discord, Telegram)'
    ],
    modules: [
      {
        id: 'wm1',
        title: 'Module 1: Foundations of Web3 Marketing vs Web2 Marketing',
        lessonsCount: 6,
        duration: '2h 45m',
        lessons: [
          { id: 'wl1', title: 'The Paradigm Shift in Web3 Growth', duration: '20m', isPreview: true, type: 'video' },
          { id: 'wl2', title: 'Community-First Acquisition Playbook', duration: '35m', isPreview: false, type: 'video' }
        ]
      },
      {
        id: 'wm2',
        title: 'Module 2: Quest Platforms & Gamified User Onboarding',
        lessonsCount: 10,
        duration: '4h 15m',
        lessons: [
          { id: 'wl3', title: 'Setting Up Galxe Space & OAT Campaigns', duration: '50m', isPreview: false, type: 'video' },
          { id: 'wl4', title: 'Zealy Sprint Design for Viral Retention', duration: '45m', isPreview: false, type: 'video' }
        ]
      }
    ]
  },
  {
    id: 'zero-cost-earning-skill',
    title: 'Zero-Cost Earning Skill: Web3 Bounty & Micro-Task Blueprint',
    slug: 'zero-cost-earning-skill',
    tagline: 'Start earning in crypto without initial capital through testnets, bounties, and community roles.',
    description: 'A comprehensive starter kit designed for students and beginners to start earning crypto income without risking upfront funds. Learn community management, content creation bounties, bug bounties, and testnet rewards.',
    category: 'Trading & Airdrops',
    level: 'Beginner',
    rating: 4.95,
    reviewCount: 450,
    studentCount: 3100,
    durationHours: 12,
    lessonsCount: 28,
    priceUSD: 49,
    originalPriceUSD: 99,
    pricePKR: 14000,
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=1000&q=80',
    badge: 'Hot',
    instructor: {
      name: 'Fintech Edge Community Leads',
      role: 'Bounty & Ambassador Mentors',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    },
    updatedDate: 'August 2026',
    whatYouWillLearn: [
      'Discover high-paying Web3 bounty platforms (Superteam, Dework, Layer3)',
      'Become an official Ambassador for emerging blockchain protocols',
      'Earn from micro-tasking, translation, moderation, and infographic creation',
      'Safely cash out crypto earnings to local banking / P2P with zero loss'
    ],
    requirements: [
      'No prior investment required ($0 budget starting path)',
      'Willingness to spend 1-2 hours daily completing tasks'
    ],
    modules: [
      {
        id: 'zc1',
        title: 'Module 1: Zero-Capital Web3 Income Ecosystem',
        lessonsCount: 8,
        duration: '3h 00m',
        lessons: [
          { id: 'zl1', title: 'Introduction to Zero-Cost Crypto Earnings', duration: '15m', isPreview: true, type: 'video' },
          { id: 'zl2', title: 'Navigating Superteam Bounties & Earn Platforms', duration: '40m', isPreview: false, type: 'video' }
        ]
      }
    ]
  },
  {
    id: 'on-chain-interactions',
    title: 'On-Chain Interactions & Smart Contract Execution',
    slug: 'on-chain-interactions',
    tagline: 'Deep dive into EVM transactions, smart contract inspection, and DeFi protocols.',
    description: 'Master on-chain tools, block explorers (Etherscan, Arbiscan, Solscan), gas optimization, smart contract interaction directly via ABI, Liquidity provision, and yield farming safety protocols.',
    category: 'Web3 & Blockchain',
    level: 'Intermediate',
    rating: 4.7,
    reviewCount: 165,
    studentCount: 890,
    durationHours: 16,
    lessonsCount: 34,
    priceUSD: 110,
    originalPriceUSD: 220,
    pricePKR: 30800,
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1000&q=80',
    badge: 'New',
    instructor: {
      name: 'Fintech Edge Tech Lead',
      role: 'Blockchain Architect',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    },
    updatedDate: 'July 2026',
    whatYouWillLearn: [
      'Read and inspect verified smart contract code on Etherscan/BscScan',
      'Interact directly with Write/Read contract functions during high-demand mints',
      'Calculate impermanent loss and yield strategies in DEX Liquidity Pools',
      'Audit token approvals and revoke risky permissions using Revoke.cash'
    ],
    requirements: [
      'Basic familiarity with crypto wallets like MetaMask or Phantom'
    ],
    modules: [
      {
        id: 'oc1',
        title: 'Module 1: Block Explorers & Smart Contract Verification',
        lessonsCount: 7,
        duration: '3h 30m',
        lessons: [
          { id: 'ol1', title: 'Mastering Etherscan, Arbiscan & Solscan', duration: '30m', isPreview: true, type: 'video' },
          { id: 'ol2', title: 'Reading Smart Contract ABI & Reading State Variables', duration: '45m', isPreview: false, type: 'video' }
        ]
      }
    ]
  },
  {
    id: 'ai-in-fintech-automation',
    title: 'AI in FinTech: Algorithmic Insights & Automated Trading Systems',
    slug: 'ai-in-fintech-automation',
    tagline: 'Leverage Python, AI language models, and trading bots for financial analysis.',
    description: 'Learn how modern FinTech companies and quantitative traders leverage Artificial Intelligence, Large Language Models, Sentiment Analysis, and Automated Trading API integrations for financial forecasting.',
    category: 'FinTech & AI',
    level: 'Advanced',
    rating: 4.9,
    reviewCount: 198,
    studentCount: 940,
    durationHours: 20,
    lessonsCount: 45,
    priceUSD: 150,
    originalPriceUSD: 300,
    pricePKR: 42000,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
    badge: 'Featured',
    instructor: {
      name: 'Dr. Financial AI',
      role: 'Head of FinTech Innovation',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
    updatedDate: 'August 2026',
    whatYouWillLearn: [
      'Build custom financial sentiment parsers using Gemini & Open-source AI models',
      'Automate crypto market data fetching from Binance & CoinGecko APIs',
      'Develop backtested quantitative trading strategies with Python',
      'Implement risk-reward guardrails for algorithmic trading bots'
    ],
    requirements: [
      'Basic knowledge of Python programming or eagerness to learn scripting'
    ],
    modules: [
      {
        id: 'ai1',
        title: 'Module 1: Introduction to AI in Modern Financial Markets',
        lessonsCount: 9,
        duration: '4h 10m',
        lessons: [
          { id: 'ail1', title: 'Overview of AI Transformation in FinTech', duration: '25m', isPreview: true, type: 'video' },
          { id: 'ail2', title: 'Financial Sentiment Analysis with LLMs', duration: '45m', isPreview: false, type: 'video' }
        ]
      }
    ]
  },
  {
    id: 'all-access-bundle-coaching',
    title: 'All-Access Pass + 1-on-1 Mentorship & VIP Community',
    slug: 'all-access-bundle-coaching',
    tagline: 'Unlimited lifetime access to ALL current and future courses, weekly live Q&A, and direct 1-on-1 coaching.',
    description: 'The ultimate transformational package offered by Fintech Edge Institute. Get complete access to every course, direct private mentorship sessions, exclusive Telegram VIP group access, emergency airdrop alerts, and career placement assistance.',
    category: 'All Access',
    level: 'All Levels',
    rating: 5.0,
    reviewCount: 520,
    studentCount: 1850,
    durationHours: 100,
    lessonsCount: 180,
    priceUSD: 299,
    originalPriceUSD: 799,
    pricePKR: 84000,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
    badge: 'Best Seller',
    instructor: {
      name: 'Fintech Edge Institute Founders',
      role: 'Executive Mentors & Industry Leaders',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    updatedDate: 'August 2026',
    whatYouWillLearn: [
      'Full access to ALL 5 flagship courses + upcoming releases',
      'Monthly 1-on-1 coaching call with senior Web3/FinTech mentors',
      'Private Telegram VIP Signal & Airdrop Alert Channel',
      'Direct review of your wallet strategy, CV, and Web3 portfolio',
      'Verified Certificate of Completion & Job Referral Network'
    ],
    requirements: [
      'Open to beginners as well as seasoned professionals'
    ],
    modules: [
      {
        id: 'ab1',
        title: 'VIP Onboarding & Personal Strategy Roadmap',
        lessonsCount: 5,
        duration: '2h 00m',
        lessons: [
          { id: 'abl1', title: 'Setting Up Your VIP Student Profile', duration: '15m', isPreview: true, type: 'video' },
          { id: 'abl2', title: 'Booking Your 1-on-1 Mentorship Session', duration: '10m', isPreview: true, type: 'video' }
        ]
      }
    ]
  }
];
