import RightMenuTop from "@/components/rightMenu/subComponents/rightMenuTop";
import { useAppDispatch } from "@/store/store";
import { useWindowSize } from "@/utils/useWindowSize";
import { useRouter } from "next/router";

const RightMenu = () => {
    const { width } = useWindowSize();
    const dispatch = useAppDispatch();
    const router = useRouter();

    return (
        <div className='w-[340px] '>
            <RightMenuTop />
        </div>
    );

};



export default RightMenu;
