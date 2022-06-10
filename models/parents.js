module.exports = (sequelize, DataType) => {
    const parent = sequelize.define("Parents", {
      id: {
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          type: DataType.BIGINT
        },
      name: {
          type:DataType.STRING,
          allowNull:true
      },
      email:{
          type:DataType.STRING,
          allowNull: true
      },
      mobileNo:{
        type:DataType.BIGINT,
        allowNull: true
      },
      password:{
          type:DataType.STRING,
          allowNull: true
      },
      createdAt: {
          type:DataType.BIGINT,
          allowNull:true
      },
      updatedAt: {
          type:DataType.BIGINT,
          allowNull:true
      }
      
    }
    , {
      hooks: {
        beforeCreate: (record, options) => {
          record.dataValues.createdAt = Math.floor(Date.now());
          record.dataValues.updatedAt = Math.floor(Date.now());
        },
        beforeUpdate: (record, options) => {
          record.dataValues.updatedAt = Math.floor(Date.now());
        }
      }
      }
    )
    parent.associate = function (models) {
    };
    return parent;
};