import {BaseModel} from "./BaseModel";

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
}