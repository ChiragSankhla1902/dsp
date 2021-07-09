const Details = (Det=[],action)=>{

    switch (action.type) {
        case "CREATE":
            return[...Det,action.payload];
        case "FETCH_ALL":
            return action.payload;
        // case "UPDATE":
        //     return Det.map((x) => (x._id === action.payload._id ? action.payload : x));
        // case "DELETE":
        //     return Det.filter((x) => x._id !== action.payload);
        default:
            return Det;
    }
    
};

export default Details;