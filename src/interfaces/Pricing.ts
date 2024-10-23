import IService from "./service";

export default interface IPricing {
  title: string;
  description: string;
  services: IService[];
  amount: number;
  btnName: string;
  color: string;
}