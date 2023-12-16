import Image from "next/image"
import Link from "next/link"
import EastIcon from "@mui/icons-material/East"
import addFill from "./assets/add-fill.png"
import airplane from "./assets/airplane.png"
import bicycle from "./assets/bicycle.png"
import camera from "./assets/camera.png"
import laptop from "./assets/laptop.png"


export default function Savings() {


    return (
        <section className="min-h-screen w-full py-20 px-4">
            <div className="lg:w-[90%] max-w-[1300px] mx-auto pt-20">

                <article className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-x-12 lg:gap-20">
                    <div className="basis-[55%] mx-auto lg:mx-0">

                        <h2 className="font-[600] text-center lg:text-start text-[3rem] sm:text-[4rem] sm:leading-[4rem] leading-[3rem] lg:text-[4.5rem] lg:leading-[4.5rem]">organise your</h2>

                        <h2 className="font-[600] text-center lg:text-start text-[3rem] sm:text-[4rem] leading-[3.5rem] sm:leading-[4.5rem] lg:text-[4.5rem] lg:leading-[5rem]">money the right way</h2>

                        <p className="font-[500] text-[1rem] py-4 lg:py-6 text-center lg:text-start leading-[1.5rem] w-[90%] sm:w-[80%] md:w-[60%] lg:w-[80%] mx-auto lg:mx-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <article className="">

                        </article>
                    </div>

                    <Link href="#" className="text-[#5BB5A2] text-[0.95rem] sm:text-[1rem] flex items-center gap-2">
                        <small className="font-[500]">All features</small>
                        <EastIcon color="inherit" />
                    </Link>
                </article>

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center items-start gap-6 mx-auto py-16">

                    <article className="flex flex-col gap-4">
                        <div className="bg-[#E8F2EE] rounded-[1rem]">
                            <div className="min-w-[214px] min-h-[214px] rounded-[1rem] flex justify-center items-center">
                                <Image src={laptop} alt="New Laptop" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 items-start">
                            <h6 className="font-[500] text-[1.25rem] leading-[1.5rem]">New Laptop</h6>
                            <small className="font-[500] text-[rgb(26,25,30,0.5)] text-[0.88rem] leading-[1.38rem]">$400</small>
                        </div>
                    </article>

                    <article className="flex flex-col gap-4">
                        <div className="bg-[#F1DFDF] rounded-[1rem]">
                            <div className="min-w-[214px] min-h-[214px] rounded-[1rem] flex justify-center items-center">
                                <Image src={bicycle} alt="" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 items-start">
                            <h6 className="font-[500] text-[1.25rem] leading-[1.5rem]">Dream Bike</h6>
                            <small className="font-[500] text-[rgb(26,25,30,0.5)] text-[0.88rem] leading-[1.38rem]">$200</small>
                        </div>
                    </article>

                    <article className="flex flex-col gap-4">
                        <div className="bg-[#DFE1F1] rounded-[1rem]">
                            <div className="min-w-[214px] min-h-[214px] rounded-[1rem] flex justify-center items-center">
                                <Image src={airplane} alt="New Laptop" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 items-start">
                            <h6 className="font-[500] text-[1.25rem] leading-[1.5rem]">Holiday</h6>
                            <small className="font-[500] text-[rgb(26,25,30,0.5)] text-[0.88rem] leading-[1.38rem]">$14000</small>
                        </div>
                    </article>

                    <article className="flex flex-col gap-4 ">
                        <div className="bg-[#DFEBF1] rounded-[1rem] flex justify-center items-center">
                            <div className="min-w-[214px] min-h-[214px] rounded-[1rem] flex justify-center items-center">
                                <Image src={camera} alt="New Laptop" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 items-start">
                            <h6 className="font-[500] text-[1.25rem] leading-[1.5rem]">Camera</h6>
                            <small className="font-[500] text-[rgb(26,25,30,0.5)] text-[0.88rem] leading-[1.38rem]">$100</small>
                        </div>
                    </article>

                    <article>
                        <div className="bg-[#F8F8F8] min-w-[214px] min-h-[214px] rounded-[1rem] flex justify-center items-center">
                            <div className="w-[40px] h-[40px] bg-[#1A191E] rounded-full flex justify-center items-center">
                                <Image src={addFill} alt="New Laptop" />
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}