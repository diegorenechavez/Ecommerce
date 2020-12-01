class CreateLikedItems < ActiveRecord::Migration[5.2]
  def change
    create_table :liked_items do |t|
      t.integer :product_id, null: false
      t.integer :user_id, null: false 
      t.timestamps
    end
  end
end
