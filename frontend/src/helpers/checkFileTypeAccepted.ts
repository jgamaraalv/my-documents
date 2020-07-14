export default function checkFileTypeAccepted(file: File, acceptedTypes: string | undefined): boolean {
  return !acceptedTypes ? true : acceptedTypes.split(",").some((type) => {
    type = type.trim();
    const mimeMatch = /(.*)\/\*$/.exec(type);

    if (mimeMatch) {
      const [, categoryType] = mimeMatch;
      return new RegExp(`^${categoryType}`).test(file.type);
    }

    const extMatch = /^\.(.*)/.exec(type);

    if (extMatch) {
      const [, extType] = extMatch;
      return new RegExp(`${extType}$`).test(file.name);
    }

    return file.type === type;
  });
}