import { useAppDispatch } from "@/store/store";
import { useWindowSize } from "@/utils/useWindowSize";
import { useRouter } from "next/router";

const LeftMenuBody = () => {
    const { width } = useWindowSize();
    const dispatch = useAppDispatch();
    const router = useRouter();

    return (
        <div className='flex w-full bg-blue-600'>
            Left Menu Body
        </div>
    );

};



export default LeftMenuBody;
