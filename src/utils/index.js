export const formatSecondsToMinute = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");
    
    return `${formattedMinutes}:${formattedSeconds}`;
}

// array = songs, track = item
export const isExist = (array, item) => {
    return array.some(array => array.url === item.url);
}