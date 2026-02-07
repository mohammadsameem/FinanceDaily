const tips=['UPI micro-spends add up.','Annual OTT plans save 30%.','Festival budgets prevent EMI regret.']
export default function AIGuruCard(){
  return <div className='bg-white/5 border border-white/10 rounded-xl p-4'>
    <h3 className='text-emerald'>AI Guru</h3>
    <p className='text-sm mt-2'>{tips[Math.floor(Math.random()*tips.length)]}</p>
  </div>
}