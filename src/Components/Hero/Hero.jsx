import Button from "../../Utils/Button";
import styles from "../../styles";



const Hero = () => {
    return ( 
        <section className={`bg-darkGrey hero h-[420px] md:h-[600px] sm:mb-[900px]  mb-[1200px] md:mb-[700px] lg:mb-[600px]  `} id="home">
           <div className={`   mt-[60px] ${styles.flexCenter} `}>
                <div className="text">
                <div className={`py-[100px] ${styles.boxWidth}  ${styles.paddingX} ${styles.flexCenter} sm:pt-[150px] md:pt-[200px] md:pb-[100px] flex-col text-center`}>
                    <h1 className={`${styles.heading1} mb-4`}>Find Your Sustainable Dream Home Here</h1>
                    <p className={`${styles.heroParagraph}  md:text-[23px] text-white xs:w-[410px] mb-7 ss:w-[500px]  sm:w-[550px]  md:w-[800px] `}>Reduce the negative impact that daily activities have on your environment with our eco-friendly homes which are designed to be energy-efficient for a sustainable living </p>
                    <Button type={"button"} title={"Explore"} classname={`${'bg-green text-white rounded-[6px] py-3 px-5 text-[18px] text-secondary font-semibold'} `}/>
                </div>
                </div>
                <div className="image ">
                    <div className={`${styles.flexCenter}`}>
                    <div className="">
                        <img src={""} alt="" />
                        <img src={""} alt="" />
                    </div>
                    <div>
                        <img src={""} alt="" />
                    </div>
                    </div>
                </div>
           </div>
           <div className="bob relative top-[-200px] left-0 w-[30%] h-[30%]"/>
        </section>
     );
}
 
export default Hero;