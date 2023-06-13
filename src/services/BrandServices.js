import httpRequest from "./httpClient";


class BrandServices {

    getSubCategory(){
        return httpRequest.get("subcategories")
    }

    getSubCategoryById(id){
        return httpRequest.get(`subcategories/${id}`)
    }

    postSubCategory(data){
        return httpRequest.post("subcategories",data)
    }

    updateProduct(id,data){
        return httpRequest.patch(`subcategories/${id}`,data)
    }

    deleteBrand(id){
        return httpRequest.remove(`subcategories/${id}`)
    }
}

export default new BrandServices;