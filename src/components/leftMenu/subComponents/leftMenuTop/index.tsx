import { Button } from "@/components/shared/button";
import { DownSVG } from '@/components/shared/icons/DownSVG';
import { SettingSVG } from "@/components/shared/icons/SettingSVG";

const LeftMenuTop = () => {

    return (
        <div className='flex w-full h-[92px] px-5 py-8'>
            <div className="flex flex-row w-full justify-between">
                <div className="flex flex-row h-5 items-center">
                    <span className="font-medium text-[17px] text-philippineGray leading-5 pr-[6px]">
                        All Messages
                    </span>
                    <DownSVG className="w-3 h-[7px]" />
                </div>

                <Button.Icon
                    icon={SettingSVG}
                    className="w-5 h-5"
                    onClick={() => { alert("icon button clicked") }}
                />

            </div>
        </div >
    );

};



export default LeftMenuTop;
