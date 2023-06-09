const styles  = {
    boxWidth: "xl:max-w-[1280px] w-full mx-auto",

    heading1: "font-lato font-bold w-full text-[34px] ss:text-[45px] leading-[50px] ss:leading-[55px] lg:text-[53px] xl:text-[64px] md:leading-[115.2px] xl:w-[958px] text-white tracking-[1.92px] ",
    headingg: " text-white mb-3  sm:w-[600px]  lg:text-[56px]",
    heading2: "font-lato font-bold text-[28px] w-full lg:text-[43px] xl:leading-[76.8px] tracking-[1.92px] ",
    heading3: "font-lato font-bold w-full xl:text-[20px] xl:leading-[25px]  ",
    heading4: "font-poppins font-bold w-full xl:text-[24px] xl:leading-[36px] text-black  ",
    heading6: "font-poppins font-bold w-full xl:text-[16px] xl:leading-[28px] text-secondary  ",

    
    paragraph: "font-lato font-normal text-[16px] lg:text-[26px] xl:text-[28px]  leading-[25px] md:leading-[43.2px]",
    paragraphSmall: "font-lato font-normal lg:text-[16px]  lg:leading-[28.8px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    flexBetween: "flex justify-between items-center",
    flexStartB: "flex justify-between items-start",
    flexEnd: "flex justify-end items-center",
    flexWrap: "flex flex-wrap justify-center",

    paddingX: "ss:px-16  px-5 xl:px-0",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-7 xl:px-0  sm:py-12  py-4",
    padding2: "sm:px-16 px-7 xl:px-0 ",

    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
    image: "transition duration-150 ease-out hover:ease-in  hover:scale-[1.03] object-cover cursor-pointer"
}

 
export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    section1: `flex md:flex-row flex-col`,
    section2: `flex smd:flex-row flex-col`,
    section3: `flex mdXl:flex-row flex-col`,
    sectionCol: `flex flex-col`,
    
    button: `bg-primary ${styles.flexCenter} gap-4 text-white font-poppins text-[16px] font-semibold xl:leading-[24px] `
}

export default styles;