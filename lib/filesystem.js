export async function getUsageInfo(fileName, version) {
    try {
        let data = await import('../data/jotapi.json');
        data = data.default;
        return data[version];
    } catch {
        const defaultReturn = {};
        defaultReturn[version] = [];
        return defaultReturn;
    }
}