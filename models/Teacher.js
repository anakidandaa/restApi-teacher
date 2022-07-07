module.exports = (sequelize, DataTypes)=>{
	const Teacher = sequelize.define('Teacher',{

		 id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
          },
          firstname: {
            type: DataTypes.STRING,
            allowNull:false
          },
          lastname: {
            type: DataTypes.STRING,
            allowNull:false
          },
          school: {
            type: DataTypes.TEXT,
          },
          createdAt:{
            type: DataTypes.DATE,
            allowNull:false
          },
           updatedAt:{
            type: DataTypes.DATE,
            allowNull:false
          }
	}, {
		tableName: 'teachers'
	});

	return Teacher;
}