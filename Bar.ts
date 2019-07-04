import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Foo } from './Foo';

@Entity({ name: 'UDO_BAR' })
export class Bar {
  @PrimaryColumn({ name: 'ID', generated: 'increment' })
  id: number;

  @JoinColumn({ name: 'FOO_ID' })
  @ManyToOne(() => Foo, foo => foo.id, {
    cascade: true,
    lazy: true,
    nullable: false,
    onDelete: 'CASCADE',
  })
  foo: Foo;
}
