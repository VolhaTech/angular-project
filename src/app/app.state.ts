import { IAuthState } from "./auth/store/auth.state";

export interface IAppState {
    auth: IAuthState;
}
