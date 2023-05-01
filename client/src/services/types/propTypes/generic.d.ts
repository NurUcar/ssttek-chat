import { ReactElement } from "react";

export type IFetchStatus = "idle" | "loading" | "success" | "error";

export interface IUser {
	userName: string;
	avatar?: ReactElement;
	isCurrent: boolean;
	lastConversationTime: string;
	lastMessage: string;
	isActiveUser: boolean;
	conversationHistory?: string[];
	roomID: string;
	about?: string;
}
