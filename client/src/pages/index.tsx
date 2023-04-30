import MessageContainer from "@/components/chatContainer";
import LeftMenu from "@/components/leftMenu";
import RightMenu from "@/components/rightMenu";
import type { NextPage } from "next";
import * as io from "socket.io-client";
import { useEffect, useState } from "react";

const Home: NextPage<any> = (props) => {

	const socket = io.connect("http://localhost:3001");

	//Room State
	const [room, setRoom] = useState("");

	// Messages States
	const [message, setMessage] = useState("hello");
	const [messageReceived, setMessageReceived] = useState("");

	const joinRoom = () => {
		if (room !== "") {
			socket.emit("join_room", room);
		}
	};

	const sendMessage = () => {
		socket.emit("send_message", { message, room });
	};

	useEffect(() => {
		socket.on("receive_message", (data) => {
			console.log("data", data)
			setMessageReceived(data.message);
		});
	}, [socket]);

	useEffect(() => {
		sendMessage()
	}, [])
	console.log("messageReceived", messageReceived)

	return (
		<div className="flex flex-row w-full bg-white">
			<LeftMenu />
			<MessageContainer />
			<RightMenu />
		</div>
	);
};


export default Home;
