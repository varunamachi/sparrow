

export interface Entity {
    _id: string
    name: string
    type: string
    location: string
    owner: string
    variables: Param[]
    readers: string[]
    writers: string[]
    createdAt: Date
    modifiedAt: Date
    createdBy: string
    modifiedBy: string
}

interface Pair {
    key: string
    value: string
}

//Range - integer range
interface ParamRange {
    min: number
    max: number
}


enum ParamType {
    Boolean,
    NumberRange,
    Choice,
    Text,
}

export interface Param {
    name: string
    type: ParamType
    desc: string
    value: boolean | ParamRange | string[] | string
    range: ParamRange
    choices: Pair[]
    default: any
}








