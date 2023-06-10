import { house1, house2, house3 } from "../../Assets";
import Button from "../../Utils/Button";
import styles from "../../styles";



const Hero = () => {
    return ( 
        <section className={`bg-darkGrey ${styles.paddingX}  hero h-[] md:h-[] sm:mb-[900px]   py-[100px] mb-[1200px] md:mb-[700px] lg:mb-[600px]  `} id="home">
           <div className={`   mt-[60px] ${styles.boxWidth}  ${styles.flexCenter} flex-col gap-14`}>
                <div className="text">
                <div className={`py-[]   ${styles.paddingX} ${styles.flexCenter} sm:pt-[] md:pt-[] md:pb-[100px] flex-col text-center`}>
                    <h1 className={`${styles.heading1} mb-4`}>Find Your Sustainable Dream Home Here</h1>
                    <p className={`${styles.heroParagraph}  md:text-[23px] text-white xs:w-[420px] mb-7 ss:w-[500px]  sm:w-[550px]  md:w-[800px] `}>Reduce the negative impact that daily activities have on your environment with our eco-friendly homes which are designed to be energy-efficient for a sustainable living </p>
                    <Button type={"button"} title={"Explore"} classname={`${'bg-green text-white hover:scale-[1.03] cursor-pointer rounded-[6px] py-3 px-5 text-[16px] text-secondary font-semibold'} `}/>
                </div>
                </div>
                <div className="image ">
                    <div className={`${styles.flexCenter} gap-3`}>
                    <div className={`${styles.flexBetween} flex-col gap-3`}>
                        <div className="rounded-[8px]">
                        <img src={house1} className="" alt="" />
                        </div>
                        <img src={house2} className="rounded-[8px]  " alt="" />
                    </div>
                    <div>
                        <img src={house3} className="rounded-[8px] " alt="" />
                    </div>
                    </div>
                </div>
           </div>
           <div className="bob relative top-[-200px] left-0 w-[30%] h-[30%]"/>
        </section>
     );
}
 
export default Hero;