import AOS from 'aos'
import 'aos/dist/aos.css'

export default ({ app }) => {
  if (process.client) {
    AOS.init({
      once: true, 
      duration: 800 
    })
  }
}