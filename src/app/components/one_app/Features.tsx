import Image from "next/image"
import appIcon from "./assets/app.svg"
import { features } from "@/lib/features"


export default function Features() {

    return (
        <section className="min-h-screen w-full py-20 px-4">
            <div className="lg:w-[90%] max-w-[1300px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">

                <div className="basis-[55%]">
                    <h2 className="font-[600] text-center lg:text-start text-[3rem] sm:text-[4rem] leading-[3rem] sm:leading-[4rem] lg:text-[5rem] lg:leading-[5rem]">One app.</h2>

                    <h2 className="font-[600] text-center lg:text-start text-[3rem] sm:text-[4rem] leading-[3.5rem] sm:leading-[4.5rem] lg:text-[5rem] lg:leading-[5.5rem]">One banking.</h2>


                    <article className="py-16 grid grid-cols-1 justify-center items-center sm:grid-cols-2 gap-6">
                        {features.map((data, index) => (
                            <div key={index} className="border-2 border-[#E8E8E8] rounded-2xl p-8">
                                <div className="bg-[#E8F2EE] h-[46px] w-[46px] rounded-full flex justify-center items-center">
                                    <Image src={data.icon} alt="Flash light Icon" />
                                </div>

                                <h4 className="font-[500] py-3 text-[1.25rem] leading-[1.5rem]">{data.title}</h4>

                                <p className="font-[500] text-[1rem] leading-[1.5rem]">{data.desc}</p>
                            </div>
                        ))}

                    </article>
                </div>

                <div className="basis-[45%] mx-auto">
                    <Image
                        src={appIcon}
                        alt="An app in a mobile phone"
                        priority
                        className="w-[80%] lg:w-fit mx-auto"
                    />
                </div>
            </div>
        </section>
    )
}