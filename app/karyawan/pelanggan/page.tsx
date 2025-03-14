export const dynamic = "force-dynamic";
import { getServerCookie } from "@/helper/server-cookie"
import { AdminType } from "../types"
import { axiosInstance } from "@/helper/api"
import AddAdmin from "../admin/addAdmin";
import User from "./user"
import AddUser from "./addUser"

const getUser = async (): Promise<AdminType[]> => {
    try {
        // get token from cookie
        const TOKEN = await getServerCookie(`token`)
        const url = `/customer`
        // hit endpoint
        const response: any =
            await axiosInstance
                .get(url, {
                    headers: {
                        authorization: `Bearer ${TOKEN}`
                    }
                })
        if (response.data.success == true) {
            return response.data.data
        }
        return []
    } catch (error) {
        console.log(error)
        return []
    }

}
const UserPage = async () => {
    const dataPelanggan = await getUser()
    return (
        <div>
            <h1 className="text-xl font-semibold">
                Data Pelanggan
            </h1>
            <span className="text-sm text-slate-600">
                Halaman ini memuat daftar Pelanggan
            </span>

            <div className="my-3">
                <AddUser />
                {/* mapping data kereta */}
                {dataPelanggan.map((pelanggan, index) => (
                    <User item={pelanggan} key={`pelanggan-${index}`} />
                ))
                }
            </div>
        </div>
    )
}
export default UserPage