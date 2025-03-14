"use client"

import Link from "next/link"
import { AdminType } from "../types"
import EditAdmin from "./editAdmin"
import ResetPassword from "./resetPw"
import DropAdmin from "./dropAdmin"

type props = {
    item: AdminType
}
const Admin = (myProp: props) => {
    return (
        <div className="w-full flex flex-wrap my-2 border rounded-md">
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" /> */}
            <div className="w-full md:w-4/12 p-1 flex flex-col">
                <small className="text-sm text-sky-700 font-medium">
                    Nama Admin
                </small>
                <span>
                    {myProp.item.name}
                </span>
            </div>

            <div className="w-full md:w-4/12 p-2 flex flex-col">
                <small className="text-sm text-sky-700 font-medium">
                    Username Admin
                </small>
                <span>
                    {myProp.item.user_details.username}
                </span>
            </div>

            <div className="w-full md:w-2/12 p-2 flex flex-col">
                <small className="text-sm text-sky-700 font-medium">
                    Opsi
                </small>
                <div className="flex gap-2 items-center">
                    <EditAdmin admin={myProp.item} />
                    <DropAdmin admin={myProp.item} />
                    <ResetPassword admin={myProp.item} />

                </div>
            </div>

        </div>
    )
}
export default Admin