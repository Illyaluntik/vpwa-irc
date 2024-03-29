import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Channels extends BaseSchema {
  protected tableName = 'channels'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('channel_name').notNullable().unique()
      table.boolean('is_private')
      table.integer('total').defaultTo(0)
      table.string('admin').references('id').inTable('users').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
