
// export interface props{
//     profile: Profile
//     news: News
//     project: Project
//     newsTitle?: string
// }

export interface Profile {
    name: string,
    position: string,
    picture?: string,
    description?: string,

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