import CreateTable from "../components/CreateTable"
import Sidebar from "../components/Sidebar"

export default function Home() {
  return (
    <div className="flex">

    <Sidebar/>
    <div className="mx-auto">

    <CreateTable />
    </div>
    </div>
    )
}
