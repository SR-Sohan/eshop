import httpRequest from "./httpClient";


class BrandServices {

    getCategory(){
        return httpRequest.get("category")
    }

    getCategoryById(id){
        return httpRequest.get(`category/${id}`)
    }

    postCategory(data){
        return httpRequest.post("category",data)
    }

    updateCategory(id,data){
        return httpRequest.patch(`category/${id}`,data)
    }

    deleteCategory(id){
        return httpRequest.remove(`category?id=${id}`)
    }
}

export default new BrandServices;