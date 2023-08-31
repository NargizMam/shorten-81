export interface ApiLink {
    _id: string,
    shortUrl: string,
    originalUrl: string
}
export type LinkWithoutId = Omit<Link, '_id'>;
