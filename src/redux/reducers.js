

const initialState = {
    followers_Move: null,
    data: {},
}


const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "GET_DATA":
            return {
                ...state,
                data: payload
            }
        case "Followers_Move1":
            return {
                ...state,
                followers: payload
            }
        case "Followers_Move2":
            return {
                ...state,
                followers: payload
            }
        case "Followers_Move3":
            return {
                ...state,
                followers: payload
            }
        case "Followers_Move4":
            return {
                ...state,
                followers: payload
            }
        case "Followers_Move5":
            return {
                ...state,
                followers: payload
            }
        case "Followers_Move6":
            return {
                ...state,
                followers: payload
            }
            case "likes_Move1":
                return {
                    ...state,
                    followers: payload
                }
            case "likes_Move2":
                return {
                    ...state,
                    followers: payload
                }
            case "likes_Move3":
                return {
                    ...state,
                    followers: payload
                }
            case "likes_Move4":
                return {
                    ...state,
                    followers: payload
                }
            case "likes_Move5":
                return {
                    ...state,
                    followers: payload
                }
            case "likes_Move6":
                return {
                    ...state,
                    followers: payload
                }
                case "likes_Move7":
                    return {
                        ...state,
                        followers: payload
                    }
                case "likes_Move8":
                    return {
                        ...state,
                        followers: payload
                    }

    }
    return {
        ...state
    }
}

export default reducer;