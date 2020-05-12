export default (url: string) => {
    const imageNameIndex = url.lastIndexOf('/') + 1
    const imageName = url.substr(imageNameIndex)
    return imageName
}