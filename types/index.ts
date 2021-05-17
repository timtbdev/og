export interface IPost {
    title: string,
    slug: ISlug,
    releaseDate: Date,
    author: string,
    category: string,
    keywords: string,
    image: object,
    imageDescription: string,
    description: any,
    content?: object,
}
export interface ISlug {
    _type: string,
    current: string
}