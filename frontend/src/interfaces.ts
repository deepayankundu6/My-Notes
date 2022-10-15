interface INotes {
    Title: string
    Description: string
    Tags: string[]
    DueDate: string
    SavedDate: string,
    _id?: string,
    done: boolean
}

export { INotes }