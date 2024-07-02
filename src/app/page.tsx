import Card from "@/components/card";
import { User } from "@/types/User"

const users: User[] = [
  {
    id: 1,
    firstName: "Amargo",
    lastName: "Jager",
    email: "ajager0@weebly.com",
    gender: "Female",
    jobTitle: "Registered Nurse",
    jobDescription: "Responsible for providing and coordinating patient care, educating patients about health conditions, and providing advice and emotional support to patients and their family members.",
    image: "https://i.pravatar.cc/300",
    skills: ["patient care", "medical knowledge", "communication", "compassion"]
  },
  {
    id: 2,
    firstName: "Quent",
    lastName: "Clubbe",
    email: "qclubbe1@technorati.com",
    gender: "Male",
    jobTitle: "Account Representative I",
    jobDescription: "Handles customer accounts, provides support to clients, resolves issues, and maintains strong customer relationships to ensure satisfaction and repeat business.",
    image: "https://i.pravatar.cc/301",
    skills: ["customer service", "communication", "problem-solving", "sales"]
  },
  {
    id: 3,
    firstName: "Coreen",
    lastName: "Lisle",
    email: "clisle2@pen.io",
    gender: "Female",
    jobTitle: "Safety Technician I",
    jobDescription: "Assists in implementing and monitoring safety programs, ensuring compliance with safety regulations, and promoting a safe workplace environment.",
    image: "https://i.pravatar.cc/302",
    skills: ["safety regulations", "risk assessment", "emergency response", "attention to detail"]
  },
  {
    id: 4,
    firstName: "Gwenora",
    lastName: "Dupey",
    email: "gdupey3@a8.net",
    gender: "Female",
    jobTitle: "Financial Analyst",
    jobDescription: "Analyzes financial data, prepares reports, and provides insights to help guide business decisions. Works on budgeting, forecasting, and financial planning.",
    image: "https://i.pravatar.cc/303",
    skills: ["financial analysis", "reporting", "budgeting", "forecasting", "excel"]
  },
  {
    id: 5,
    firstName: "Con",
    lastName: "Adair",
    email: "cadair4@intel.com",
    gender: "Female",
    jobTitle: "Office Assistant III",
    jobDescription: "Performs administrative and clerical duties, supports office operations, manages schedules, and assists with various office tasks to ensure smooth workflow.",
    image: "https://i.pravatar.cc/304",
    skills: ["administrative support", "scheduling", "communication", "organization"]
  },
  {
    id: 6,
    firstName: "Lemuel",
    lastName: "Anderson",
    email: "landerson5@example.com",
    gender: "Male",
    jobTitle: "Software Engineer",
    jobDescription: "Develops and maintains software applications, ensuring they are efficient, reliable, and user-friendly.",
    image: "https://i.pravatar.cc/305",
    skills: ["java", "javascript", "react", "HTML", "CSS"]
  },
  {
    id: 7,
    firstName: "Nina",
    lastName: "Simone",
    email: "nsimone6@example.com",
    gender: "Female",
    jobTitle: "Marketing Manager",
    jobDescription: "Plans, directs, and coordinates marketing efforts, develops strategies and tactics to boost the company's reputation and drive qualified traffic.",
    image: "https://i.pravatar.cc/306",
    skills: ["marketing strategy", "SEO", "content creation", "social media", "communication"]
  },
  {
    id: 8,
    firstName: "Omar",
    lastName: "Little",
    email: "olittle7@example.com",
    gender: "Male",
    jobTitle: "Operations Manager",
    jobDescription: "Oversees the production of goods and services, ensuring efficiency and effectiveness in business operations.",
    image: "https://i.pravatar.cc/307",
    skills: ["operations management", "logistics", "efficiency optimization", "leadership"]
  },
  {
    id: 9,
    firstName: "Pamela",
    lastName: "Beesly",
    email: "pbeesly8@example.com",
    gender: "Female",
    jobTitle: "Receptionist",
    jobDescription: "Manages the front desk, greets visitors, handles phone calls, and performs administrative duties.",
    image: "https://i.pravatar.cc/308",
    skills: ["customer service", "communication", "multitasking", "organization"]
  },
  {
    id: 10,
    firstName: "Quincy",
    lastName: "Jones",
    email: "qjones9@example.com",
    gender: "Male",
    jobTitle: "Music Producer",
    jobDescription: "Oversees the production and development of music recordings, manages recording sessions, and works with artists to create high-quality music.",
    image: "https://i.pravatar.cc/309",
    skills: ["music production", "audio engineering", "creativity", "project management"]
  }
];

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto grid gap-x-6 gap-y-20 md:grid-cols-2 lg:grid-cols-3 min-h-screen px-6 py-24 sm:p-24">
      {users.map((u: User) => <Card key={u.id} user={u} />)}
    </main>
  );
}
