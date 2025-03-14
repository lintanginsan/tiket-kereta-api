"use client"

import { AdminType } from "../types"
import DropUser from "./dropUser"
import EditUser from "./editUser"
import ResetPassword from "./resetPw"

type props = {
    item: AdminType
}
const User = (myProp: props) => {
    return (
        <div className="w-full flex flex-wrap my-2 border rounded-md">
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
                    <EditUser
                        user={myProp.item} />
                    <DropUser
                        user={myProp.item} />
                    <ResetPassword
                        user={myProp.item} />
                </div>
            </div>
        </div>


    )
}
export default User