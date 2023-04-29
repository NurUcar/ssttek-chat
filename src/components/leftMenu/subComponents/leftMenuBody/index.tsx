import MessageBox from "@/components/leftMenu/subComponents/leftMenuBody/messageBox";
import { SstUserSVG } from "@/components/shared/icons/SstUserSVG";
import { useAppDispatch } from "@/store/store";
import { useWindowSize } from "@/utils/useWindowSize";
import { useRouter } from "next/router";

const LeftMenuBody = () => {
    const { width } = useWindowSize();
    const dispatch = useAppDispatch();
    const router = useRouter();

    return (
        <div className='flex flex-col w-full overflow-hidden  hover:overflow-scroll scrollbar-hide '>
            <MessageBox
                avatar={<SstUserSVG className="w-[61px] h-[13px]" />}
                userName={""}
                isCurrent={true}
                lastConversationTime={""}
                lastMessage={"Living the dream"}
                isActiveUser={true}
            />
            <MessageBox
                isCurrent={false}
                userName={"Nur Uçar"}
                lastConversationTime={"3 hours ago"}
                lastMessage={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"}
                isActiveUser={false} />
            <MessageBox
                isCurrent={false}
                userName={"Yağmur Çabuk"}
                lastConversationTime={"Jul 27"}
                lastMessage={"Yes, of course. Thanks"}
                isActiveUser={false} />
        </div>
    );

};



export default LeftMenuBody;
