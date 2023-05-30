import httpRequest from "./httpClient";


class BrandServices {

    getBrands(){
        return httpRequest.get("brands.php")
    }

    getProductById(id){
        return httpRequest.get(`products/${id}`)
    }

    postBrand(data){
        return httpRequest.post("brands.php",data)
    }

    updateProduct(id,data){
        return httpRequest.patch(`products/${id}`,data)
    }

    deleteBrand(id){
        return httpRequest.remove(`brands.php?id=${id}`)
    }
}

export default new BrandServices;