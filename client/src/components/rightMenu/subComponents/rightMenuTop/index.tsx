import { SstLightLogoSVG } from "@/components/shared/icons/SstLightLogoSVG";

const RightMenuTop = () => {

    return (
        <div className='flex flex-col w-full bg-darkGunmetal h-[218px] opacity-100 justify-center items-center'>
            <SstLightLogoSVG className="w-[177px] h-10" />
            <span className="text-xl opacity-100 font-thin leading-4 tracking-custom mt-[10px] text-black">
                www.ssttek.com
            </span>

        </div>
    );

};



export default RightMenuTop;
