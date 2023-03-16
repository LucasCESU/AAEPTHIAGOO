import {Request, Response} from 'express'
import productService from '../service/productService';


class productController {
    public async create(req: Request, res: Response) {
        console.log("Para fins Didaticos", req);
        const products = productService.createProductList(req.body);
        return res.status(201).send();
    }
    
    public async read(req: Request, res: Response){
        const productList = await productService.readProductList();
        return res.status(200).json(productList);
    }

    public async stock(req: Request, res: Response){
        const newProducts = await productService.getStock();
        console.log(newProducts);
        return res.send(newProducts);
    }

}

export default new productController()