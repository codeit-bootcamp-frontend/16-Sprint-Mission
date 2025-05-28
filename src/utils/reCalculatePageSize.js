const viewPort = {
    lg: 1200,
    md: 768,
    sm: 376,
};

const pageSizeByType = {
    all: {
        lg: 10,
        md: 6,
        sm: 4
    },
    favor: {
        lg: 4,
        md: 2,
        sm: 1
    }
}

export function reCalculatePageSize(type, innerWidth,) {
    const { lg, md } = viewPort;
    let pageSizeKey;

    if (innerWidth < md) {
        pageSizeKey = "sm"
    } else if (innerWidth < lg) {
        pageSizeKey = "md"
    } else {
        pageSizeKey = "lg"
    }

    const pageSize = pageSizeByType[type][pageSizeKey]

    return pageSize;
}



