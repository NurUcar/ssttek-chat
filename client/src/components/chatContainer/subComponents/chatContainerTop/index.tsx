import Avatar from "@/components/shared/avatar";
import { ClockSVG } from "@/components/shared/icons/ClockSVG";
import { EyeSVG } from "@/components/shared/icons/EyeSVG";
import { SstDarkLogoSVG } from "@/components/shared/icons/SstDarkLogoSVG";
import { IUser } from "@/services/types/propTypes/generic";
import { classNames } from "@/utils/classNames";
import { ReactElement } from "react";

interface IChatContainerProps {
    user: IUser;
}

const ChatContainerTop = ({ user }: IChatContainerProps) => {
    console.log(user)
    return (
        <div className='flex w-full h-[92px] bg-white justify-between'>
            <div className="flex w-fit flex-row items-center ml-9  ">
                <Avatar
                    className="w-[52px] h-[52px] "
                    avatar={user?.avatar}
                    userName={user.userName}
                />
                <div className={classNames("flex flex-col", user.userName && "ml-[15px]")}>
                    <div className="flex w-fit flex-row items-center  ">
                        {
                            user.userName !== "" ?
                                <span className="leading-4 font-semibold text-[13px]">
                                    {user.userName}
                                </span>

                                :
                                <div className="my-[5px]">
                                    <SstDarkLogoSVG className="w-16 h-[14px] " />
                                </div>
                        }
                        {
                            user.isActiveUser &&

                            <div className="w-[10px] h-[10px] bg-yellowGreen rounded-full ml-2"></div>
                        }
                    </div>
                    <span className="font-medium text-base leading-4 text-darkLiver mt-2">{user.about}</span>
                </div>

            </div>
            <div className="flex flex-row items-center mr-[26px]">
                <div className="flex flex-row items-center">
                    <EyeSVG className="w-[17px] h-3 mr-[10px]" />
                    <span className="font-medium text-base text-darkLiver leading-[19px]">botty-beep-boop</span>
                </div>
                <div className="flex flex-row items-center ml-[37px]">
                    <ClockSVG className="w-[17px] h-[17px] mr-2" />
                    <span className="font-medium text-base text-darkLiver leading-[19px]">5 min</span>
                </div>
            </div>
        </div >
    );

};



export default ChatContainerTop;
