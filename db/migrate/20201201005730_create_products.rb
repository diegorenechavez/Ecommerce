class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.string :instruction, null: false
      t.string :category, null: false 
      t.integer :price, null: false 
      t.timestamps
    end
  end
end
