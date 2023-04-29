import { useAppDispatch } from "@/store/store";
import { useWindowSize } from "@/utils/useWindowSize";
import { useRouter } from "next/router";

const MessageContainer = () => {
    const { width } = useWindowSize();
    const dispatch = useAppDispatch();
    const router = useRouter();

    return (
        <div className='flex grow bg-red-300'>
            Message Container
        </div>
    );

};



export default MessageContainer;
