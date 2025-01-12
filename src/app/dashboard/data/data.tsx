import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
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
    color: "bg-[#3498DB]",
  },
  {
    value: "live",
    label: "Live",
    color: "bg-[#45A557]",
  },
  {
    value: "cancelled",
    label: "Cancelled",
    color: "bg-[#9B59B6]",
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
  "title": "Night Live",
  "status": "upload",
  "album": "First Album",
},
{
  "id": "CTR-2",
  "title": "Overbearing",
  "status": "live",
  "album": "First Album",
},
{
  "id": "CTR-3",
  "title": "We need you",
  "status": "processing",
  "album": "Second Album",
},
{
  "id": "CTR-4",
  "title": "Bypass",
  "status": "backlog",
  "album": "Second Album",
},
{
  "id": "CTR-5",
  "title": "The source",
  "status": "backlog",
  "album": "Second Album",
},
{
  "id": "CTR-6",
  "title": "I'll be there",
  "status": "canceled",
  "album": "Second Album",
},
{
  "id": "CTR-7",
  "title": "Used",
  "status": "done",
  "album": "Second Album",
},
{
  "id": "CTR-8",
  "title": "In the end",
  "status": "done",
  "album": "First Album",
},
{
  "id": "CTR-9",
  "title": "Generations",
  "status": "in progress",
  "album": "First Album",
},
{
  "id": "CTR-10",
  "title": "We need each other",
  "status": "backlog",
  "album": "First Album",
},
{
  "id": "CTR-11",
  "title": "Calculating the love",
  "status": "in progress",
  "album": "First Album",
},
{
  "id": "CTR-12",
  "title": "Generating Pillows",
  "status": "done",
  "album": "First Album",
},
{
  "id": "CTR-13",
  "title": "Wireless Relationships",
  "status": "backlog",
  "album": "Second Album",
}]
