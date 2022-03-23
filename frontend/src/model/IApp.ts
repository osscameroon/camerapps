import {BaseModel} from "./BaseModel";
import { ICategory } from "./ICategory";
import {IGender} from "./IGender";

export interface IApp extends BaseModel{
    author?: string;
    description?: string;
    email?: string;
    logoUrl?: string;
    slackUrl?: string;
    facebookUrl?: string;
    twitterUrl?: string;
    linkedInUrl?: string;
    githubUrl?: string;
    genre?: IGender;
    websiteUrl?: string;
    category?: ICategory;
    categoryId?: string;
    genreId?: string;
}
