# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  quantity   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  cart_id    :integer
#  product_id :integer          not null
#
class CartItem < ApplicationRecord
    validates :quantity, presence: true

    belongs_to :product,
    primary_key: :id,
    foreign_key: :product_id,
    class_name: :Product

    # belongs_to :user,
    # primary_key: :id,
    # foreign_key: :user_id,
    # class_name: :User

    belongs_to :cart,
    primary_key: :id,
    foreign_key: :cart_id,
    class_name: :Cart


end
