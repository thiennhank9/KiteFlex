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