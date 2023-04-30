import MessageContainer from "@/components/chatContainer";
import LeftMenu from "@/components/leftMenu";
import RightMenu from "@/components/rightMenu";
import type { NextPage } from "next";

const Home: NextPage<any> = (props) => {


	return (
		<div className="flex flex-row w-full bg-white">
			<LeftMenu />
			<MessageContainer />
			<RightMenu />
		</div>
	);
};


export default Home;
