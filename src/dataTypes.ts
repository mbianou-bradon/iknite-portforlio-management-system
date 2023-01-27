
export interface props{
    Profile: Profile
    News: News
    Project: Project
}

interface Profile {
    name: string,
    picture: string,
    description?: string,

}

interface News {
    NewsTitle: string
    description: string
    NewsImage: string
    DatePublished: string
}

interface Project {
    title: string
    description: string
    ProjectState?: boolean
    ProjectImage?: []
}