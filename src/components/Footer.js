import { motion } from "framer-motion"

const socialLinks = [
  { platform: "github", url: "https://github.com/SephiaPristanti", icon: "fab fa-github" },
  { platform: "linkedin", url: "https://www.linkedin.com/in/sephia-pristanti-494a3a231/", icon: "fab fa-linkedin" },
  { platform: "instagram", url: "https://instagram.com/spristanti12", icon: "fab fa-instagram" },
]

export default function Footer() {
  return (
    <motion.footer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <div className="footer-content">
        <p>&copy; 2025 Sephia Pristanti. All rights reserved.</p>
        <div className="social-links">
          {socialLinks.map(({ platform, url, icon }, index) => {
            return (
              <motion.a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <i className={icon}></i>
                <span className="sr-only">{platform}</span>
              </motion.a>
            )
          })}
        </div>
      </div>
    </motion.footer>
  )
}

