const add=(a,b)=>{
    return a+b;
}

//*Named export
// export const sub=(a,b)=>{  
//     return a-b;
// }

const mul=(a,b)=>{
    return a*b;
}

const div=(a,b)=>{
    return a/b;
}


//* default export
// export default add;

//*exporting all
export {add,mul,div};