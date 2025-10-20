import React from 'react'
import { motion, useScroll } from 'motion/react'

const App = () => {

  const myscroll = useScroll();
  console.log(myscroll)
  return (
    <>
    <motion.div style={{
      width:'100%',
      h:'20px',
      backgroundColor:'red',
      position:'fixed',
      scaleX:myscroll.scrollYProgress
    }}>jdg</motion.div>
  
    <motion.div>
      <h1>
    cabo dolor accusantium rem vel praesentium ut eaque rerum quia, reprehenderit laboriosam quo? Dolores magnam possimus velit consequuntur, libero ab cupiditate!
    Officiis autem unde ipsa fugit veritatis quam dolores iure. Similique quae quisquam tempore amet minima veniam quas deserunt blanditiis, fugiat cupiditate ullam quasi facere totam, quia explicabo laborum nihil id.</h1>
    </motion.div>
    </>
  )
}

export default App
