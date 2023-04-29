import LeftMenu from "@/components/leftMenu";
import MessageContainer from "@/components/messageContainer";
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
