'use client'
import { motion } from 'framer-motion'
export default function BalanceCard(){
  return <motion.div animate={{boxShadow:['0 0 0px #fbbf24','0 0 30px #fbbf24']}}
  transition={{repeat:Infinity,duration:2}}
  className='rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 p-6'>
  <h2 className='text-gold'>Total Balance</h2>
  <p className='text-4xl font-bold'>₹42,500</p></motion.div>
}