class AddProductColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :size, :integer
  end
end
