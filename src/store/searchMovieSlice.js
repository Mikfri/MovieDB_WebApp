import {createSlice} from '@reduxjs/toolkit'; 

const searchMovieSlice = createSlice({
    name: 'searchMovie',
    initialState: {
        searchTerm: ''
    },
    reducers:{
        changeSearchTerm(state, action){
            state.searchTerm = action.payload;
        }     
    }

})

/*-----: HVAD ER EN SLICE?
En slice referere til aplikationens 'STATE'
Formålet med dem er at opdele STATEN til mindre enheder.
*/

//actions er ActionCreators der kan tage et payload som argument, fx er removeCar en ActionCreator-function der tager et payload som 
//argument og returnere en Action: {type: "cars/removeCar", payload: arg}. Når den bliver kaldt med dispath-hooket fra en komponent vil Storens dispatcher
//kalde reduceren: 'removeCar' i sclice: 'cars' (samt extraReducere i andre slices der "lytter"på "cars/removeCars")   
export const {changeSearchTerm} = searchMovieSlice.actions; 
export const searchMovieReducer = searchMovieSlice.reducer;  //combined reducers