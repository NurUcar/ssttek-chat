import { useAppDispatch } from "@/store/store";
import { useWindowSize } from "@/utils/useWindowSize";
import { useRouter } from "next/router";

const IconButton = () => {
    const { width } = useWindowSize();
    const dispatch = useAppDispatch();
    const router = useRouter();

    return (
        <div className='w-1/2 bg-red-300'>
            Message Container
        </div>
    );

};



export default IconButton;
