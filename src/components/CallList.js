import CallItem from './CallItem'
import '../App.css'

export default function CallList({calls}) {
  return (
    <div className='container'>
        {calls.map((call) => (
        <CallItem key={call.id} call={call} />
      ))}
    </div>
  )
}
 