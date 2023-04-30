import { classNames } from "@/utils/classNames";

interface IMessageBox {
    isCurrentUser: boolean;
    message: string
}
const MessageBox = ({ isCurrentUser, message }: IMessageBox) => {

    return (
        <div className={"w-full"}>
            <div className={classNames("min-h-[41px] w-[450px] mb-5 bg-white px-[17px] py-[14px]",
                isCurrentUser ? "bg-vividCerulean ml-auto rounded-bl-3xl rounded-tl-3xl rounded-tr-3xl" :
                    "bg-white rounded-br-3xl rounded-tr-3xl rounded-tl-3xl")}>
                <span>
                    {message}
                </span>
            </div >
        </div>

    );

};



export default MessageBox;
