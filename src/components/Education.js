import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const educationData = [
  {
    degree: "Bachelor of Computer Science in Informatics Engineering",
    institution: "University of Muhammadiyah Purwokerto",
    year: "2020 - 2024",
    description: "Focused on web development and multimedia. Graduated with honors.",
    courses: [
     
      "Data Structures and Algorithms",
      "Database Management Systems",
      "Framework Programming",
      "Mobile App Programming",
      "Information System Security",
      "Artificial Intelligence",
      "Animation Programming",
      
    ],
  },
  {
    degree: "Fresh Graduate Academy Digital Talent Scholarship AI For Junior Developer",
    institution: "Komdigi and Huawei",
    year: "2022",
    description: "The training is organized by digitalent komdigi and collaborates with Huawei with a total of 120 hours of training.",
    courses: [
      "AI Overview",
      "Machine Learning Overview",
      "Mainstream Development Framework in the Industry",
      "Huawei Mainspore AI Development Network",
      "Atlas AI Computing Platform",
      "Huawei Open AI Platform For Smart Devices",
      "Huawei Cloud Enterprise Intelligence Application Platform",
    ],
  },
  {
    degree: "Learn Basic Data Visualization",
    institution: "Dicoding Indonesia",
    year: "2023",
    description: "Learn basic data visualization with 16 hours of training.",
    courses: [
      "Pre Data Visualization with Spreadsheets",
      "Data to Visual Transformation ",
     
    ],
  },
]

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Education
      </motion.h2>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="education-item"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <h3>{edu.degree}</h3>
            <p className="institution">{edu.institution}</p>
            <p className="year">{edu.year}</p>
            <p className="description">{edu.description}</p>
            {edu.courses && (
              <div className="courses">
                <h4>Key Courses:</h4>
                <ul>
                  {edu.courses.map((course, courseIndex) => (
                    <li key={courseIndex}>{course}</li>
                  ))}
                </ul>
              </div>
            )}
            {edu.skills && (
              <div className="skills">
                <h4>Skills Acquired:</h4>
                <ul>
                  {edu.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

