export interface Iuser{
  id:number;
  email: string;
  token: string;
  Profile: IUserProfile;
  role: string;
}

export interface IUserProfile{
  fullName:string;
  address: string;
  phone: string;
  image:string;
  gender:string;
  
}