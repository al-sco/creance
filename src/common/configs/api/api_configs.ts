// export const apiUrl = 'https://2801-154-68-51-79.ngrok-free.app';
export const apiUrl = 'http://localhost:8281';


export const getUrl = (path: string) => {
    return `${apiUrl}/v1${path}`
}
