
function Reducers(state:{},action) {

    console.log(state)
    switch(action.type){
        case 'GET_BOOKS':

            return {
                booksList: state.booksList.concat(action.array)
            }


        default:
            return {booksList: []};
    }
}


export default Reducers;
