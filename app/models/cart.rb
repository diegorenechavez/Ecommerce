# == Schema Information
#
# Table name: carts
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#
class Cart < ApplicationRecord
    belongs_to :User,
    foreign_key: :user_id,
    class_name: :User,
    primary_key: :id
end
