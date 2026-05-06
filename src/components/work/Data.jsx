import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
// import Work3 from "../../assets/work3.jpg";
import Work4 from "../../assets/work4.jpg";

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "Whatsapp ChatBot",
    description:
      "Built a service ticket booking system integrated with a Meta WhatsApp chatbot to automate raising and tracking service requests through real-time conversational flow.",
    category: "app",
    caseStudy: false,
    link: "https://github.com/Inasync-io/wa-chatbot",
  },
  {
    id: 2,
    image: Work2,
    title: "Warranty Registration System",
    description:
      "A web-based warranty registration system that allows customers to register their products online and access warranty information easily.",
    link: "https://www.figma.com/proto/0D6nLBEFAGCTeZNJ13D3MS/Dashboard?node-id=92-842",
    caseStudy: false,
    category: "web",
  },
  // {
  //   id: 3,
  //   image: Work3,
  //   title: "Brand design",
  //   category: "design",
  //   link: "https://www.behance.net/nrogith",
  // },
  {
    id: 4,
    image: Work4,
    title: "Service Request Management",
    description:
      "Designed and developed an admin dashboard to verify service issues and efficiently assign requests to nearby mechanics for faster resolution.",
    category: "web",
    caseStudy: false,
    link: "https://github.com/Inasync-io/fsm-dashboard",
  },
];

export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "Web",
  },
  {
    name: "app",
  },
  {
    name: "design",
  },
];
