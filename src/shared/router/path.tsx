import Filter from "pages/Filter"
import Tickets from "pages/Tickets"

export const basicPaths = [
    {
        path: "/",
        id: 1,
        element: <Tickets />,
    },
    {
        path: "/filter",
        id: 1,
        element: <Filter />,
    },
]