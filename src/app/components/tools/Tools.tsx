import Image from "next/image"
import checkFill from "./assets/check-fill.png"
import { companyIcons } from "@/lib/company_icons"


export default function Tools() {

    return (
        <section className="min-h-screen w-full py-20 px-4">
            <div className="lg:w-[90%] max-w-[1300px] mx-auto lg:pt-20">
                <div className="flex flex-col gap-16">
                    <article className="flex flex-wrap items-center gap-4 max-w-[730px] justify-center lg:justify-start">
                        {companyIcons.map((img, index) => (
                            <div
                                key={index}
                                className="bg-[#F8F8F8] rounded-[10px] p-4 flex justify-center items-center w-fit h-[60px]">
                                <Image src={img.icon} alt={img.name} />
                            </div>
                        ))}
                    </article>

                    <div className="flex flex-col pt-16 lg:flex-row items-end justify-between gap-12 lg:gap-20 w-full">
                        <div className="basis-[55%]">
                            <h2 className="font-[600] text-center lg:text-start text-[3rem] sm:text-[4rem] leading-[3rem] sm:leading-[4rem] lg:text-[5rem] lg:leading-[5rem]">Seemless</h2>

                            <h2 className="font-[600] text-center lg:text-start text-[3rem] sm:text-[4rem] leading-[3.5rem] sm:leading-[4.5rem] lg:text-[5rem] lg:leading-[5.5rem]">Integration</h2>

                            <p className="font-[500] text-[1rem] py-6 text-center lg:text-start leading-[1.5rem] w-[90%] sm:w-[80%] md:w-[60%] lg:w-[80%] mx-auto lg:mx-0">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>

                        <div className="basis-auto mx-auto">
                            <article className="flex flex-col items-start justify-center md:flex-row md:items-center md:justify-center lg:flex-col lg:items-start gap-4 py-4 mx-auto w-[90%] lg:w-full">
                                <div className="flex items-center gap-3">
                                    <div className="bg-[#E8F2EE] flex-shrink-0 text-[#FFFFFF] h-[26px] w-[26px] rounded-full flex justify-center items-center">
                                        <Image src={checkFill} alt="A green check mark" />
                                    </div>

                                    <p className="font-[500] text-[0.95] sm:text-[1.15rem] leading-[1.5rem]">Secure and encrypted integration</p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="bg-[#E8F2EE] flex-shrink-0 text-[#FFFFFF] h-[26px] w-[26px] rounded-full flex justify-center items-center">
                                        <Image src={checkFill} alt="A green check mark" />
                                    </div>

                                    <p className="font-[500] text-[0.95] sm:text-[1.15rem] leading-[1.5rem]">Full API interface</p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="bg-[#E8F2EE] flex-shrink-0 text-[#FFFFFF] h-[26px] w-[26px] rounded-full flex justify-center items-center">
                                        <Image src={checkFill} alt="A green check mark" />
                                    </div>

                                    <p className="font-[500] text-[0.95] sm:text-[1.15rem] leading-[1.5rem]">Payments worldwide</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}