export const apiUrl='https://90b5-154-68-51-79.ngrok-free.app'

export const getUrl=(path:string)=>{
    return `${apiUrl}/v1${path}`
}