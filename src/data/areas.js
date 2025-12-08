// Centralised content for each area of law. The estate/probate entry keeps
// the fully authored content from the original page. Other areas reuse the
// same UI with sensible generic copy so every route renders without needing
// separate pages.

const createGenericContent = ({ slug, title, description }) => {
  const lower = title.toLowerCase();
  const summary = description || `Get clear, plain-language help on ${lower}.`;

  return {
    slug,
    breadcrumbLabel: title,
    breadcrumbHref: `/en-us/${slug}`,
    heroTitle: `Free AI help for ${lower}`,
    introText: `${summary} Our AI assistant answers common questions, outlines options, and highlights when speaking with a lawyer could help.`,
    moreInfoText: `A quick summary about ${lower} in the United States`,
    moreInfoHref: `/en-us/${slug}/summary`,
    introImage: '/assets/default-area-of-law.webp',
    subcategoriesTitle: `What ${lower} issues can our AI legal assistant help you with`,
    subcategoriesDescription: `Our AI legal assistant is trained to help with a broad range of ${lower} matters. Here are the main areas where it can provide instant support:`,
    subCategories: [
      {
        title: `${title} basics`,
        image: '/assets/default-area-of-law.webp',
        description: `Understand the foundations of ${lower}, key terminology, and typical processes.`
      },
      {
        title: `${title} documents`,
        image: '/assets/default-area-of-law.webp',
        description: `Learn what documents are commonly required, how to prepare them, and what to watch for.`
      },
      {
        title: `${title} disputes`,
        image: '/assets/default-area-of-law.webp',
        description: `Get guidance on resolving common disputes and when to consider professional advice.`
      }
    ],
    whyUseTitle: `Why use AI for ${lower} help`,
    whyUseDescription: `When dealing with ${lower}, processes can be confusing. LawConnect helps you understand your rights and responsibilities without hassle.`,
    whyUseSections: [
      {
        title: `Built on reliable ${lower} information`,
        image: '/assets/default-area-of-law.webp',
        description: `Quality guidance based on widely accepted principles so you can make informed decisions.`
      },
      {
        title: `Instant help to understand your options`,
        image: '/assets/default-area-of-law.webp',
        description: `Clear explanations of common scenarios, timelines, and next steps for your situation.`
      },
      {
        title: `Plain language that's simple to understand`,
        image: '/assets/default-area-of-law.webp',
        description: `Confidential, pressure-free answers that help you move forward with confidence.`
      }
    ],
    howItWorksTitle: `How to use LawConnect for ${lower} help`,
    howItWorksDescription: `Getting started is straightforward. You're always in control of what you share and the help you receive.`,
    howItWorksSteps: [
      {
        title: 'Describe your situation',
        image: '/assets/how-it-works-step1-desktop.webp',
        description: `Explain your ${lower} issue in your own words—no legal jargon needed.`
      },
      {
        title: 'Get tailored AI assistance',
        image: '/assets/how-it-works-step2-desktop.webp',
        description: `Receive practical guidance, likely options, and considerations specific to your scenario.`
      },
      {
        title: 'Get your personalized report instantly',
        image: '/assets/how-it-works-step3-v2-desktop.webp',
        description: `Download a free summary of your chat to help you decide next steps.`
      }
    ],
    faqTitle: `${title} FAQs`,
    faqItems: [
      { question: `Can the AI assistant help with ${lower}?`, answer: 'Yes. It provides general guidance and next steps so you can act with confidence.' },
      { question: 'Is this service really free?', answer: "Yes. There's no charge to use LawConnect's AI assistant and no obligation to proceed further." },
      { question: `What topics can I ask about in ${lower}?`, answer: `Ask about common processes, documents, timelines, and typical next steps for ${lower}.` },
      { question: 'Will my information stay private?', answer: 'Yes. Your chats are anonymous and secure.' },
      { question: 'Do I always need a lawyer?', answer: 'Not always. The AI can help you decide when professional advice is worthwhile.' },
      { question: 'Can I get help after hours?', answer: 'Yes. The assistant is available 24/7.' }
    ],
    helpTitle: `Need help with a ${lower} issue?`,
    helpDescription: `Get started by asking any questions about your ${lower} matter`,
  };
};

