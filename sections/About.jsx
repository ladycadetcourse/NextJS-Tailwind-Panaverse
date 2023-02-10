'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Panaverse" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Panaverse</span> The Future of the Web is Web 3.0, Metaverse,
         and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally.
         It is community of Web 3 and Metaverse developers, designers, 
         trainers, startup founders and service providers.
         <span className="font-bold text-white">The internet 
         is without a doubt the most important technological development 
         in human history. Web3 and metaverse technologies expand the
          internet as we know it by introducing novel features and
           advancements. Panaverse will make use of all aspects of modern
            technology, including 3D, VR, AR, AI, blockchain, 
            cloud computing, ambient computing, </span>
            and more.{' '}
        <span className="font-extrabold text-white">
          Explore the Panaverse
        </span>{' '}
         and {' '}
        <span className="font-extrabold text-white">with our courses</span> you can
        easily explore the metaverse world you want, turn your dreams into
        reality. Let's{' '}
        <span className="font-extrabold text-white">explore</span> the courses
        of the Panaverse by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
