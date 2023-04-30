import { Button } from "@/components/shared/button";
import { CancelSVG } from "@/components/shared/icons/CancelSVG";

const RightMenuBody = () => {

    return (
        <div className='flex flex-col w-full h-fit opacity-100 '>
            <div className="w-full  border-b border-solid border-platinum pl-9">
                <div className="flex flex-col mt-7">
                    <span className="font-medium text-sm leading-4 text-philippineGray mb-2">EMAIL</span>
                    <span className="font-medium text-base leading-[19px] text-black">ssttech@example.com</span>
                </div>
                <div className="flex flex-col my-7">
                    <span className="font-medium  text-sm leading-4 text-philippineGray mb-2">PHONE</span>
                    <span className="font-medium text-base leading-[19px] text-black">+04 - 123456789</span>
                </div>
            </div>
            <div className="flex flex-col mt-5 border-b border-solid border-platinum pl-9">
                <span className="font-medium  text-sm leading-4 text-philippineGray mb-2">LABELS</span>
                <div className="flex w-full flex-row mb-[35px] mt-[9px]">
                    <Button
                        rightIcon={<CancelSVG className="w-2 h-2 mr-2" />}
                        className="w-fit h-[22px] py-[7px]  bg-paleCerulean pl-1"
                        spanClassName="text-white">

                        Bot
                    </Button>
                    <Button
                        rightIcon={<CancelSVG className="w-2 h-2 mr-2" />}
                        className="w-fit h-[22px] bg-paleCerulean ml-4 pl-1"
                        spanClassName="text-white">
                        React
                    </Button>
                </div>
            </div>
            <div className="flex flex-col mt-5 pl-9">
                <span className="font-medium  text-sm leading-4 text-philippineGray mb-2">ATTACHMENTS</span>
                <div className="flex flex-row mt-2 h-fit w-fit items-center">
                    <div className=" bg-paleCerulean w-[10px] h-[10px] rounded-full mr-1"></div>
                    <span className="font-medium text-base leading-[19px] text-black">Dataset.csv</span>
                </div>
                <div className="flex flex-row mt-2 h-fit w-fit items-center">
                    <div className=" bg-paleCerulean w-[10px] h-[10px] rounded-full mr-1"></div>
                    <span className="font-medium text-base leading-[19px] text-black">bot_face.jpg</span>
                </div>
            </div>
            <div className="w-full flex justify-start my-12 pl-9">
                <Button buttonType="ghost">
                    View All
                </Button>
            </div>
            <div className="w-full flex justify-center">
                <Button
                    className="w-[235px] h-[42px] bg-tulip"
                    spanClassName="text-white" >
                    React
                </Button>
            </div>
        </div >
    );

};



export default RightMenuBody;
