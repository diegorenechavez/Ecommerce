# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  category    :string           not null
#  description :string           not null
#  instruction :string           not null
#  name        :string           not null
#  price       :integer          not null
#  size        :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Product < ApplicationRecord
    validates :description, presence: true 
    validates :price, presence: true 
    validates :size, presence: true 
    validates :name, presence: true 


    has_one :cart,
    through: :cart_items

    has_many_attached :photos
end
