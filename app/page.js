import Image from "next/image";
import MainPage from "./components/mainPage";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
    //     <div className="app flex flex-col bg-white rounded-2xl shadow-2xl justify-center  items-center px-7 mt-14">
    //     <Image
    //         src="/images/carry.png"
    //         width={200}
    //         height={100}
    //         alt="Carry UP"
    //         priority={true}
    //       />
    //     </div>
    // </main>
    <MainPage />
  )
}
