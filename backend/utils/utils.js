module.exports = {
    hasParams : (req, arr) =>{
        let request_object = Object.keys(req)
        console.log(request_object);
        let value = arr.every((key)=>{
            console.log(key);
            console.log(request_object.includes(key));
            return request_object.includes(key);
        });
        return value;
    },
    pick : (req, arr) => {
        let final_obj = {};
        Object.keys(req).filter((element)=>{
            return arr.includes(element);
        }).forEach((element)=>{
            final_obj[element] = req[element];
        });
        return final_obj;
    }
}


