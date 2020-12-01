# == Schema Information
#
# Table name: liked_items
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  product_id :integer          not null
#  user_id    :integer          not null
#
class LikedItem < ApplicationRecord
end
