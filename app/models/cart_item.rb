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
end
