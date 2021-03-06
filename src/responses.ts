import * as Types from "./common-types";

export interface Pr0grammResponse {
	ts: Types.Timestamp;
	cache: Types.Cache;
	rt: Types.Roundtrip;
	qc: number; // ??
}

export interface GetItemsInfoResponse extends Pr0grammResponse {
	tags: Types.Tag[];
	comments: Types.ItemComment[];
}

export interface GetItemsResponse extends Pr0grammResponse {
	atEnd: boolean;
	atStart: boolean;
	error: Types.Pr0grammError;
	items: Types.Item[];
}

export interface GetCommentsResponse extends Pr0grammResponse {
	commants: Types.ProfileComment[];
	hasOlder: boolean;
	hasNewer: boolean;
	user: Types.CommentUser;
}

export interface GetProfileInfoResponse extends Pr0grammResponse {
	user: Types.User;
	comments: Types.ProfileComment[];
	commentCount: number;
	uploads: Types.ProfileUpload[];
	uploadCount: number;
	likesArePublic: boolean;
	likes: Types.LikedItem[];
	likeCount: number;
	tagCount: number;
	badges: Types.ProfileBadge[];
	followcount: number;
	following: boolean;
}

export interface GetDetailsResponse extends Pr0grammResponse {
	tags: Types.ItemTagDetails[];
}

export interface ChangeUserDataResponse extends Pr0grammResponse {
	account: string; // ??
	error: string | null | undefined; // ??
}

export interface GetFollowListReponse extends Pr0grammResponse {
	list: Types.FollowedUser[];
}

export interface GetUserInfoResponse extends Pr0grammResponse {
	account: Types.AccountInfo;
	invited: Types.InvitingUser[];
}

export interface TokenResponse extends Pr0grammResponse {
	tokenError: string | null; // ??
	error: string | null | undefined; // ??
}

export interface LoadInviteResponse extends Pr0grammResponse {
	inviter: Types.InvitingUser;
	email: Types.Email;
}

export interface TokenInfoResponse extends Pr0grammResponse {
	token: Types.Token | null;
}

export interface SuccessableResponse extends Pr0grammResponse {
	success: boolean;
	identifier: string | undefined;
}

export interface LogInResponse extends SuccessableResponse {
	ban: Types.BanInfo | null;
}

export interface SyncResponse extends Pr0grammResponse {
	inboxCount: number;
	log: Types.LogItem[] | string; // TODO
	logLength: number;
	score: Types.Score;
}
