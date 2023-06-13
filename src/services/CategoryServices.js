import httpRequest from "./httpClient";


class BrandServices {

    getCategory(){
        return httpRequest.get("categories")
    }

    getCategoryById(id){
        return httpRequest.get(`categories/${id}`)
    }

    postCategory(data){
        return httpRequest.post("categories",data)
    }

    updateCategory(id,data){
        return httpRequest.patch(`categories/${id}`,data)
    }

    deleteCategory(id){
        return httpRequest.remove(`categories/${id}`)
    }
}

export default new BrandServices;