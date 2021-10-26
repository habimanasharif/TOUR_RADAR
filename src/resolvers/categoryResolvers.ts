import  {Category} from"../controllers";

const categoriesResolvers={
    Query:{
        categories:()=>Category.all(),
    },
}

export {
    categoriesResolvers,
}