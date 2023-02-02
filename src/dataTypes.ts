
// export interface props{
//     profile: Profile
//     news: News
//     project: Project
//     newsTitle?: string
// }

import { Key } from "react"

export interface Profile {
    id: Key | null | undefined
    name: string,
    level: string,
    dept: string,
    bio?: string,
    profileImage?: string,
    coverImage?: string,
    mediaLink?: {
        facebook : string,
        twitter : string,
        github : string,
        linkedIn : string
    },
    contact : {
        emails : [],
        phones : [],
        addresses : []
    },
    contributions : [],
    education : [{
        instution : string,
        degree : string,
        remark : string,
        yearStart : number,
        yearEnd : number
    }]

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