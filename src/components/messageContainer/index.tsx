import ChatContainerBody from "@/components/messageContainer/subComponents/chatContainerBody";
import ChatContainerBottom from "@/components/messageContainer/subComponents/chatContainerBottom";
import ChatContainerTop from "@/components/messageContainer/subComponents/chatContainerTop";
import { SstUserSVG } from "@/components/shared/icons/SstUserSVG";
import { useAppDispatch } from "@/store/store";
import { useWindowSize } from "@/utils/useWindowSize";
import { useRouter } from "next/router";

const MessageContainer = () => {
    const { width } = useWindowSize();
    const dispatch = useAppDispatch();
    const router = useRouter();

    return (
        <div className='flex flex-col grow'>
            <ChatContainerTop userName={""} avatar={<SstUserSVG className="w-8 h-6" />} />
            <ChatContainerBody />
            <ChatContainerBottom />
        </div>
    );

};



export default MessageContainer;
