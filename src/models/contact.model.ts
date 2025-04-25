// models/contact.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../models/database';

class Contact extends Model {
  public id!: number;
  public phoneNumber!: string | null;
  public email!: string | null;
  public linkedId!: number | null;
  public linkPrecedence!: 'primary' | 'secondary';
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date | null;
}

Contact.init(
  {
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    linkedId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    linkPrecedence: {
      type: DataTypes.ENUM('primary', 'secondary'),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Contact',
    tableName: 'Contacts',
    timestamps: true,
    paranoid: true, // for soft deletes (deletedAt)
  }
);

export default Contact;
