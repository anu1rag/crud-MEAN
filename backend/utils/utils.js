module.exports = {
    hasParams : (req, arr) =>{
        let request_object = Object.keys(req);
        arr.forEach((element)=>{
            if(!request_object.includes(element)) {
                return false;
            }
        });
        return true;
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


