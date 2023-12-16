import Image from "next/image"
import checkFill from "./assets/checkmark-fill.png"
import { transactions } from "@/lib/transactions"


export default function Transactions() {

    return (
        <section className="min-h-screen bg-[#E8F2EE] flex items-center justify-center w-full py-20 px-4">
            <div className="lg:w-[90%] max-w-[1300px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20 pt-20">

                <div className="basis-[55%] mx-auto lg:mx-0">
                    <h2 className="font-[600] text-center lg:text-start text-[3rem] sm:text-[4rem] sm:leading-[4rem] leading-[3rem] lg:text-[4.5rem] lg:leading-[5rem]">Send & recieve</h2>

                    <h2 className="font-[600] text-center lg:text-start text-[3rem] sm:text-[4rem] leading-[3.5rem] sm:leading-[4.5rem] lg:text-[4.5rem] lg:leading-[5rem]">money instantly.</h2>

                    <p className="font-[500] text-[1rem] py-4 text-center lg:text-start leading-[1.5rem] w-[90%] sm:w-[80%] md:w-[60%] lg:w-[80%] mx-auto lg:mx-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>

                    <article className="flex flex-col items-start justify-center md:flex-row md:items-center md:justify-center lg:flex-col lg:items-start gap-4 py-4 mx-auto w-[90%] lg:w-full">
                        <div className="flex items-center gap-3">
                            <div className="bg-[#5BB5A2] flex-shrink-0 text-[#FFFFFF] h-[26px] w-[26px] rounded-full flex justify-center items-center">
                                <Image src={checkFill} alt="A green check mark" />
                            </div>

                            <p className="font-[500] text-[0.95] sm:text-[1.15rem] leading-[1.5rem]">Malesuada Ipsum</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="bg-[#5BB5A2] flex-shrink-0 text-[#FFFFFF] h-[26px] w-[26px] rounded-full flex justify-center items-center">
                                <Image src={checkFill} alt="A green check mark" />
                            </div>

                            <p className="font-[500] text-[0.95] sm:text-[1.15rem] leading-[1.5rem]">Vestibulum</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="bg-[#5BB5A2] flex-shrink-0 text-[#FFFFFF] h-[26px] w-[26px] rounded-full flex justify-center items-center">
                                <Image src={checkFill} alt="A green check mark" />
                            </div>

                            <p className="font-[500] text-[0.95] sm:text-[1.15rem] leading-[1.5rem]">Parturient Lorem</p>
                        </div>
                    </article>
                </div>

                <div className="basis-[35%] w-full grid grid-cols-1 gap-4 mx-auto">
                    {transactions.map((data, index) => (
                        <div key={index} className="flex justify-between items-center w-full rounded-[10px] bg-[#FFFFFF] p-4">
                            <article className="flex items-center gap-4">
                                <div className="bg-[#5BB5A2] flex justify-center items-center rounded-[8px] w-[50px] h-[50px]">
                                    <Image src={data.icon} alt="Apple Company Icon" />
                                </div>

                                <div className="flex flex-col gap-1 items-start">
                                    <h6 className="font-[500] text-[0.95rem]">{data.merchant_name}</h6>
                                    <small>{data.used_for}</small>
                                </div>
                            </article>

                            <h6 className="font-[500] text-[0.95rem]">{data.price}</h6>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}