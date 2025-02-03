import { CategoryTypes } from "./category-types.enum";
import { Dictionary } from "./dictionary.type";

export interface Project {
    id: number;
    title: Dictionary<string>;
    mainImg: string;
    shortDescription: Dictionary<string>;
    longDescription: Dictionary<string>;
    projectMembers: Dictionary<string>;
    styleframeImages: string[];
    processImages: string[];
    processDescription: Dictionary<string>;
    categoryType: CategoryTypes;
}