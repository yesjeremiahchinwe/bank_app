import Image from "next/image"
import Link from "next/link"
import cards from "./assets/cards.png"
import checkFill from "./assets/check-fill.png";
import EastIcon from '@mui/icons-material/East';


export default function Hero() {

    return (
        <section className="min-h-screen w-full py-20 lg:py-36 px-4">
            <div className="lg:w-[90%] max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-20">
                <div className="flex flex-col">
                    <h2 className="font-[600] text-center lg:text-start text-[3rem] sm:text-[4rem] leading-[3rem] sm:leading-[4rem] lg:text-[6rem] lg:leading-[6rem]">Banking</h2>

                    <h2 className="font-[600] text-center lg:text-start text-[3rem] sm:text-[4rem] leading-[4rem] sm:leading-[5rem] lg:text-[6rem] lg:leading-[7rem]"> starts here.</h2>

                    <p className="leading-[1.5rem] sm:leading-[2rem] font-[500] text-[1rem] sm:text-[1.25rem] text-center lg:text-start py-4 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[80%] mx-auto lg:mx-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>

                    <article className="grid mx-auto lg:mx-0 gap-0 sm:gap-3 grid-cols-2 lg:w-[80%] py-4">
                        <div className="flex flex-col gap-2 items-start">
                            <div className="flex items-center gap-2">
                                <div className="bg-[#E8F2EE] h-[26px] w-[26px] rounded-full flex justify-center items-center">
                                    <Image src={checkFill} alt="A green check mark" />
                                </div>
                                <p className="font-[500] text-[0.88rem] sm:text-[1.15rem] leading-[1.5rem]">Instant Transfer</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="bg-[#E8F2EE] h-[26px] w-[26px] rounded-full flex justify-center items-center">
                                    <Image src={checkFill} alt="A green check mark" />
                                </div>
                                <p className="font-[500] text-[0.88rem] sm:text-[1.15rem] leading-[1.5rem]">Saving accounts</p>
                            </div>
                        </div>


                        <div className="flex flex-col gap-2 items-start">
                            <div className="flex items-center gap-2">
                                <div className="bg-[#E8F2EE] h-[26px] w-[26px] rounded-full flex justify-center items-center">
                                    <Image src={checkFill} alt="A green check mark" />
                                </div>
                                <p className="font-[500] text-[0.88rem] sm:text-[1.15rem] leading-[1.5rem]">Payments worldwide</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="bg-[#E8F2EE] h-[26px] w-[26px] rounded-full flex justify-center items-center">
                                    <Image src={checkFill} alt="A green check mark" />
                                </div>
                                <p className="font-[500] text-[0.88rem] sm:text-[1.15rem] leading-[1.5rem]">100% mobile banking</p>
                            </div>
                        </div>
                    </article>

                    <div className="flex items-center justify-center lg:justify-start gap-4 mt-8">
                        <Link
                            href="#"
                            className="py-[8px] text-[0.88rem] sm:text-[1rem] px-3 bg-[#5BB5A2] text-[#FFFFFF] rounded-md"
                        >Open Account</Link>

                        <Link href="#" className="text-[#5BB5A2] text-[0.95rem] sm:text-[1rem] flex items-center gap-2">
                            <small className="font-[500]">Compare Cards</small>
                            <EastIcon color="inherit" />
                        </Link>
                    </div>
                </div>

                <div className="basis-[45%]">
                    <Image
                        src={cards}
                        alt="ATM Card"
                        priority
                        className="w-[80%] lg:w-fit mx-auto"
                        width={500}
                        height={300}
                    />
                </div>
            </div>
        </section>
    )
}