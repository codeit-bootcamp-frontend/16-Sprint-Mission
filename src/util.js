

//이거 페이보릿에서도 재사용해야하는데


export const viewPort = {
    lg: 1200,
    md: 768,
    sm: 376,
};

export function reRequestByResize(innerWidth, setQueryStrings) {
    const { lg, md, sm } = viewPort;

    if (innerWidth >= lg) {
        setQueryStrings((prev) => {
            return {
                ...prev,
                pageSize: 10,
            }
        })
    }
    if (innerWidth < lg && innerWidth >= md) {
        setQueryStrings((prev) => {
            return {
                ...prev,
                pageSize: 6,
            }
        })
    }
    if (innerWidth < md && innerWidth > sm) {
        setQueryStrings((prev) => {
            return {
                ...prev,
                pageSize: 4,
            }
        })
    }
}


export function reRequestByResizeFavor(innerWidth, setFavoriteQueryStrings) {
    const { lg, md, sm } = viewPort;

    if (innerWidth >= lg) {
        setFavoriteQueryStrings((prev) => {
            return {
                ...prev,
                pageSize: 4,
            }
        })
    }
    if (innerWidth < lg && innerWidth >= md) {
        setFavoriteQueryStrings((prev) => {
            return {
                ...prev,
                pageSize: 2,
            }
        })
    }
    if (innerWidth < md && innerWidth > sm) {
        setFavoriteQueryStrings((prev) => {
            return {
                ...prev,
                pageSize: 1
            }
        })
    }
}