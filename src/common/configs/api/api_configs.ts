export const apiUrl='https://ea7f-105-235-68-81.ngrok-free.app'

export const getUrl=(path:string)=>{
    return `${apiUrl}/v1${path}`
}