import Link from 'next/link'


const AboutSection = () => {
    return ( 
        <div className="aboutSection ml-26 mr-26 ">
            <h1 className="flex justify-center  text-5xl family-sans font-semibold	  "> About IEEE </h1>
            <div className="md:flex justify-center h-517 mt-16 md:ml-16 md:mr-16 ">
                <div className="mr-7 ml-7  mb-6 md:mb-0  overflow-hidden md:max-w-3xl md:m-0 	" style={{ background: 'linear-gradient(132deg, #182C3A 0%, #989FDF 100%, #989FDF 100%)', padding: '40px' , borderRadius: '50px' }}>
                    <div className="text-white items-start font-dm-sans text-4xl font-normal pb-3.5	">
                    What is IEEE?
                    </div>
                    <div className="text-white font-dm-sans text-base font-normal">
                    IEEE is the world’s largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity. IEEE and its members inspire a global community through IEEE’s highly cited publications, conferences, technology standards, and professional and educational activities.
                    </div>
                    <div className="text-white font-dm-sans text-base font-normal mt-10">
                    IEEE, pronounced “Eye-triple-E,” stands for the Institute of Electrical and Electronics Engineers. The association is chartered under this name and it is the full legal name. To learn more about the association’s name, for more information please read the <Link href={""} className="underline" > History of IEEE </Link>
                    </div>
                </div>
                <div className="h-full flex flex-col space-x-0 ml-7 mr-7 ">
                    <div className="rounded-3xl overflow-hidden h-full p-8" style={{background: 'white' , borderRadius: '50px' }} >
                        <div className="text-card-title text-center font-dm-sans text-4xl font-normal flex items-start "  style={{color: '#62809B'}}>
                        Mission
                        </div>
                        <div className="mt-5" style={{color: '#515151'}}>
                        IEEE’s core purpose is to foster technological innovation and excellence for the benefit of humanity.
                        </div>
                    </div>
                    <div className="rounded-3xl overflow-hidden h-full p-8 mt-7" style={{background: 'white',  borderRadius: '50px'}}> 
                    <div className="text-card-title text-center font-dm-sans text-4xl font-normal flex items-start "  style={{color: '#62809B'}}>
                        Vision
                        </div>
                        <div className="mt-5" style={{color: '#515151' }}>
                        IEEE will be essential to the global technical community and to technical professionals everywhere, and be universally recognized for the contributions of technology and of technical professionals in improving global conditions.
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-screen' >
            <div className="  rounded-3xl overflow-hidden h-full pl-5 pr-5 sm:pl-10 sm:pr-10 py-8 mr-7 ml-7   mt-32 lg:flex" style={{background: 'white', borderRadius: '50px' }}>
                <div className="flex lg:flex-col justify-center text-center " >
                    <div className="content-center text-4xl sm:text-5xl lg:text-6xl sm:mr-12 text-center "  style={{ background: 'linear-gradient(96deg, #007D98 9.65%, #00C4EF 94.91%)', color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text', width:'265px ' }}>
                        About Us
                    </div>
                </div>
                <div style={{color: '#62809B'}} className="  m-5 flex-initial ">
                Being the leading IEEE student branch in Sri Lanka, IEEE student branch of University of Moratuwa provides a major platform in 
                flourishing innovative and creative ideas of the undergraduates. Currently around 300+ subscribers together with an extensive number
                 of fervent volunteers are involved in many aspects. In spite of developing technological and professional skills, it’s vividly concerned about 
                 uplifting unity and harmony among the members too. Therefore we as IEEE UOM community believe that it is not only a student branch but also a family hand 
                 in hand with togetherness and humanity.
                </div>              
            </div>
            </div>
        </div>
     );
}
 
export default AboutSection;