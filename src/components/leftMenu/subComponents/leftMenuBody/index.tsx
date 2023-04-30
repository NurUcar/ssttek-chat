import ChatBox from "@/components/leftMenu/subComponents/leftMenuBody/chatBox";
import { SstUserSVG } from "@/components/shared/icons/SstUserSVG";

const LeftMenuBody = () => {
    return (
        <div className='flex flex-col w-full overflow-hidden  hover:overflow-scroll scrollbar-hide '>
            <ChatBox
                avatar={<SstUserSVG className="w-[61px] h-[13px]" />}
                userName={""}
                isCurrent={true}
                lastConversationTime={""}
                lastMessage={"Living the dream"}
                isActiveUser={true}
            />
            <ChatBox
                isCurrent={false}
                userName={"Nur Uçar"}
                lastConversationTime={"3 hours ago"}
                lastMessage={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"}
                isActiveUser={false} />
            <ChatBox
                isCurrent={false}
                userName={"Yağmur Çabuk"}
                lastConversationTime={"Jul 27"}
                lastMessage={"Yes, of course. Thanks"}
                isActiveUser={false} />
        </div>
    );

};



export default LeftMenuBody;
