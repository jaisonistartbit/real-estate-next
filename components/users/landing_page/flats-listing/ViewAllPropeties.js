'use client'
import { useRouter } from "next/navigation"

const ViewAllPropeties = () => {
    const router=useRouter()
    return (

        <div className="text-center mt-4">
            <button onClick={() => { router.push('/properties') }} className="mt-[50px] text-orange-400 py-2 px-4 border border-orange-400  rounded-[10px] hover:bg-orange-400 hover:text-white">View All</button>
        </div>
    )
}

export default ViewAllPropeties