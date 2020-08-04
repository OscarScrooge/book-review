import {props} from "../../properties";

const id=0;

export function getBooks(array) {
    return{
        type:'GET_BOOKS',
        id,
        array,
    }
}


export function execute(type) {

    const url = "https://api.nytimes.com/svc/books/v3/lists.json?list="+type+"&api-key="+props.api_key;

    const options = {
        method: "GET",
        headers: {
            "Accept": "application/json"
        },
    };
 return dispatch =>{

    fetch(url, options).then(
        response => {
            if (response.ok) {
                return response.text();
            }
            return response.text().then(err => {
                return Promise.reject({
                    status: response.status,
                    statusText: response.statusText,
                    errorMessage: err,
                });
            });
        })
        .then(data => {

            let array = JSON.parse(data).results.map((book) =>{

                return{
                    title:book.book_details[0].title,
                    author:book.book_details[0].author,
                    description:book.book_details[0].description,
                    url_review : book.reviews[0].book_review_link
                }

            })
            dispatch(getBooks(array));
        })
        .catch(err => {
            console.error(err);
        });
}
}
