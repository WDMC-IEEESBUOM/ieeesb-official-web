import Image from "next/image";
import '../styles/footerStyles.css'
const Footer = () => {

    return (
        <footer className="footer">
            

                <div className="w-full  grid justify-center row-span-1 ">
                    <div className="grid lg:grid-cols-7 gap-[9px] items-center mt-[70px] ">
                        
                        <div className="bg-[#2650f566] sm:col-span-4 lg:col-span-3  h-[108px] flex justify-center rounded-[20px]"><Image src="/UOM IEEE SB LOGO - WHITE scale downed 1.jpg" alt="logo" width={300} height={1}></Image></div>
                        <div className="bg-[#FFFFFF0D] flex justify-center h-[108px] rounded-[20px]"><Image src="/fb.svg" alt="fb" width={39} height={39}/></div>
                        <div className="bg-[#f526dd66] flex justify-center h-[108px] rounded-[20px]"><Image src="/in.svg" alt="in" width={39} height={39}/></div>
                        <div className="bg-[#f526dd66] flex justify-center h-[108px] rounded-[20px]"><Image src="/yt.svg" alt="yt" width={39} height={39}/></div>
                        <div className="bg-[#f526dd66] flex justify-center h-[108px] rounded-[20px]"><Image src="/inst.svg" alt="inst" width={39} height={39}/></div>
                       
                       
                    </div>



                    <div className="bg-[#2650f566] w-full md:h-[168px] rounded-[20px]  mt-[13px] flex justify-center items-center mb-[70px]">
                        <div className="ml-14 mr-14 mt-8 mb-8 text-base">
                            <ul>
            <li>IEEE Student Branch University of Moratuwa</li>
           <li> © Copyright 2021 IEEE - All rights reserved.</li>
            <li>Use of this Web site signifies your agreement to the IEEE Terms and Conditions.</li>
            <li>A not-for-profit organization, IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.</li>
            </ul>
                        </div>
                    </div>
                </div>
           
        </footer>
    );
}

export default Footer;