

class Film extends content {
    duration: number

    constructor(name: string, platform: string, autor: string, duration: number, author: string, genre: string, pic: String, synopsis: string, idContent: number){
        super()
    this.duration = duration
    this.name = name
    this.idContent = idContent
    this.platform = platform
    this.author = author
    this.genre = genre
    this.pic = pic
    this.synopsis = synopsis
    }

    get name(): string {
        return `${this.name}`

    }

    get duration(): number {
        return this.duration

    }

    get idContent(): number {
        return this.idContent

    }

    get platform(): string {
        return `${this.platform}`

    }

    get author(): string {
        return `${this.author}`

    }

    get genre(): string {
        return `${this.genre}`

    }

    get pic(): string {
        return `${this.pic}`

    }

    get synopsis(): string {
        return `${this.synopsis}`

    }

}