import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Website Profile Bendung Gerak Serayu",
      description: "An interactive website for a Website Profile.",
      image: '/images/project1.png'
    },
    {
      title: "Application of Computer Hardware Introduction Using Augmented Reality",
      description: "Application used to learn computer hardware with augmented reality technology.",
      image:  '/images/project2.png'
    },
    
    {
      title: "Marker Design",
      description: "Marker design to display 3D objects in computer hardware recognition applications using augmented reality.",
       image:  '/images/project3.png'
    },
    {
      title: "Desain Of 3D Object",
      description: "3D objects used in computer hardware introduction applications using augmented reality.",
      image:  '/images/project4.png'
    },
  ]

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image src={project.image || "/placeholder.svg"} alt={project.title} width={300} height={200} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

