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