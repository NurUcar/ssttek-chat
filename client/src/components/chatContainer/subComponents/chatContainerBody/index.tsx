import MessageBox from "@/components/chatContainer/subComponents/chatContainerBody/messageBox";


const ChatContainerBody = () => {

    return (
        <div className="flex flex-col bg-aliceBlue h-[640px] pt-[27px] px-7 overflow-hidden  hover:overflow-scroll scrollbar-hide">
            <MessageBox
                isCurrentUser={false}
                message=" Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   " />
            <MessageBox
                isCurrentUser={true}
                message=" Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. "/>
            <MessageBox
                isCurrentUser={true}
                message="Thanks." />
            <MessageBox
                isCurrentUser={true}
                message=" Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   " />
            <MessageBox
                isCurrentUser={false}
                message="Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum."/>
            <MessageBox
                isCurrentUser={false}
                message=" Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. "/>
            <MessageBox
                isCurrentUser={true}
                message=" Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   " />
        </div >
    );

};



export default ChatContainerBody;
