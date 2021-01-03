
import { Sequelize } from 'sequelize-typescript';
import { Bills } from 'src/entities/Bill';
import { Customers } from 'src/entities/Customer';
import { DetailBills } from 'src/entities/DetailBill';
import { Products } from 'src/entities/Product';
import { Staffs } from 'src/entities/Staff';
import { databaseConfig } from 'src/shared/database';


export const databaseProvider = {
  provide: 'SequelizeInstance',
  useFactory: async () => {
    let config;
    switch (process.env.NODE_ENV) {
      case 'prod':
      case 'production':
        config = databaseConfig.production;
        break;
      case 'dev':
      case 'development':
        config = databaseConfig.development;
        break;
      default:
        config = databaseConfig.development;
    }

    const sequelize = new Sequelize({...config });
    sequelize.addModels([Bills,Customers,DetailBills,Products,Staffs]);
    await sequelize.sync({ force: false });
    return sequelize;
  },
};
