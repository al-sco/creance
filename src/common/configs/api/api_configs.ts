export const apiUrl = 'https://caa1-196-47-128-158.ngrok-free.app'

export const getUrl = (path: string) => {
    return `${apiUrl}/v1${path}`
}