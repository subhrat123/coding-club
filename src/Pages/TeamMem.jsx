import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import Starfield from "../components/StarField";

const teams = [
  {
    name: "Web Team",
    members: [
      {
        name: "Alice Johnson",
        role: "Frontend Developer",
        description: "Passionate about building interactive UI with React and Tailwind CSS.",
        image: "cc.jpg",
        socials: { linkedin: "#", github: "#", twitter: "#" }
      },
      {
        name: "Alice Johnson",
        role: "Frontend Developer",
        description: "Passionate about building interactive UI with React and Tailwind CSS.",
        image: "cc.jpg",
        socials: { linkedin: "#", github: "#", twitter: "#" }
      },
      {
        name: "Michael Smith",
        role: "Full Stack Developer",
        description: "Loves working on scalable web applications and optimizing performance.",
        image: "cc.jpg",
        socials: { linkedin: "#", github: "#", twitter: "#" }
      }
    ]
  },
  {
    name: "Design Team",
    members: [
      {
        name: "Sophia Williams",
        role: "UI/UX Designer",
        description: "Creates elegant and user-friendly designs with a focus on accessibility.",
        image: "cc.jpg",
        socials: { linkedin: "#", github: "#", twitter: "#" }
      },
      {
        name: "Sophia Williams",
        role: "UI/UX Designer",
        description: "Creates elegant and user-friendly designs with a focus on accessibility.",
        image: "cc.jpg",
        socials: { linkedin: "#", github: "#", twitter: "#" }
      },
      {
        name: "Daniel Brown",
        role: "Graphics Designer",
        description: "Brings creativity to life with modern design tools and animations.",
        image: "cc.jpg",
        socials: { linkedin: "#", github: "#", twitter: "#" }
      }
    ]
  },
  {
    name: "Backend Team",
    members: [
      {
        name: "Emma Davis",
        role: "Backend Engineer",
        description: "Specializes in Node.js and building secure APIs with Express and MongoDB.",
        image: "cc.jpg",
        socials: { linkedin: "#", github: "#", twitter: "#" }
      },
      {
        name: "Emma Davis",
        role: "Backend Engineer",
        description: "Specializes in Node.js and building secure APIs with Express and MongoDB.",
        image: "cc.jpg",
        socials: { linkedin: "#", github: "#", twitter: "#" }
      },
      {
        name: "James Wilson",
        role: "API Developer",
        description: "Focused on creating RESTful and GraphQL APIs with optimized queries.",
        image: "cc.jpg",
        socials: { linkedin: "#", github: "#", twitter: "#" }
      }
    ]
  },
  {
    name: "Database Team",
    members: [
      {
        name: "Olivia Martinez",
        role: "Database Administrator",
        description: "Manages databases, ensures performance optimization, and handles migrations.",
        image: "cc.jpg",
        socials: { linkedin: "#", github: "#", twitter: "#" }
      },
      {
        name: "William Anderson",
        role: "Data Engineer",
        description: "Works on big data pipelines, ETL processes, and data warehousing.",
        image: "cc.jpg",
        socials: { linkedin: "#", github: "#", twitter: "#" }
      }
    ]
  },
  {
    name: "GFX Team",
    members: [
      {
        name: "Emily Thomas",
        role: "Motion Designer",
        description: "Creates stunning animations and video graphics for branding and UI.",
        image: "cc.jpg",
        socials: { linkedin: "#", github: "#", twitter: "#" }
      },
      {
        name: "Benjamin White",
        role: "3D Artist",
        description: "Expert in 3D modeling, rendering, and animation for digital experiences.",
        image: "cc.jpg",
        socials: { linkedin: "#", github: "#", twitter: "#" }
      }
    ]
  }
];

const TeamMem = () => {
  return (
    <>
   
   <div className="bg fixed w-full h-full -z-10">
    <Starfield />
   </div>
    <div className="min-h-screen text-white py-16">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#ffffff]">Meet Our Team</h1>
        <p className="text-gray-300 mt-2">The passionate minds behind our success.</p>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {teams.map((team, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-3xl font-bold text-[#ccb3e3] mb-20">{team.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {team.members.map((member, i) => (
                <div
                  key={i}
                  className="relative glassmorphism backdrop-blur-lg rounded-lg p-6 text-center shadow-lg hover:scale-105 transition duration-300 border border-white/20"
                >
                  <div className="absolute -top-5 left-1/2  rounded-full transform -translate-x-1/2">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-28 h-28 rounded-full object-cover border-2 border-[#8e59d3] shadow-md"
                    />
                  </div>
                  <div className="mt-24">
                    <h3 className="text-lg font-semibold text-[#c084fc]">{member.name}</h3>
                    <p className="text-gray-400 text-sm">{member.role}</p>
                    <p className="text-gray-300 mt-3 text-sm">{member.description}</p>
                    <div className="mt-4 flex justify-center space-x-4 text-[#c084fc]">
                      {member.socials.linkedin && (
                        <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                          <FaLinkedin className="text-xl hover:text-white transition" />
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer">
                          <FaTwitter className="text-xl hover:text-white transition" />
                        </a>
                      )}
                      {member.socials.github && (
                        <a href={member.socials.github} target="_blank" rel="noopener noreferrer">
                          <FaGithub className="text-xl hover:text-white transition" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default TeamMem;
