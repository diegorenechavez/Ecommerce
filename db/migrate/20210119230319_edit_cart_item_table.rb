class EditCartItemTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :cart_items, :cart_id
    add_column :cart_items, :user_id, :integer, null:false
  end
end
