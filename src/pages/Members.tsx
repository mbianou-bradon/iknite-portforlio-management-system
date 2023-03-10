import {IoMdAdd, IoMdSearch} from "react-icons/io"
import EngineerCard from '../components/cards/EngineerCard'
import {members} from "../data2"




export default function Members() {
  return (
    <div className="px-4 sm:px-8 min-h-screen">
      <header className="mb-5">
        <h2 className="text-3xl font-semibold mb-5">Team Members</h2>
        <div className="flex items-center justify-between flex-wrap gap-y-5">
          <div className="flex gap-5 flex-wrap">
            <div className="border rounded-full w-fit flex px-2 sm:px-4 py-2 text-sm sm:text-[1rem]">
                <input type="text" placeholder="Search for a member" className="min-w-0 focus:outline-0 text-sm sm:px-2"/>
                <div className="text-xl cursor-pointer"><IoMdSearch/></div>
            </div>

            <div className="[&>*]:px-6 [&>*]:py-2 [&>*]:border [&>*]:w-fit [&>*]:rounded-lg [&>*]:cursor-pointer flex flex-wrap gap-3">
              <div className="hover:border-primary hover:bg-primary hover:text-white"><h2>Softwares</h2></div>
              <div className="hover:border-[#ff4f5b] hover:bg-[#ff4f5b] hover:text-white"><h2>Designers</h2></div>
            </div>
          </div>
            <div className="w-fit px-6 py-2 bg-primary text-white rounded-lg hover:bg-white hover:text-primary border border-primary cursor-pointer active:scale-95 select-none">
              <h2 className="flex items-center gap-1">Add Member <div><IoMdAdd/></div></h2>
            </div>
        </div>
      </header>

      {/* Link of all Members */}
        <div className="members grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4">
          {
            members.map((member) => {

              return <EngineerCard key = {member.id} person = {member}/>
            })
          }



        </div>

    </div>
  )
}