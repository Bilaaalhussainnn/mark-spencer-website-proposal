export const proposal = {
  client: "Mark Spencer",
  title: "Mark Spencer’s Website Proposal",
  business: "Everyday Meal Restaurant",
  location: "Florida",
  issueDate: "November 16, 2026",
  issueDateISO: "2026-11-16",
  handoff: "January 27–28, 2027",
  domain: "everyday-mealrestaurant.com",
  domainStatus: "Available when checked. Final availability is confirmed at registration.",
  studio: "Orbilect SEO",
  website: "https://orbilectseo.com/",
  termsUrl: "https://orbilectseo.com/terms-and-conditions",
  privacy: "https://orbilectseo.com/privacy-policy",
  calendly: "https://calendly.com/bilaalhussain/software-project-discovery-call-with-bilal",
  upfrontPercent: 40,
  plans: [
    {
      title: "Restaurant website",
      price: 21000,
      description: "Guest website, direct reservations, a private restaurant dashboard, launch setup, and 12 months of support.",
      includes: ["All 36 proposal deliverables", "Reservation and guest-support tools", "SEO foundations and tested handoff"],
    },
    {
      title: "Website + HR and finance",
      price: 25000,
      description: "The full restaurant website scope plus a dedicated browser-based HR and finance module at /admin.",
      includes: ["Staff attendance tracking", "Staff pay records", "Monthly payroll management"],
    },
  ],
};

export const deliverables = [
  {
    id: "guest",
    title: "Guest website",
    intro: "Give diners the information they need to decide, visit, or book.",
    items: [
      ["Custom homepage", "Introduce the restaurant and make the menu, reservations, and directions easy to find."],
      ["Responsive design", "Build and test layouts for phones, tablets, and desktops."],
      ["Our Story page", "Present the restaurant’s concept and background using approved copy and visuals."],
      ["Hours and location", "Give guests a dedicated place to check hours, address, and visiting information."],
      ["Menu page", "Present approved food and drink items in clearly organized, readable sections."],
      ["Photo gallery", "Showcase approved food, venue, and restaurant photos in an optimized gallery."],
    ],
  },
  {
    id: "content",
    title: "Content and discovery",
    intro: "Make restaurant information easy to use and understand.",
    items: [
      ["English website copy", "Structure and polish the approved content around common guest questions."],
      ["Contact form", "Give guests a direct way to send an inquiry to the restaurant."],
      ["Google Maps integration", "Connect the location section to the restaurant’s published map information."],
      ["Social profile links", "Connect the website to the restaurant’s approved social profiles."],
      ["Sharing metadata", "Provide page titles, descriptions, and images for shared links."],
      ["Image optimization", "Serve appropriately sized images and add descriptive alternative text where relevant."],
    ],
  },
  {
    id: "booking",
    title: "Direct reservations",
    intro: "Give guests a dedicated booking flow built around the restaurant.",
    items: [
      ["Reservation entry point", "Make the booking action easy to reach from key guest pages."],
      ["Guest booking form", "Collect party size, requested date and time, and contact details."],
      ["Availability rules", "Configure bookable hours, service windows, and restrictions agreed at kickoff."],
      ["Reservation records", "Store booking details in a structured database available to authorized staff."],
      ["Guest confirmations", "Send confirmation messages for the agreed booking workflow."],
      ["Booking validation", "Check required fields and handle unavailable or invalid booking requests clearly."],
    ],
  },
  {
    id: "operations",
    title: "Staff tools and guest support",
    intro: "Give the restaurant team a practical way to manage reservations.",
    items: [
      ["Private staff dashboard", "Provide a browser-based admin area for reservation operations."],
      ["Staff authentication", "Require authorized sign-in for access to private dashboard features."],
      ["Reservation queue", "Let staff review upcoming reservations and the information attached to each."],
      ["Booking status controls", "Support the agreed process for confirming, changing, and cancelling bookings."],
      ["Guest chat support", "Add the agreed AI-assisted or managed chat experience for common guest questions."],
      ["Staff walkthrough", "Show the designated team how to use the booking dashboard and guest-support tools."],
    ],
  },
  {
    id: "search",
    title: "Search and launch foundations",
    intro: "Help guests and search engines find the right information.",
    items: [
      ["On-page SEO", "Set page metadata, heading structure, and descriptive navigation."],
      ["Technical SEO", "Set canonical URLs, sitemap, crawl rules, and launch indexing controls."],
      ["Restaurant structured data", "Add JSON-LD for relevant restaurant details using approved information."],
      ["Local search consistency", "Align the restaurant’s published name, address, hours, and contact details."],
      ["Search Console setup", "Prepare verification, sitemap submission, and initial indexing checks."],
      ["Analytics setup", "Prepare the agreed measurement tags and privacy-aware configuration."],
    ],
  },
  {
    id: "handoff",
    title: "Testing, handoff, and support",
    intro: "Test the guest and staff experience before release, then support the live site.",
    items: [
      ["Domain and hosting setup", "Configure the agreed domain, hosting, HTTPS, and deployment settings."],
      ["Email and launch configuration", "Set up the agreed transactional sender and check launch notifications."],
      ["Cross-device and accessibility checks", "Review guest pages, forms, navigation, and key accessibility checks."],
      ["Booking acceptance testing", "Test the reservation path from the guest submission through staff handling."],
      ["Release and ownership handoff", "Provide the agreed access, deployment information, and operating notes."],
      ["12 months of support", "Cover updates, bug fixes, backup checks, routine content changes, and technical help from public launch."],
    ],
  },
];

