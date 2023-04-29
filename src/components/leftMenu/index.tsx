import LeftMenuBody from "@/components/leftMenu/subComponents/leftMenuBody";
import LeftMenuTop from "@/components/leftMenu/subComponents/leftMenuTop";
import { useAppDispatch } from "@/store/store";
import { useWindowSize } from "@/utils/useWindowSize";
import { useRouter } from "next/router";

const LeftMenu = () => {
    const { width } = useWindowSize();
    const dispatch = useAppDispatch();
    const router = useRouter();

    return (
        <div className='w-[340px]'>
            <LeftMenuTop />
            <LeftMenuBody />
        </div>
    );

};



export default LeftMenu;
