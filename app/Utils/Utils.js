export function jsUcfirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function splitIntoTags(string) {
    arrTags = string.split(",");
    arrTags.forEach(function(tag) {
        tag = jsUcfirst(tag).trim();
    })
    return arrTags;
}

export function isObjectEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

export function getToday(){
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd;
    } 
    if(mm<10){
        mm='0'+mm;
    } 
    today = dd+'/'+mm+'/'+yyyy;
    return today;
}