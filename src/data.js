export const API_KEY = 'AIzaSyDFvDnuUeh3RzEnLIcUnbx3c_5Y9_9Um8I'

export const value_converter = (value) => {
    if(value>=1000000) {
        return Math.floor(value/1000000)+"M";
    } else if(value>=1000) {
        return Math.floor(value/1000)+"K";
    } else {
        return value;
    }
}