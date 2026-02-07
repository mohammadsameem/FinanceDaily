import BalanceCard from '@/components/BalanceCard'
import AIGuruCard from '@/components/AIGuruCard'
import TransactionList from '@/components/TransactionList'
export default function Dashboard(){
  return <div className='p-6 space-y-6'><BalanceCard/><AIGuruCard/><TransactionList/></div>
}