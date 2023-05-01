import MessageContainer from "@/components/chatContainer";
import LeftMenu from "@/components/leftMenu";
import RightMenu from "@/components/rightMenu";
import type { NextPage } from "next";
import * as io from "socket.io-client";
import { useEffect, useState } from "react";
import { SstUserSVG } from "@/components/shared/icons/SstUserSVG";
import { IUser } from "@/services/types/propTypes/generic";


const Home: NextPage<any> = (props) => {
	const initialUsers = [{
		avatar: <SstUserSVG className="w-[61px] h-[13px]" />,
		userName: "",
		isCurrent: true,
		lastConversationTime: "",
		lastMessage: "Hi",
		isActiveUser: true,
		conversationHistory: [],
		roomID: "1",
		about: "Cloud, The Internet"
	},
	{
		userName: "Nur Uçar",
		isCurrent: false,
		lastConversationTime: "5 min",
		lastMessage: "Lorem ipsum sit ament",
		isActiveUser: false,
		conversationHistory: [],
		roomID: "2",
		about: "Developer"
	},
	{
		userName: "Yağmur Çabuk",
		isCurrent: false,
		lastConversationTime: "",
		lastMessage: "",
		isActiveUser: true,
		conversationHistory: [],
		roomID: "3"
	},
	{
		userName: "Joe Doe",
		isCurrent: false,
		lastConversationTime: "",
		lastMessage: "",
		isActiveUser: false,
		conversationHistory: [],
		roomID: "4"
	},
	{
		userName: "Jane Doe",
		isCurrent: false,
		lastConversationTime: "",
		lastMessage: "",
		isActiveUser: false,
		conversationHistory: [],
		roomID: "5"
	},
	{
		userName: "Jennie Nichols",
		isCurrent: false,
		lastConversationTime: "",
		lastMessage: "",
		isActiveUser: false,
		conversationHistory: [],
		roomID: "6"
	},
	{
		userName: "Liem Walters",
		isCurrent: false,
		lastConversationTime: "",
		lastMessage: "",
		isActiveUser: false,
		conversationHistory: [],
		roomID: "7"
	},
	{
		userName: "Emma Adams",
		isCurrent: false,
		lastConversationTime: "",
		lastMessage: "",
		isActiveUser: false,
		conversationHistory: [],
		roomID: "8"
	},];
	const socket = io.connect("http://localhost:3001");
	const [users, setUsers] = useState<IUser[]>(initialUsers)
	const [currentUser, setCurrentUser] = useState<IUser>(initialUsers[0]);
	const [room, setRoom] = useState("");
	const [messageReceived, setMessageReceived] = useState("");

	const joinRoom = () => {
		if (room !== "") {
			socket.emit("join_room", room);
		}
	};

	const sendMessage = (message: string) => {
		socket.emit("send_message", { message, room });
	};

	useEffect(() => {
		users.map((user) =>
			user.isCurrent === true && setCurrentUser(user)
		)
	}, [users])

	useEffect(() => {
		setRoom(currentUser.roomID)
		joinRoom()
	}, [currentUser])

	useEffect(() => {
		socket.on("receive_message", (data) => {
			setMessageReceived(data.message);
		});
	}, [socket]);


	return (
		<div className="flex flex-row w-full bg-white">
			<LeftMenu
				users={users}
				setUsers={setUsers} />
			<MessageContainer
				sendMessage={sendMessage}
				user={currentUser}
				setUsers={setUsers}
				users={users} />
			<RightMenu />
		</div>
	);
};


export default Home;
