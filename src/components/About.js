import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
       Hello! I am Sephia Pristanti, a computer science graduate. having an interest in IT, I have learned and used several programming languages such as HTML, CSS, PHP, Python and recently learned JavaScript programming language. In addition, I can apply Bootstrap, Codeigniter as a framework in website development. 
Besides IT I am interested in Artificial Intelligence, Augmented Reality and Multimedia fields such as graphic design and animation programming.
Please explore my portfolio to see some of the projects I've worked on, and feel free to contact me if you'd like to connect!
      </motion.p>
    </section>
  )
}

