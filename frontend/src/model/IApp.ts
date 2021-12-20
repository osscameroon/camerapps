import {BaseModel} from "./BaseModel";
import { ICategory } from "./ICategory";
import {IGender} from "./IGender";

export interface IApp extends BaseModel{
    author?: string;
    description?: string;
    email?: string;
    logo?: string;
    slack?: string;
    facebook?: string;
    twitter?: string;
    linkedIn?: string;
    github?: string;
    gender?: IGender;
    category?: ICategory;
}