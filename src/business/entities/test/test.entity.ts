import { ObjectID } from 'mongodb'
import {
    Column,
    Entity,
    ObjectIdColumn
} from 'typeorm'

@Entity('test')
export class EntityTest {

    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    createdTimestamp: Date;

    @Column()
    updatedTimestamp: Date;
}