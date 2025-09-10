import Progress from "@/app/components/Progress"
import Wordlist from "@/app/components/Wordlist"

export default function Status() {
  return (
    <div className="sb-status-box md:flex md:flex-col md:w-1/2">
      <Progress />
      <Wordlist />
    </div>
  )
}
