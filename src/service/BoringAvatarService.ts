export const getBoringAvatar = (
    username:string,
    primaryColor:string,
    secondaryColor:string) => {
    return `https://source.boringavatars.com/beam/200/${username}?colors=${primaryColor},${secondaryColor}`
}
