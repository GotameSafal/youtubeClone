export const Timeconverter =(second)=>{
    let date = new Date(second*1000).toISOString().slice(11,18);
    return date
}