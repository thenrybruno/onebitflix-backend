import { ResourceWithOptions } from 'adminjs'
import { Category, Course, Episode, User } from "../../models";
import { categoryResourceOptions } from "./category";
import { courseResourceFeatures, courseResourceOptions } from './course';
import { episodeResourceOptions, episodeResourseFeatures } from './episode';
import { userResourceOptions } from './user';

export const adminJsResources: ResourceWithOptions[] = [
    {
        resource: Category,
        options: categoryResourceOptions
    },

    {
        resource: Course,
        options: courseResourceOptions,
        features: courseResourceFeatures
    },

    {
        resource: Episode,
        options: episodeResourceOptions,
        features: episodeResourseFeatures
    },

    {
        resource: User,
        options: userResourceOptions
    }
]