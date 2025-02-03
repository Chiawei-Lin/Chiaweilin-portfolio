import { CategoryTypes } from "./category-types.enum";

export interface Project {
    id: number;
    title: string;
    mainImg: string;
    description: string;
    styleframeImages: string[];
    processImages: string[];
    processDescription: string;
    categoryType: CategoryTypes;
}