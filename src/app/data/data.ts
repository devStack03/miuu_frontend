import {
    ArrowDownIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CheckCircledIcon,
    CircleIcon,
    CrossCircledIcon,
    QuestionMarkCircledIcon,
    StopwatchIcon,
} from "@radix-ui/react-icons"

export const albums = [
    {
        value: "First Album",
        label: "First Album",
    },
    {
        value: "Second Album",
        label: "Second Album",
    },
    {
        value: "Third Album",
        label: "Third Album",
    },
]

export const titles = [
    {
        value: "Night Live",
        label: "Night Live",
    },
    {
        value: "Overbearing",
        label: "Overbearing",
    },
]

export const statuses = [
    {
        value: "processing",
        label: "Processing",

        icon: QuestionMarkCircledIcon,
    },
    {
        value: "upload",
        label: "Uploading",
        icon: CircleIcon,
    },
    {
        value: "live",
        label: "Live",
        icon: StopwatchIcon,
    },
    {
        value: "done",
        label: "Done",
        icon: CheckCircledIcon,
    },
    {
        value: "canceled",
        label: "Canceled",
        icon: CrossCircledIcon,
    },
]

export const priorities = [
    {
        label: "Decreasing",
        value: "low",
        icon: ArrowDownIcon,
    },
    {
        label: "Stable",
        value: "medium",
        icon: ArrowRightIcon,
    },
    {
        label: "Growing",
        value: "high",
        icon: ArrowUpIcon,
    },
]

export const tracks = [{
    "id": "CTR-1",
    "title": "",
    "status": "",
    "album": "",
    "YourShare": "50%",
    "YourRevenues": "€17000.0",
    "subRows": [
        {
            "title": "Night Live",
            "status": "processing",
            "album": "Sub First Album - 1", 
            "platforms": ["Spotify", "Youtube"],
            "revenues":"€379.00",
            "YourShare": "40%",
            "YourRevenues": "€1200.0"
        },
        {
            "title": "Night Live",
            "status": "processing",
            "album": "Sub First Album - 2", 
            "platforms": ["Deezer"],
            "revenues":"€189.00",
            "YourShare": "40%",
            "YourRevenues": "€1200.0"
        },
        {
            "title": "Night Live",
            "status": "processing",
            "album": "Sub First Album - 3", 
            "platforms": ["Spotify"],
            "revenues":"€222.36",
            "YourShare": "37%",
            "YourRevenues": "€1200.0"
        },
    ]
},
{
    "id": "CTR-2",
    "title": "",
    "status": "",
    "album": "",
    "YourShare": "50%",
    "YourRevenues": "€1200.0",
    "subRows": [
        {
            "title": "Night Live",
            "status": "processing",
            "album": "Sub Second Album - 1", 
            "platforms": ["Spotify", "Youtube", "Deezer"],
            "revenues":"€789.00",
            "YourShare": "28%",
            "YourRevenues": "€3600.0"
        },
    ]
},
{
    "id": "CTR-3",
    "title": "",
    "status": "",
    "album": "",
    "YourShare": "50%",
    "YourRevenues": "€17000.0",
    "subRows": [
        {
            "title": "Night Live",
            "status": "processing",
            "album": "Sub First Album - 2", 
            "platforms": ["Deezer"],
            "revenues":"€189.00",
            "YourShare": "40%",
            "YourRevenues": "€1200.0"
        },
        {
            "title": "Night Live",
            "status": "processing",
            "album": "Sub First Album - 3", 
            "platforms": ["Spotify"],
            "revenues":"€222.36",
            "YourShare": "37%",
            "YourRevenues": "€1200.0"
        },
    ]
},
{
    "id": "CTR-4",
    "title": "",
    "status": "",
    "album": "",
    "YourShare": "50%",
    "YourRevenues": "€1200.0",
    "subRows": [
        {
            "title": "Night Live",
            "status": "processing",
            "album": "Sub Second Album - 1", 
            "platforms": ["Spotify", "Youtube", "Deezer"],
            "revenues":"€789.00",
            "YourShare": "28%",
            "YourRevenues": "€3600.0"
        },
    ]
},
{
    "id": "CTR-5",
    "title": "",
    "status": "",
    "album": "",
    "YourShare": "50%",
    "YourRevenues": "€17000.0",
    "subRows": [
        {
            "title": "Night Live",
            "status": "processing",
            "album": "Sub First Album - 1", 
            "platforms": ["Spotify", "Youtube"],
            "revenues":"€379.00",
            "YourShare": "40%",
            "YourRevenues": "€1200.0"
        },
        {
            "title": "Night Live",
            "status": "processing",
            "album": "Sub First Album - 2", 
            "platforms": ["Deezer"],
            "revenues":"€189.00",
            "YourShare": "40%",
            "YourRevenues": "€1200.0"
        },
        {
            "title": "Night Live",
            "status": "processing",
            "album": "Sub First Album - 3", 
            "platforms": ["Spotify"],
            "revenues":"€222.36",
            "YourShare": "37%",
            "YourRevenues": "€1200.0"
        },
    ]
},
{
    "id": "CTR-6",
    "title": "I'll be there",
    "status": "cancelled",
    "album": "Second Album",
    "YourShare": "60%",
    "YourRevenues": "€3600.0",
    "platforms": ["Deezer"],
},
{
    "id": "CTR-7",
    "title": "Used",
    "status": "live",
    "album": "Second Album",
    "YourShare": "37%",
    "YourRevenues": "€1200.0",
    "platforms": ["Youtube"],
},
{
    "id": "CTR-8",
    "title": "In the end",
    "status": "live",
    "album": "First Album",
    "YourShare": "40%",
    "YourRevenues": "€1200.0",
    "platforms": ["Spotify"],
},
{
    "id": "CTR-9",
    "title": "Generations",
    "status": "cancelled",
    "album": "First Album",
    "YourShare": "60%",
    "YourRevenues": "€3600.0",
    "platforms": ["Spotify", "Youtube", "Deezer"],
},
{
    "id": "CTR-10",
    "title": "We need each other",
    "status": "live",
    "album": "First Album",
    "YourShare": "37%",
    "YourRevenues": "€1200.0",
    "platforms": ["Youtube"],
},
{
    "id": "CTR-11",
    "title": "Calculating the love",
    "status": "cancelled",
    "album": "First Album",
    "YourShare": "50%",
    "YourRevenues": "€17000.0",
    "platforms": ["Spotify"],
},
{
    "id": "CTR-12",
    "title": "Generating Pillows",
    "status": "live",
    "album": "First Album",
    "YourShare": "37%",
    "YourRevenues": "€1200.0",
    "platforms": ["Deezer"],
},
{
    "id": "CTR-13",
    "title": "Wireless Relationships",
    "status": "live",
    "album": "Second Album",
    "YourShare": "60%",
    "YourRevenues": "€3600.0",
    "platforms": ["Spotify", "Youtube"],
}]
