export interface Section {
    title: string;
    imageUrl: string;
    size?: string
    id: number;
    linkUrl: string;
}

export interface DirectoryState {
    sections: Section[]
}