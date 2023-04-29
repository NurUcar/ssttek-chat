import { Button } from "@/components/shared/button";
import { DownSVG } from '@/components/shared/icons/DownSVG';
import { SettingSVG } from "@/components/shared/icons/SettingSVG";
import { useAppDispatch } from "@/store/store";
import { useWindowSize } from "@/utils/useWindowSize";
import { useRouter } from "next/router";

const LeftMenuTop = () => {
    const { width } = useWindowSize();
    const dispatch = useAppDispatch();
    const router = useRouter();

    return (
        <div className='flex w-full h-[92px] px-5 py-8'>
            <div className="flex flex-row w-full justify-between">
                <div className="flex flex-row h-5 items-center">
                    <span className="font-medium text-[17px] text-philippineGray leading-5 font-Roboto pr-[6px]">
                        All Messages
                    </span>
                    <DownSVG className="w-3 h-[7px]" />
                </div>

                <Button.Icon icon={SettingSVG} className="w-5 h-5" />

            </div>
        </div >
    );

};



export default LeftMenuTop;
