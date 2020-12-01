# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  quantity   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  cart_id    :integer          not null
#  product_id :integer          not null
#
class CartItem < ApplicationRecord
    validates :quantity, presence: true

    belongs_to :product,
    class_name: :Product,
    foreign_key: :product_id,
    primary_key: :id

    belongs_to :cart,
    class_name: :Cart,
    foreign_key: :cart_id,
    primary_key: :id



end
