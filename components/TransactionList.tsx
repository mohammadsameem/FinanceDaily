'use client'
const tx=[{name:'Swiggy',amount:450},{name:'UPI Transfer',amount:1200}]
export default function TransactionList(){
  return <ul>{tx.map((t,i)=><li key={i} className='flex justify-between py-2'>
    <span>{t.name}</span><span>₹{t.amount}</span></li>)}</ul>
}