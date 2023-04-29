import { useAppDispatch } from "@/store/store";
import { useWindowSize } from "@/utils/useWindowSize";
import { useRouter } from "next/router";

const RightMenu = () => {
    const { width } = useWindowSize();
    const dispatch = useAppDispatch();
    const router = useRouter();

    return (
        <div className='w-[340px] bg-green-300'>
            Right Menu
        </div>
    );

};



export default RightMenu;
