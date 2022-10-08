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
    whatsappUrl?: string;
    dikaloUrl?: string;
    linkedinUrl?: string;
    telegramUrl?: string;
    linkedInUrl?: string;
    playstoreUrl?: string;
    appstoreUrl?: string;
    githubUrl?: string;
    genre?: IGender;
    tags?: string;
    websiteUrl?: string;
    category?: ICategory;
    categoryId?: string;
    genreId?: string;
}
