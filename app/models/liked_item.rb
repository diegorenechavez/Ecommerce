# == Schema Information
#
# Table name: liked_items
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  product_id :integer          not null
#  d    :integer          not null
#
class LikedItem < ApplicationRecord
    validates :product_id, :id, uniqueness:true

    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :product,
    primary_key: :id,
    foreign_key: :product_id,
    class_name: :Product

end
