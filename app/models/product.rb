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
end
