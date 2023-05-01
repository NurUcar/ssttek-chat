import ChatContainerBody from "@/components/chatContainer/subComponents/chatContainerBody";
import ChatContainerBottom from "@/components/chatContainer/subComponents/chatContainerBottom";
import ChatContainerTop from "@/components/chatContainer/subComponents/chatContainerTop";
import { SstUserSVG } from "@/components/shared/icons/SstUserSVG";
import { IUser } from "@/services/types/propTypes/generic";
import { useAppDispatch } from "@/store/store";
import { useWindowSize } from "@/utils/useWindowSize";
import { useRouter } from "next/router";
import { useState } from "react";

interface IMessageContainer {
    sendMessage: (message: string) => void;
    user: IUser;
    users: IUser[];
    setUsers: (userList: IUser[]) => void;

}
const MessageContainer = ({ sendMessage, user, setUsers, users }: IMessageContainer) => {

    const { width } = useWindowSize();
    const dispatch = useAppDispatch();
    const router = useRouter();

    return (
        <div className='flex flex-col grow'>
            <ChatContainerTop user={user} />
            <ChatContainerBody />
            <ChatContainerBottom
                sendMessage={sendMessage}
                users={users}
                setUsers={setUsers}
                currentUser={user}
            />
        </div>
    );

};



export default MessageContainer;