export const areasOfLawContent = {
  'estate-and-probate-law': {
    slug: 'estate-and-probate-law',
    breadcrumbLabel: 'Estate & probate law',
    breadcrumbHref: '/en-us/estate-and-probate-law',
    heroTitle: 'Free AI help for wills, trusts & estate law',
    introText: "Dealing with wills, trusts, or estate matters? Whether you're planning your estate, administering a loved one's affairs, or navigating inheritance disputes, our AI legal assistant provides clear, helpful information in minutes, completely free. Built on established US estate planning and probate principles, it helps you understand your situation, explore your options, and move forward with confidence.",
    moreInfoText: 'A quick summary about estate and probate law in the United States',
    moreInfoHref: '/en-us/estate-and-probate-law/summary',
    introImage: '/assets/intro-estate-probate.webp',
    subcategoriesTitle: 'What estate and probate law issues can our AI legal assistant help you with',
    subcategoriesDescription: 'Our AI legal assistant is trained to help with a broad range of estate planning and probate law matters. Here are the main areas where it can provide instant support:',
    subCategories: [
      {
        title: 'Making or updating your will',
        image: '/assets/family-property-finances.webp',
        description: 'Considering writing your first will or updating an existing one? Our legal chat assistant explains will requirements, what makes a will valid in your state, witness requirements, and when you might need to update your will. Learn about different types of wills and what happens if you die without one (intestate).'
      },
      {
        title: 'Understanding estate planning options',
        image: '/assets/what-expert-lawyer-referral-2x.webp',
        description: 'Planning how your assets will be distributed? Get clear information about federal estate tax thresholds, lifetime gifts, and how to structure your estate efficiently. Our AI guide explains the basics of estate planning and when professional advice becomes essential for complex situations.'
      },
      {
        title: 'Free help with probate',
        image: '/assets/what-navigating-probate-2x.webp',
        description: 'Dealing with probate after losing someone close? LawConnect clarifies the probate process, when probate is needed, how to file for probate in your state, and your duties as an executor or personal representative. Understand the difference between formal and informal probate procedures, and learn about the timescales involved.'
      },
      {
        title: 'Understanding inheritance & estate taxes',
        image: '/assets/what-letters-admin-2x.webp',
        description: 'Concerned about estate tax implications? Our AI assistant explains current federal estate tax exemptions, state estate taxes, and common strategies for tax reduction. Learn about the annual gift tax exclusion, marital deductions, and when estate taxes become payable.'
      },
      {
        title: 'Setting up or administering a trust',
        image: '/assets/commercial-business-contract.webp',
        description: 'Considering setting up a trust or dealing with trust administration? Get information about different types of trusts, their tax implications, and trustee responsibilities. Our legal chatbot explains revocable living trusts, irrevocable trusts, and when trusts might be appropriate for your circumstances.'
      },
      {
        title: 'Help with wills, trusts & estate disputes',
        image: '/assets/what-will-disputes-2x.webp',
        description: 'Facing a dispute over a will or trust? LawConnect provides information about grounds for contesting wills, claims by omitted heirs or spouses, and disputes between beneficiaries. Understand your rights and options when inheritance matters become contentious.'
      }
    ],
    whyUseTitle: 'Why use AI for estate and probate law help',
    whyUseDescription: "When you're dealing with wills, trusts, probate, or inheritance disputes, legal processes can be confusing and stressful. LawConnect helps you understand your rights and responsibilities without the hassle. Our AI legal assistant provides fast, accurate information for free so you can handle issues with more confidence.",
    whyUseSections: [
      {
        title: "Built on LawConnect's proprietary US legal knowledge base",
        image: '/assets/legal-knowledge.webp',
        description: "LawConnect's AI assistant draws from a comprehensive database of publicly available US estate planning and probate law, including recent legislative changes and established legal principles. You receive quality information specific to federal law and general state law principles, though specific state requirements may vary."
      },
      {
        title: 'Instant help in understanding your options & when to speak to an attorney',
        image: '/assets/always-ready.webp',
        description: 'Access clear, personalized information covering wills, probate, estate taxes, and trust matters. Available 24/7 and completely free with no obligations, LawConnect supports your understanding from your very first inquiry and can help you recognize when professional legal advice is necessary.'
      },
      {
        title: "Plain language legal information that's simple to understand",
        image: '/assets/personalised-legal-information.webp',
        description: 'Your conversations remain completely confidential and secure. Whether asking about will validity, probate procedures, or inheritance disputes, explore your options safely without any pressure to proceed with formal legal action until you\'re ready.'
      }
    ],
    howItWorksTitle: 'How to use LawConnect for wills, trusts & probate help',
    howItWorksDescription: "Getting started is straightforward. You're always in control of the information you share and the help you receive.",
    howItWorksSteps: [
      {
        title: 'Describe your situation',
        image: '/assets/how-it-works-step1-desktop.webp',
        description: "Begin by describing your estate planning or probate concern in your own words, without worrying about legal terminology. Whether you're dealing with estate administration, inheritance disputes, or simply want to understand your rights, our AI legal chat assistant provides clarity without confusion."
      },
      {
        title: 'Get tailored AI assistance',
        image: '/assets/how-it-works-step2-desktop.webp',
        description: "LawConnect provides practical and clear information based on your specific circumstances. You'll receive straightforward explanations covering relevant federal and state law, your rights and obligations, potential options, and practical next steps to help you feel more confident about your position."
      },
      {
        title: 'Get your personalized estate and probate law report instantly',
        image: '/assets/how-it-works-step3-v2-desktop.webp',
        description: "Once you’ve finished chatting with our AI legal chat assistant we’ll send you a personalized report. It's free, fast, and available whenever you need information."
      }
    ],
    faqTitle: 'Wills & probate FAQs',
    faqItems: [
      {
        question: 'Can the AI legal assistant help with estate planning issues?',
        answer: 'Yes, it can. The assistant offers support with wills, probate, trusts, estate taxes, disputes, and general estate planning matters.'
      },
      {
        question: 'Is this service really free?',
        answer: "Yes. There's no charge to use LawConnect's AI assistant and no obligation to take further action."
      },
      {
        question: 'What types of issues can I ask about?',
        answer: 'You can ask about wills, probate, inheritance disputes, estate taxes, trusts, and many other common estate and probate issues.'
      },
      {
        question: 'How much does an estate lawyer cost?',
        answer: 'It varies. Fees depend on your specific situation. The AI can outline typical cost structures and let you know when it might be worthwhile to consult a lawyer. Some lawyers offer fixed rates or free initial consultations.'
      },
      {
        question: 'How long does probate take?',
        answer: 'It depends on the estate. Simple estates may be resolved in months, while more complex matters can take longer. The AI can give you a sense of the likely timeline based on your circumstances.'
      },
      {
        question: 'Will my information stay private?',
        answer: 'Yes. Your chats are anonymous and secure.'
      },
      {
        question: 'Do I need a lawyer for every estate issue?',
        answer: 'Not always. Many estate issues can be resolved with information. The AI can help you decide when legal advice is worth it.'
      },
      {
        question: 'Can I get help on weekends or after hours?',
        answer: 'Yes. The AI assistant is available 24/7 so you can ask a question any time.'
      }
    ],
    helpTitle: 'Need help with a wills, trusts and probate law issue?',
    helpDescription: 'Get started by asking any questions about your wills, trusts and probate law matter'
  },
  'commercial-law': createGenericContent({
    slug: 'commercial-law',
    title: 'Commercial law',
    description: 'Business transactions, contracts, and day-to-day operations guidance.'
  }),
  'criminal-law': createGenericContent({
    slug: 'criminal-law',
    title: 'Criminal law',
    description: 'Information on criminal processes, rights, and sentencing basics.'
  }),
  'employment-law': createGenericContent({
    slug: 'employment-law',
    title: 'Employment law',
    description: 'Fairness for employers and employees across common workplace issues.'
  }),
  'family-law': createGenericContent({
    slug: 'family-law',
    title: 'Family law',
    description: 'Separation, divorce, parenting, and settlement guidance.'
  }),
  'immigration-law': createGenericContent({
    slug: 'immigration-law',
    title: 'Immigration law',
    description: 'Visas, residency, sponsorships, and status information.'
  }),
  litigation: createGenericContent({
    slug: 'litigation',
    title: 'Litigation',
    description: 'Court processes, claims, and dispute resolution essentials.'
  }),
  'personal-injury-law': createGenericContent({
    slug: 'personal-injury-law',
    title: 'Personal injury law',
    description: 'Injury claims, liability, and recovery options.'
  }),
  'property-law': createGenericContent({
    slug: 'property-law',
    title: 'Property law',
    description: 'Property transactions, disputes, and settlements.'
  }),
};

export const defaultAreaSlug = 'estate-and-probate-law';


