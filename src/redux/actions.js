
export const followersAction_Move1 = (data) => {
    return async dispatch => {
        dispatch({
            type: "Followers_Move1",
            payload: data,
        })
    }
}
export const followersAction_Move2 = (data) => {
    return async dispatch => {
        dispatch({
            type: "Followers_Move2",
            payload: data,
        })
    }
}
export const followersAction_Move3 = (data) => {
    return async dispatch => {
        dispatch({
            type: "Followers_Move3",
            payload: data,
        })
    }
}
export const followersAction_Move4 = (data) => {
    return async dispatch => {
        dispatch({
            type: "Followers_Move4",
            payload: data,
        })
    }
}
export const followersAction_Move5 = (data) => {
    return async dispatch => {
        dispatch({
            type: "Followers_Move5",
            payload: data,
        })
    }
}
export const followersAction_Move6 = (data) => {
    return async dispatch => {
        dispatch({
            type: "Followers_Move6",
            payload: data,
        })
    }
}
export const likesAction_Move1 = (data) => {
    return async dispatch => {
        dispatch({
            type: "likes_Move1",
            payload: data,
        })
    }
}
export const likesAction_Move2 = (data) => {
    return async dispatch => {
        dispatch({
            type: "likes_Move2",
            payload: data,
        })
    }
}
export const likesAction_Move3 = (data) => {
    return async dispatch => {
        dispatch({
            type: "likes_Move3",
            payload: data,
        })
    }
}
export const likesAction_Move4 = (data) => {
    return async dispatch => {
        dispatch({
            type: "likes_Move4",
            payload: data,
        })
    }
}
export const likesAction_Move5 = (data) => {
    return async dispatch => {
        dispatch({
            type: "likes_Move5",
            payload: data,
        })
    }
}
export const likesAction_Move6 = (data) => {
    return async dispatch => {
        dispatch({
            type: "likes_Move6",
            payload: data,
        })
    }
}
export const likesAction_Move7 = (data) => {
    return async dispatch => {
        dispatch({
            type: "likes_Move7",
            payload: data,
        })
    }
}
export const likesAction_Move8 = (data) => {
    return async dispatch => {
        dispatch({
            type: "likes_Move8",
            payload: data,
        })
    }
}

export const getData = () => {
    return async (dispatch) => {
        const response = await fetch("https://uresumes-proxy.herokuapp.com/https://vipfollowers-admin-panel.vercel.app/api/home/home");
        console.clear();
        const data = await response.json();

        dispatch({
            type: "GET_DATA",
            payload: data
        })
    }
}
















