"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

type Props = {
    startDate: string
    endDate: string
}

const FilterHistory = (myProp: Props) => {
    const [start_date, setStartDate] = useState<string>("")
    const [end_date, setEndDate] = useState<string>("")
    const router = useRouter()

    const handleSearch = () => {
        if (start_date !== "" && end_date !== "") {
            router.push(`/pelanggan/jadwal?start_date=${start_date}&end_date=${end_date}`)
        }
    }

    // Used to update data when the component reloads
    useEffect(() => {
        setStartDate(myProp.startDate)
        setEndDate(myProp.endDate)
    }, [myProp])

    return (
        <div className="my-5 flex flex-wrap items-center w-full">
            <div className="w-full md:w-1/2 p-3">
                <strong className="font-semibold text-white">Tanggal Awal</strong><br />
                <input 
                    type="date" 
                    id="start_date" 
                    value={start_date} 
                    onChange={e => setStartDate(e.target.value)} 
                    className="w-full border p-2 rounded-sm" 
                />
            </div>
            <div className="w-full md:w-1/2 p-3">
                <strong className="font-semibold text-white">Tanggal Akhir</strong><br />
                <input 
                    type="date" 
                    id="end_date" 
                    value={end_date} 
                    onChange={e => setEndDate(e.target.value)} 
                    className="w-full border p-2 rounded-sm" 
                />
            </div>
            <button 
                type="button" 
                onClick={() => handleSearch()} 
                className="px-4 py-2 rounded-md bg-orange-600 hover:bg-orange-500 text-white"
            >
                Cari Jadwal
            </button>
        </div>
    )
}

export default FilterHistory