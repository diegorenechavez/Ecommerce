# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  quantity   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  product_id :integer          not null
#  user_id    :integer          not null
#
require 'test_helper'

class CartItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
