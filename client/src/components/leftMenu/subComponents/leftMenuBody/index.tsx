import ChatBox from "@/components/leftMenu/subComponents/leftMenuBody/chatBox";
import { Button } from "@/components/shared/button";
import { SstUserSVG } from "@/components/shared/icons/SstUserSVG";
import { IUser } from "@/services/types/propTypes/generic";
import { classNames } from "@/utils/classNames";
import { Tab } from "@headlessui/react";
import { useEffect, useState } from "react";
import MessageContainer from '../../../chatContainer/index';

interface ILeftMenuBody {
    users: IUser[];
    setUsers: (userList: IUser[]) => void;
}
const LeftMenuBody = ({ users, setUsers }: ILeftMenuBody) => {
    return (
        <div className='flex flex-col w-full h-[730px] overflow-hidden  hover:overflow-scroll scrollbar-hide '>
            <Tab.Group>
                <Tab.List
                    className={classNames("flex md:justify-start w-full flex-col")}
                >
                    {
                        users.map((user, index) => {
                            return <Button
                                key={index}
                                className={classNames('flex w-full border-t !rounded-none border-solid border-platinum opacity-100 h-[102px] !px-[18px] !py-[25px] !m-0',
                                    user.isCurrent && "bg-darkGunmetal/[.08]")}
                                onClick={() => {
                                    setUsers(users?.map((userItem) =>
                                        userItem.roomID === user.roomID ? { ...userItem, isCurrent: true } : { ...userItem, isCurrent: false }
                                    ))
                                }}>
                                <ChatBox
                                    avatar={user?.avatar}
                                    userName={user?.userName}
                                    isCurrent={user.isCurrent}
                                    lastConversationTime={user.lastConversationTime}
                                    lastMessage={user.lastMessage}
                                    isActiveUser={user.isActiveUser}
                                />
                            </Button>


                        })
                    }

                </Tab.List>

            </Tab.Group>



        </div >
    );

};



export default LeftMenuBody;