export const timeline = [
  ["Nov 16–22, 2026", "Kickoff and scope", "Confirm restaurant details, guest journeys, booking rules, content inputs, and approval points."],
  ["Nov 23–29, 2026", "Design direction", "Review the visual system, homepage direction, and the key guest and staff flows."],
  ["Nov 30–Dec 6, 2026", "Core website pages", "Build the homepage and primary restaurant, location, and contact pages."],
  ["Dec 7–13, 2026", "Menu and media", "Build the menu and gallery and prepare approved images for on-site use."],
  ["Dec 14–20, 2026", "Reservation engine", "Implement the booking form, data, availability rules, and validation."],
  ["Dec 21–27, 2026", "Staff dashboard", "Build authorized access and the staff-facing reservation view."],
  ["Dec 28, 2026–Jan 3, 2027", "Booking operations", "Connect confirmations and test reservation status changes."],
  ["Jan 4–10, 2027", "Guest chat and search", "Configure guest support, page search fundamentals, and structured data."],
  ["Jan 11–17, 2027", "Local launch setup", "Prepare domain, hosting, email, analytics, and local-search details."],
  ["Jan 18–24, 2027", "Acceptance and QA", "Review the staging site, run acceptance tests, and address agreed launch fixes."],
  ["Jan 25–28, 2027", "Release and handoff", "Complete final checks and target tested delivery on January 27–28."],
];

export const stack = [
  ["Guest experience", "Next.js · React · TypeScript · CSS Modules", "Responsive pages, optimized rendering, and an editable interface."],
  ["Reservations and admin", "Node.js · Next.js server routes · PostgreSQL · Supabase Auth", "Booking rules, structured records, and private staff access."],
  ["Media and communication", "Supabase Storage · Next.js Image · Resend · OpenAI API or Crisp", "Restaurant media, confirmations, and the agreed guest chat implementation."],
  ["Discovery and quality", "Google Maps · GA4 · Search Console · JSON-LD · Playwright · axe · Lighthouse", "Location discovery, measurement, search setup, and release testing."],
  ["Delivery infrastructure", "Managed Node.js hosting · GitHub Actions", "Agreed hosting and repeatable deployment for the restaurant website."],
];

export const terms = [
  ["Payments and kickoff", "40% is due on acceptance before kickoff so we can allocate the team and begin work. The remaining 60% is due at tested delivery."],
  ["Delivery and public launch", "January 27–28, 2027 is the target for tested handoff, subject to timely kickoff, content, access, and approvals. The public launch can happen in January or be scheduled for February by agreement."],
  ["Progress updates", "We’ll share weekly progress emails and arrange weekly or biweekly calls as agreed."],
  ["Hosting and third-party costs", "Hosting setup and deployment are included. The restaurant pays approved domain, hosting, and other vendor fees directly."],
  ["Ongoing support", "Support runs for 12 months from public launch. Post-year-one support and major new features are quoted separately."],
  ["Project boundaries", "Separate Android and iOS applications are outside this website scope. The HR and finance module is included only in the $25,000 option."],
];
