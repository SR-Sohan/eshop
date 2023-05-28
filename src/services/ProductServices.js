import httpRequest from "./httpClient";


class ProductServices {

    getProducts(){
        return httpRequest.get("products")
    }

    getProductById(id){
        return httpRequest.get(`products/${id}`)
    }

    postProduct(data){
        return httpRequest.post("products",data)
    }

    updateProduct(id,data){
        return httpRequest.patch(`products/${id}`,data)
    }

    deleteProduct(id){
        return httpRequest._delete(`products/${id}`)
    }
}

export default new ProductServices;