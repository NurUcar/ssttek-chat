import { Button } from "@/components/shared/button";
import { AttachSVG } from "@/components/shared/icons/AttachSVG";
import { SmileSVG } from "@/components/shared/icons/SmileSVG";
import { IUser } from "@/services/types/propTypes/generic";
import { useState } from "react";

interface IChatContainerBottom {
    currentUser: IUser;
    users: IUser[];
    setUsers: (userList: IUser[]) => void;
    sendMessage: (message: string) => void
}
const ChatContainerBottom = ({ sendMessage, currentUser, setUsers, users }: IChatContainerBottom) => {
    const [message, setMessage] = useState("");
    return (
        <div className="h-[100px] bg-white">
            <form className="h-full w-full relative">
                <textarea
                    id="comment"
                    rows={4}
                    value={message}
                    className="w-full h-full px-7 py-[33px] outline-0 resize-none text-sm bg-white border-0 focus:ring-0 placeholder-vividCerulean"
                    placeholder="Write a message..."
                    onChange={(e) => {
                        setMessage(e.target.value)
                    }}
                    required
                ></textarea>
                <div className="absolute top-[33px] right-[31px] flex flex-row">
                    <Button.Icon
                        icon={SmileSVG}
                        className="mr-[27px]">
                    </Button.Icon>
                    <Button.Icon
                        icon={AttachSVG}
                        className="mr-[29px]">
                    </Button.Icon>
                    <Button
                        buttonType="ghost"
                        className="text-darkLiver/[.45] w-fit h-fit"
                        spanClassName="px-2"
                        onClick={() => {
                            if (message !== '') {
                                currentUser.conversationHistory?.push(message)
                                setUsers(users?.map((user) =>
                                    user.roomID === currentUser.roomID ? { ...user, conversationHistory: currentUser.conversationHistory } : user
                                ))
                            }
                            sendMessage(message);
                            setMessage("");

                        }}
                    >
                        Send
                    </Button>

                </div>
            </form>
        </div >
    );

};



export default ChatContainerBottom;
