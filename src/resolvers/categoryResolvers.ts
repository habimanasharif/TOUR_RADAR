import  {Category} from"../models";

const categoriesResolvers={
    Query:{
        categories:()=>Category.all(),
    },
}

export {
    categoriesResolvers,
}