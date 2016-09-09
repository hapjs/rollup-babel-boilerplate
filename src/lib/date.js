export function now(){
    return new Date();
}

export function yestoday(){
    return new Date(now().getTime() - 1000*60*60*24);
}