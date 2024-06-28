export const apiUrl='http://localhost:8280'

export const getUrl=(path:string)=>{
    return `${apiUrl}/v1${path}`
}