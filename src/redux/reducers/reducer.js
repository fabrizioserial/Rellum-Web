import {SET_LANG} from '../actions/actions.js'


const default_lang = {
    language: "EN",
}

const user_data = (state=default_lang , action) =>{
    switch (action.type) {
        case SET_LANG:{
            return{
                language : action.payload.language
            }
        }
        default: return default_lang;
    }
}

export default user_data