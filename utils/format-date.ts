export function getDayWithSuffix(day: number) {
    if (day > 3 && day < 21) return `${day}th`; // Special case for 11th to 20th
    switch (day % 10) {
        case 1:
            return `${day}st`;
        case 2:
            return `${day}nd`;
        case 3:
            return `${day}rd`;
        default:
            return `${day}th`;
    }
}

export function getReadableDate(date: Date) {
    if (typeof date === "string") {
        date = new Date(date);
    }

    // const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    // const dayOfWeek = days[date.getDay()]
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${getDayWithSuffix(day)} ${month} ${year}`;
}

//? @input
//? "2024-07-23T04:32:54.325488Z", // ISO 8601
//? "2024-07-23", // Date string
//? "2024-07-23T04:32:54", // Full date and time
//? "Tue, 23 Jul 2024 04:32:54 GMT", // RFC 2822/822
//? "2024/07/23 04:32:54", // Date and time with slashes
//? "July 23, 2024 04:32:54", // Date with month name
//? "07/23/2024 04:32:54", // Date with slashes and time

//? @output
//? formatDate(@input).commaDateFormat; // "23 Jul, 2024"
//? formatDate(@input).slashNumberDateFormat; // "23/07/2024"

export function formatDate(dateString: string) {
    const date = new Date(dateString);

    // Options for the comma date format
    const optionsComma: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "short",
        year: "numeric",
    };
    const commaDateFormat = date
        .toLocaleDateString("en-US", optionsComma)
        .replace(/, /, ", ");

    // Slash number date format
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based in JavaScript
    const year = date.getFullYear();
    const slashNumberDateFormat = `${day}/${month}/${year}`;

    return { commaDateFormat, slashNumberDateFormat };
}
