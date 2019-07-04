import { Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'UDO_FOO' })
export class Foo {
  @PrimaryColumn({ name: 'ID', generated: 'increment' })
  id: number;
}
