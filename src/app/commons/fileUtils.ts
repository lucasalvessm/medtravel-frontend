export const getImgUrlByFile = (file: File, callback: any): void => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = callback;
}

export const getBase64FromImageURL = (imageURL: string): string =>
    imageURL.replace(/^data:image\/(png|jpg);base64,/, "")