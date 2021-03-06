// recipes.js

// Actions
export const RECIPE_ADDED = "cookbook/recipes/RECIPE_ADDED";
export const RECIPE_DELETED = "cookbook/recipes/RECIPE_DELETED";

// Reducer
/*let recipesArray = JSON.parse(localStorage.getItem('recipes')) || [];

let initialState = {
    array: recipesArray
};*/

let initialState = {
    array: []
};

export default function recipes(state = initialState, action) {
    switch (action.type) {
        case RECIPE_ADDED:
            return {
                ...state,
                array: action.data
            };
        case RECIPE_DELETED:
        return {
            ...state,
            array: action.data
        };
        default:
            return state;
    }
}

// Action creators
export function addRecipe(data) {
    return {
        type: RECIPE_ADDED,
        data: data
    };
}

export function deleteRecipe(data) {
    return {
        type: RECIPE_DELETED,
        data: data
    };
}



