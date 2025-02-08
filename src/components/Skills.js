import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Skills() {
  const skills = ["HTML5", "CSS", "JavaScript", "React", "Node.js", "Figma", "CorelDraw", "Photoshop", "3Ds Max", "Augmented Reality", "Unity","Vuforia"]
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <i className={`fab fa-${skill.toLowerCase().replace(".", "")}`}></i>
            <p>{skill}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

