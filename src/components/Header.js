import { motion } from "framer-motion"
import Link from "next/link"

export default function Header({ scrollY }) {
  return (
    <motion.header
      style={{
        backgroundColor: scrollY > 20 ? "rgba(255, 255, 255, 0.9)" : "transparent",
        boxShadow: scrollY > 20 ? "0 2px 5px rgb(255, 255, 255)" : "none",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <nav>
        <motion.div className="logo" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          SP
        </motion.div>
        <ul>
          {["home", "about", "education","skills", "projects", "contact"].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

