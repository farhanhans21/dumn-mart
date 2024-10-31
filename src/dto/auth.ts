import { Iuser, IUserProfile } from "../complain/entities/authEntities";

export interface userStateDTO {
  name?: string;
  user?: Iuser;
  username?: string;
  profile?: IUserProfile;
  token?: string;
}

