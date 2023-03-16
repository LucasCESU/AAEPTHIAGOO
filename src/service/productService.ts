import { writeFile, readFile } from "fs/promises"

class ProductService {


    async createProductList(data){
        try {
            console.log("Criando lista de produtos");
            await writeFile("products.json", JSON.stringify(data, null, 2));

        } catch(err) {
            throw new Error("Falha ao salvar a lista de produtos");
        }
    }

    async readProductList(){
        try {
            console.log("Lendo lista de produtos");
            const arquivos =  await readFile("products.json", "utf-8");
            return JSON.parse(arquivos);

        } catch(err) {
            throw new Error("Falha ao ler a lista de produtos");
        }
    }

    async getStock(){
        try{
        const productList = await this.readProductList();    
        let newProducts = productList.map( (i) => {
            return {
                "nome": i.nome,
                "qtde": i.qtde,
                "preco": i.preco,
                "valor_estoque": i.qtde * i.preco
            };
            
        });
        return newProducts;
        }catch(error){
            throw new Error(error);
        }


    }




}

export default new ProductService();