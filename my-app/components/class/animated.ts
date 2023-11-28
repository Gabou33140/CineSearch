class Animated extends content {
     nbrEpisode: number
     nbrSeason: number

     constructor(name: string, platform: string, autor: string, author: string, genre: string, pic: String, synopsis: string, idContent: number, nbrEpisode: number, nbrSeason: number){
        super()
    this.nbrEpisode = nbrEpisode
    this.nbrSeason = nbrSeason
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

    get nbrEpisode(): number {
        return this.nbrEpisode

    }

    get nbrSeason(): number {
        return this.nbrSeason

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