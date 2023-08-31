export interface Link {
    _id: string,
    shortUrl: string,
    originalUrl: string
}
export type LinkWithoutId = Omit<Link, '_id'>;
export interface ApiLink {
    originalUrl: string
}