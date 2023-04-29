import { dashboardExampleAsyncAction } from "@/store/asyncActions/dashboard";
import { useAppDispatch, useAppSelector } from "@/store/store";
import type { NextPage } from "next";
import { useEffect } from "react";

const Home: NextPage<any> = (props) => {
	const dispatch = useAppDispatch();
	const { title } = useAppSelector((state) => state.ui.dashboard);
	const { fetchDasboardStatus, dummyResponse } = useAppSelector((state) => state.api.dashboard);

	useEffect(() => {
		dispatch(dashboardExampleAsyncAction());
	}, [dummyResponse])
	console.log(title)
	if (fetchDasboardStatus === "loading") {
		return <div>loading</div>;
	}

	return (
		<div>
			{title} --- {dummyResponse}
		</div>
	);
};


export default Home;
