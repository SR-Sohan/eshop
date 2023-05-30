import httpRequest from "./httpClient";


class ProductServices {

    getProducts(){
        return httpRequest.get("products.php")
    }

    getProductById(id){
        return httpRequest.get(`products.php?id=${id}`)
    }

    postProduct(data){
        return httpRequest.post("products.php",data)
    }

    updateProduct(id,data){
        return httpRequest.patch(`products.php/${id}`,data)
    }

    deleteProduct(id){
        return httpRequest.remove(`products.php?id=${id}`)
    }
}

export default new ProductServices;