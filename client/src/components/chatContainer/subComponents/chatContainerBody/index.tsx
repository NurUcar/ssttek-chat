import MessageBox from "@/components/chatContainer/subComponents/chatContainerBody/messageBox";
import { IUser } from "@/services/types/propTypes/generic";


interface IChatContainerBody {
    user: IUser;
}
const ChatContainerBody = ({ user }: IChatContainerBody) => {

    return (
        <div className="flex flex-col bg-aliceBlue h-[640px] pt-[27px] px-7 overflow-hidden  hover:overflow-scroll scrollbar-hide">
            {
                user.conversationHistory?.map((message, index) => {
                    return <MessageBox
                        key={index}
                        isCurrentUser={true}
                        message={message} />
                })
            }
        </div >
    );

};



export default ChatContainerBody;
