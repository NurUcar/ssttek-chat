import { classNames } from "@/utils/classNames";

interface IMessageBox {
    isCurrentUser: boolean;
    message: string
}
const MessageBox = ({ isCurrentUser, message }: IMessageBox) => {

    return (
        <div className={"w-full"}>
            <div className={classNames("min-h-[41px] max-w-[164px] mb-5 px-[17px] py-[14px]",
                isCurrentUser ? "bg-vividCerulean ml-auto rounded-bl-3xl rounded-tl-3xl rounded-tr-3xl text-white" :
                    "bg-white rounded-br-3xl rounded-tr-3xl rounded-tl-3xl text-black")}>
                <span className="text-[13px] font-medium leading-[15px]">
                    {message}
                </span>
            </div >
        </div>

    );

};



export default MessageBox;
