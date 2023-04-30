import Avatar from "@/components/shared/avatar";
import { SstDarkLogoSVG } from "@/components/shared/icons/SstDarkLogoSVG";
import { classNames } from "@/utils/classNames";
import { ReactElement } from "react";

interface IMessageBoxProps {
    //Currently talking this user
    isCurrent: boolean;
    // contain user pp
    avatar?: ReactElement;
    userName: string;
    lastConversationTime: string;
    lastMessage: string;
    //is user online now
    isActiveUser: boolean;

}
const MessageBox = ({ isCurrent, avatar, userName, lastMessage, lastConversationTime, isActiveUser }: IMessageBoxProps) => {




    return (
        <div className={classNames('flex w-full border-t border-solid border-platinum opacity-100 h-[102px] px-[18px] py-[25px]',
            isCurrent && "bg-darkGunmetal/[.08]")}>
            <div className="flex h-full w-full">
                <Avatar
                    className="w-[50px] h-[50px] "
                    avatar={avatar}
                    userName={userName}
                />
                <div className="flex flex-row grow justify-between ">
                    <div className="flex flex-col  h-full ml-[17px] ">

                        {
                            userName !== "" ?
                                <span className="leading-4 font-semibold text-[13px]">
                                    {userName}
                                </span>

                                :
                                <div className="my-[5px]">
                                    <SstDarkLogoSVG className="w-[61px] h-[13px] " />
                                </div>

                        }

                        <div className="flex ">
                            <span className={classNames(
                                "leading-4 flex-1 text-philippineGray text-[13px] font-normal min-w-[120px] max-w-[131px] truncate mt-[6px]", isCurrent && "text-black")}>
                                {lastMessage}
                            </span>
                        </div>

                    </div>
                    <div className="flex grow h-full min-w-[30px] max-w-fit justify-end">
                        {
                            isActiveUser ?
                                <div className="flex justify-center items-center bg-yellowGreen opacity-100 w-[52px] h-[22px] rounded-[10px]">
                                    <span className="text-white text-[13px] font-normal">
                                        online
                                    </span>
                                </div> :
                                <span className="text-philippineGray text-[13px] leading-4 font-light items-end">{lastConversationTime}</span>
                        }

                    </div>
                </div>

            </div>
        </div >
    );

};



export default MessageBox;
