import { Button } from "@/components/shared/button";
import { CancelSVG } from "@/components/shared/icons/CancelSVG";

const RightMenuBody = () => {

    return (
        <div className='flex flex-col w-full h-fit opacity-100 '>
            <div className="w-full  border-b border-solid border-platinum pl-9">
                <div className="flex flex-col mt-7">
                    <span>EMAIL</span>
                    <span>ssttech@example.com</span>
                </div>
                <div className="flex flex-col my-7">
                    <span>PHONE</span>
                    <span>+04 - 123456789</span>
                </div>
            </div>
            <div className="flex flex-col mt-5 border-b border-solid border-platinum pl-9">
                <span>LABELS</span>
                <div className="flex w-full flex-row mb-[35px] mt-[9px]">
                    <Button
                        rightIcon={<CancelSVG className="w-2 h-2" />}
                        className="w-[66px] h-[22px] py-[7px] px-2 bg-paleCerulean">
                        Bot
                    </Button>
                    <Button
                        rightIcon={<CancelSVG className="w-2 h-2" />}
                        className="w-[66px] h-[22px] bg-paleCerulean ml-4">
                        React
                    </Button>
                </div>
            </div>
            <div className="flex flex-col mt-5 pl-9">
                <span>ATTACHMENTS</span>
                <div className="flex flex-row mt-2 h-fit w-fit items-center">
                    <div className=" bg-paleCerulean w-[10px] h-[10px] rounded-full mr-1"></div>
                    <span>Dataset.csv</span>
                </div>
                <div className="flex flex-row mt-2 h-fit w-fit items-center">
                    <div className=" bg-paleCerulean w-[10px] h-[10px] rounded-full mr-1"></div>
                    <span>bot_face.jpg</span>
                </div>
            </div>

            <span className="my-12 pl-9">View All</span>
            <div className="w-full flex justify-center">
                <Button
                    className="w-[235px] h-[42px] "
                    spanClassName="text-white"
                    color="tulip" >
                    React
                </Button>
            </div>


        </div >
    );

};



export default RightMenuBody;
