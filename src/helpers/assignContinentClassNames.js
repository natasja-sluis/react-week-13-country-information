

export default function assignClassName(continent) {

    switch (continent) {
        case "Australia":
            return "australia"
        case "Central America":
            return "central-america"
        case "North America":
            return "north-america"
        case "South America":
            return "south-america"
        case "The Caribean":
            return "the-caribean"
        case "Africa":
            return "africa"
        case "Europe":
            return "europe"
        case "Asia":
            return "asia"
        default:
            return "default-continent"
    }
}

