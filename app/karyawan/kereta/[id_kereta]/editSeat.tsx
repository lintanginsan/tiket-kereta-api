"use client"

import { FormEvent, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { getCookie } from "@/helper/client-cookie";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal";
import { SeatType } from "../../types";
import { axiosInstance } from "@/helper/api";

type props = {
  item: SeatType;  // properti untuk menyimpan data kursi
};

const EditSeat = (myProp: props) => {  // menggunakan destructure props di sini
  const [seat_number, setSeatNumber] = useState<string>("");  // inisialisasi dengan data item
  const [wagon_id, setWagonId] = useState<number>(0);
  const [show, setShow] = useState<boolean>(false);
  const router = useRouter();

  const openModal = () => {
    setShow(true)
    setSeatNumber(myProp.item.seat_number)
    setWagonId(myProp.item.wagon_id)
  }

  const closeModal = () => {
    setShow(false)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const TOKEN = getCookie("token");
      const url = `/train/wagon/seat/${myProp.item.id}`;
      const requestData = { seat_number, wagon_id };

      const response: any = await axiosInstance.put(url, requestData, {
        headers: {
          Authorization:`Bearer ${TOKEN}`,
        },
      });

      const message = response.data.message;
      if (response.data.success === true) {
        closeModal();  // menutup modal setelah berhasil
        toast(message, {
          containerId: `toastEdit-${myProp.item.id}`,
          type: "success",
        });
        setTimeout(() => router.refresh(), 1000);
      } else {
        toast(message, {
          containerId: `toastEdit-${myProp.item.id}`,
          type: "warning",
        });
      }
    } catch (error) {
      console.log(error);
      toast("Something went wrong", {
        containerId: `toastEdit-${myProp.item.id}`,
        type: "error",
      });
    }
  };

  return (
    <div>
      <ToastContainer containerId={`toastEdit-${myProp.item.id}`} />
      <button type="button"
        className="absolute top-1 right-8 p-1 bg-sky-600 hover:bg-sky-500 text-white rounded-full shadow-md"
        onClick={() => openModal()}>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>
      </button>

      <Modal isShow={show}>
        {/* modal header */}
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="w-full p-3 rounded-t-lg">
            {/* rounded t adalah border top */}
            <h1 className="font-bold text-lg">Edit Data Kursi</h1>
            <span className="text-sm text-slate-400">
              Pastikan data yang diisi benar
            </span>
          </div>

          {/* modal body */}
          <div className="w-full p-3">
            <div className="my-2 border rounded-md p3">
              <small className="text-sm font-semibold text-sky-700">
                Nomor Kursi
              </small>
              <input
                type="text"
                id={`seat_number-${myProp.item.id}`}
                value={seat_number}
                onChange={(e) => setSeatNumber(e.target.value)}
                required={true}
                className="w-full p-1 outline-none focus:border-b-sky-700 focus:border-b"
              />
            </div>
          </div>

          {/* modal footer */}
          <div className="w-full p-3 rounded-b-lg flex items-center justify-end gap-2">
            {/* justify end ke kanan */}
            <button
              type="button"
              onClick={() => closeModal()}
              className="px-4 py-2 rounded-md bg-slate-700 hover:bg-slate-600 text-white"
            >
              Close
            </button>

            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-sky-800 hover:bg-sky-700 text-white"
            >
              Save
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EditSeat;