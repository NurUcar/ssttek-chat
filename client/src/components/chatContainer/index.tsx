import ChatContainerBody from "@/components/chatContainer/subComponents/chatContainerBody";
import ChatContainerBottom from "@/components/chatContainer/subComponents/chatContainerBottom";
import ChatContainerTop from "@/components/chatContainer/subComponents/chatContainerTop";
import { SstUserSVG } from "@/components/shared/icons/SstUserSVG";
import { IUser } from "@/services/types/propTypes/generic";


interface IMessageContainer {
    sendMessage: (message: string) => void;
    user: IUser;
    users: IUser[];
    setUsers: (userList: IUser[]) => void;

}
const MessageContainer = ({ sendMessage, user, setUsers, users }: IMessageContainer) => {

    return (
        <div className='flex flex-col grow'>
            <ChatContainerTop user={user} />
            <ChatContainerBody user={user} />
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
