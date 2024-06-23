export const apiUrl='https://12f5-160-154-246-163.ngrok-free.app'

export const getUrl=(path:string)=>{
    return `${apiUrl}/v1${path}`
}