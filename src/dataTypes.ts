
// export interface props{
//     profile: Profile
//     news: News
//     project: Project
//     newsTitle?: string
// }

import { Key } from "react"

export interface ProfileType {
    id: Key | null | undefined
    name: string,
    level: string,
    dept: string,
    bio?: string,
    profileImage?: string,
    coverImage?: string,
    mediaLinks?: {
        facebook : string,
        twitter : string,
        github : string,
        linkedin : string,
        instagram?: string,
        tiktok?: string
    },
    contacts? : {
        emails : string[],
        phones : string[],
        addresses : string[]
    },
    contributions? : number[],
    education? : {
        institution : string,
        degree : string,
        startDate : string,
        endDate : string,
        remark? : string,
       
    }[]

}

export interface News {
    newsTitle: string
    description: string
    newsImage: string
    datePublished: string
}

interface Project {
    title: string
    description: string
    ProjectState?: boolean
    ProjectImage?: []
}