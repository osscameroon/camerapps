import {BaseModel} from "./BaseModel";

export interface IApp extends BaseModel{
    description?: string;
    logo?: string;
    slack?: string;
    facebook?: string;
    twitter?: string;
    linkedIn?: string;
    github?: string;
}