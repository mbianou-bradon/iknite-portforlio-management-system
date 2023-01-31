


export default function ProjectAndContribution(){

    return (
        <div>
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="w-[10%]">S/N</th>
                        <th className="w-[20%]">Project <span className="hidden md:inline">Name</span></th>
                        <th className="w-[50%]">Contributors</th>
                        <th className="w-[20%]">Details</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            <div className="w-10 md:w-20 h-5 md:h-10 bg-red-500 rounded-lg">
                                <img src="" alt="" />
                            </div>
                        </td>
                        <td className="flex justify-center">Bohikor</td>
                        <td>
                            <div></div>
                            <div></div>
                            <div></div>
                        </td>
                        <td className="flex justify-center"><div className="px-4 md:px-6 py-2 w-fit bg-red-500 text-white rounded-lg cursor-pointer">View</div></td>
                    </tr>

                    <tr>
                        <td>
                            <div className="w-10 md:w-20 h-5 md:h-10 bg-red-500 rounded-lg">
                                <img src="" alt="" />
                            </div>
                        </td>
                        <td className="flex justify-center">Bohikor</td>
                        <td>
                            <div></div>
                            <div></div>
                            <div></div>
                        </td>
                        <td className="flex justify-center"><div className="px-4 md:px-6 py-2 w-fit bg-red-500 text-white rounded-lg cursor-pointer">View</div></td>
                    </tr>

                    <tr>
                        <td>
                            <div className="w-10 md:w-20 h-5 md:h-10 bg-red-500 rounded-lg">
                                <img src="" alt="" />
                            </div>
                        </td>
                        <td className="flex justify-center">Bohikor</td>
                        <td>
                            <div></div>
                            <div></div>
                            <div></div>
                        </td>
                        <td className="flex justify-center"><div className="px-4 md:px-6 py-2 w-fit bg-red-500 text-white rounded-lg cursor-pointer">View</div></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}