import { SCHOOL_INFO } from "@/data/schoolInfo";

export interface ChatMessage {
  id: string;
  sender: "mavi" | "user";
  text: string;
  timestamp: number;
  quickActions?: string[];
  links?: {
    label: string;
    url: string;
    external?: boolean;
    isPrimary?: boolean;
  }[];
  showLeadForm?: boolean;
}

export const INITIAL_QUICK_ACTIONS = [
  "Admissions",
  "Academics",
  "Campus & Facilities",
  "School Life",
  "Contact School",
  "Location",
];

export const MAVI_SYSTEM_PROMPT = `
You are Mavi, the official virtual assistant for MacVision Aviraj World School in Dharuhera, Haryana.
Provide concise, accurate, warm and professional assistance to parents, prospective students and visitors.
Only provide information present in the school's approved knowledge base or official website content.
Do not invent school statistics, fees, facilities, admission requirements, dates, awards, affiliations, staff information or contact details.
If information is unavailable, clearly state that the information is not currently available and direct the visitor to contact the school directly.

Verified School Facts:
- School: MacVision Aviraj World School (founded 2013)
- Leadership: CEO J.P. Yadav (MacVision Group of Schools)
- Affiliation: Central Board of Secondary Education (CBSE, New Delhi), Senior Secondary
- Campus: 10+ acres sprawling green campus on Rajpura Road, Alamgirpur, Dharuhera, Haryana 123106
- Programs: Pre-Nursery through Grade XII (Science, Commerce, Humanities)
- Student-Teacher Ratio: 15:1
- Key Facilities: Digital classrooms, STEM composite science labs, multi-tier central library knowledge atrium, decommissioned fighter jet installation on lawns, 100% GPS-monitored AC transport fleet, CCTV surveillance.
- Contact: Phone +91 8683 901 901, Alternate +91 8683 801 801, Email admissions@macvision.org / info@macvision.org
- Visiting Hours: Monday to Saturday 8:00 AM – 3:30 PM (Second Saturdays closed)
- Location Link: https://maps.app.goo.gl/jU16ATZJsVmuttFx7?g_st=iw
`.trim();

/**
 * Intelligent local response engine for Mavi.
 * Used when no external LLM API key is configured or as an instant local resolver.
 */
