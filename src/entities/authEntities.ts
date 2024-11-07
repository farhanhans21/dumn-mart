export interface Iuser{
  id:number;
  email: string;
  token: string;
  Profile: IUserProfile;
  role: string;
}

export interface IUserProfile{
  fullname:string;
  email:string;
  address: string;
  phone: string;
  image:string;
  gender:string;
  
}