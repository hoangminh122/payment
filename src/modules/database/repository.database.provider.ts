import { Bills } from "src/entities/Bill";
import { Products } from "src/entities/Product";


export const memberRepository = {
    provide: 'BillsRepository',
    useValue:Bills
}

export const groupRepository = {
    provide: 'ProductsRepository',
    useValue:Products
}