export function getLocalMaviResponse(input: string): {
  text: string;
  quickActions?: string[];
  links?: { label: string; url: string; external?: boolean; isPrimary?: boolean }[];
  showLeadForm?: boolean;
} {
  const query = input.trim().toLowerCase();

  // 1. Initial Greeting / Casual
  if (
    query === "hello" ||
    query === "hi" ||
    query === "hey" ||
    query === "start" ||
    query === "menu"
  ) {
    return {
      text: "Hello! I'm Mavi, the MacVision School Assistant. How can I help you today?",
      quickActions: INITIAL_QUICK_ACTIONS,
    };
  }

  // 2. Admissions Branch
  if (
    query.includes("admission") ||
    query.includes("admissions") ||
    query.includes("apply") ||
    query.includes("enroll") ||
    query.includes("registration")
  ) {
    if (query.includes("process") || query.includes("procedure") || query.includes("steps") || query === "admission process") {
      return {
        text: "The admission process for Academic Session 2026–27 at MacVision Aviraj World School consists of four straightforward steps:\n\n1. Online Enquiry or Campus Registration\n2. Parent & Student Campus Interaction / Age-appropriate Assessment\n3. Verification of Academic & Identity Records\n4. Enrollment Confirmation & Orientation",
        quickActions: ["Eligibility", "Start Admission Enquiry", "Contact School"],
        links: [
          { label: "Start Admission Enquiry", url: "/contact", isPrimary: true },
          { label: "Explore Admissions Guide", url: "/admissions" },
        ],
      };
    }

    if (query.includes("eligibility") || query.includes("age") || query.includes("criteria") || query === "eligibility") {
      return {
        text: "Admission eligibility is based on age guidelines as of 31st March:\n\n• Pre-Nursery: 3+ years\n• Nursery: 3.5+ years\n• KG: 4+ years\n• Grade I: 5+ years\n• Grades II–XII: Based on previous academic records, transfer certificate, and subject stream availability.",
        quickActions: ["Admission Process", "Start Admission Enquiry", "Academics"],
        links: [
          { label: "Start Admission Enquiry", url: "/contact", isPrimary: true },
        ],
      };
    }

    if (query.includes("enquire") || query.includes("enquiry") || query === "enquire now" || query.includes("start admission enquiry")) {
      return {
        text: "We invite you to submit an admission enquiry or schedule a guided campus tour. Our admissions office will get in touch with you shortly.",
        quickActions: ["Contact School", "Location", "Academics"],
        links: [
          { label: "Complete Online Enquiry Form", url: "/contact", isPrimary: true },
        ],
        showLeadForm: true,
      };
    }

    return {
      text: "I can help you with admission-related information. What would you like to know?",
      quickActions: ["Admission Process", "Eligibility", "Enquire Now", "Contact School"],
    };
  }

  // 3. Location & Directions
  if (
    query.includes("location") ||
    query.includes("address") ||
    query.includes("where") ||
    query.includes("map") ||
    query.includes("directions") ||
    query.includes("reach") ||
    query.includes("dharuhera")
  ) {
    return {
      text: "MacVision Aviraj World School is located on Rajpura Road, Dharuhera, Haryana.",
      quickActions: ["Contact School", "Campus & Facilities", "Admissions"],
      links: [
        {
          label: "View on Google Maps",
          url: SCHOOL_INFO.googleMapsUrl,
          external: true,
          isPrimary: true,
        },
        {
          label: "Campus Access Guide",
          url: "/contact",
        },
      ],
    };
  }

  // 4. Contact School & Visiting Hours
  if (
    query.includes("contact") ||
    query.includes("phone") ||
    query.includes("number") ||
    query.includes("email") ||
    query.includes("call") ||
    query.includes("office") ||
    query.includes("timing") ||
    query.includes("hours")
  ) {
    return {
      text: `Here is the verified contact information for MacVision Aviraj World School:\n\n• Phone: ${SCHOOL_INFO.phone}\n• Alternate: ${SCHOOL_INFO.altPhone}\n• Email: ${SCHOOL_INFO.email}\n• Visiting Hours: ${SCHOOL_INFO.visitingHours}\n• Address: ${SCHOOL_INFO.fullAddress}`,
      quickActions: ["Send an Enquiry", "Location", "Admissions"],
      links: [
        { label: "Send an Enquiry", url: "/contact", isPrimary: true },
        { label: `Call ${SCHOOL_INFO.phone}`, url: `tel:${SCHOOL_INFO.phone.replace(/\\s+/g, "")}`, external: true },
      ],
    };
  }

  // 5. Academics & Curriculum
  if (
    query.includes("academic") ||
    query.includes("academics") ||
    query.includes("curriculum") ||
    query.includes("cbse") ||
    query.includes("syllabus") ||
    query.includes("grade") ||
    query.includes("stream") ||
    query.includes("subject")
  ) {
    return {
      text: "MacVision Aviraj World School follows the CBSE curriculum with an emphasis on experiential learning:\n\n• Early Years (Pre-Nursery – KG): Foundational play-based and phonics framework\n• Primary & Middle (Grades I – VIII): Inquiry-led conceptual grounding\n• Senior Secondary (Grades IX – XII): Rigorous board preparation across Science, Commerce, and Humanities streams.\n• Student-Teacher Ratio: 15:1 for individual mentorship.",
      quickActions: ["Admissions", "Campus & Facilities", "Contact School"],
      links: [
        { label: "Explore Academics", url: "/academics" },
        { label: "Enquire for Admission", url: "/contact", isPrimary: true },
      ],
    };
  }

  // 6. Campus & Facilities
  if (
    query.includes("campus") ||
    query.includes("facilit") ||
    query.includes("lab") ||
    query.includes("library") ||
    query.includes("bus") ||
    query.includes("transport") ||
    query.includes("hostel") ||
    query.includes("boarding") ||
    query.includes("jet") ||
    query.includes("infrastructure")
  ) {
    return {
      text: "Our 10+ acre campus in Dharuhera is designed to provide an inspiring educational environment:\n\n• Advanced composite STEM Science & Computer Laboratories\n• Multi-tier Central Library knowledge atrium\n• Sports facilities: Cricket pitch, football turf, basketball and badminton courts\n• Real decommissioned fighter jet installation on campus lawns\n• 100% GPS-tracked air-conditioned school transit fleet\n• 24/7 CCTV surveillance and campus security.",
      quickActions: ["School Life", "Admissions", "Location", "Contact School"],
      links: [
        { label: "Discover Campus Life", url: "/campus-life" },
        { label: "Schedule Campus Visit", url: "/contact", isPrimary: true },
      ],
    };
  }

  // 7. School Life & Extracurriculars
  if (
    query.includes("life") ||
    query.includes("activity") ||
    query.includes("activities") ||
    query.includes("sport") ||
    query.includes("sports") ||
    query.includes("club") ||
    query.includes("event") ||
    query.includes("music") ||
    query.includes("dance")
  ) {
    return {
      text: "Life at MacVision balances rigorous academics with vibrant co-curricular activities:\n\n• Competitive sports coaching: Cricket, Football, Basketball, Athletics\n• Visual & performing arts studios, classical & contemporary music\n• Robotics, coding, and innovation clubs\n• Debating society and inter-school leadership symposiums\n• Educational field visits and community outreach programs.",
      quickActions: ["Campus & Facilities", "Academics", "Admissions"],
      links: [
        { label: "View Campus Life", url: "/campus-life" },
        { label: "Contact Admissions", url: "/contact", isPrimary: true },
      ],
    };
  }

  // 8. Leadership & About
  if (
    query.includes("about") ||
    query.includes("founder") ||
    query.includes("ceo") ||
    query.includes("yadav") ||
    query.includes("principal") ||
    query.includes("history") ||
    query.includes("established")
  ) {
    return {
      text: `Founded in ${SCHOOL_INFO.establishedYear}, MacVision Aviraj World School operates under the leadership of CEO ${SCHOOL_INFO.ceo.name} (MacVision Group of Schools). The institution is committed to uplifting educational standards in Haryana through holistic development, strong moral character, and future-ready skills.`,
      quickActions: ["Academics", "Admissions", "Contact School"],
      links: [
        { label: "Read About Our Philosophy", url: "/about" },
      ],
    };
  }

  // 9. Fee Structure Escalation (Never hallucinate fees)
  if (query.includes("fee") || query.includes("fees") || query.includes("cost") || query.includes("tuition")) {
    return {
      text: "The official fee structure depends on the grade level and opting for transport services. To ensure complete clarity, our admissions department provides the detailed official schedule during the campus interaction.",
      quickActions: ["Start Admission Enquiry", "Contact School"],
      links: [
        { label: "Request Fee Schedule via Enquiry", url: "/contact", isPrimary: true },
        { label: `Call Admissions: ${SCHOOL_INFO.phone}`, url: `tel:${SCHOOL_INFO.phone.replace(/\\s+/g, "")}`, external: true },
      ],
    };
  }

  // 10. Fallback / Escalation (Strictly follow section 20)
  return {
    text: "I don't have that information available right now. You can contact the school directly for the most accurate information.",
    quickActions: ["Contact School", "Admissions", "Location"],
    links: [
      { label: "Contact School", url: "/contact", isPrimary: true },
      { label: `Call ${SCHOOL_INFO.phone}`, url: `tel:${SCHOOL_INFO.phone.replace(/\\s+/g, "")}`, external: true },
    ],
  };
}
