import IServiceItem from "./ServiceItem";

export default interface IService {
  title: string;
  description: string;
  serviceItems: IServiceItem[];
  amount: number;
  btnName: string;
  color: string;
}