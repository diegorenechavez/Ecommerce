# == Schema Information
#
# Table name: carts
#
#  id         :bigint           not null, primary key
#  total      :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#
class Cart < ApplicationRecord
    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    has_many :cart_items,
    primary_key: :id,
    foreign_key: :cart_id,
    class_name: :CartItem

    has_many :products,
    through: :cart_items,
    source: :product
end
