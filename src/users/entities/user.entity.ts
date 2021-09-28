import { Field, ObjectType } from '@nestjs/graphql';
import { Server } from 'src/servers/entities/server.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @OneToMany(() => Server, (server) => server.owner)
  @Field(() => [Server], { nullable: true })
  servers?: Promise<Server[]>;
}