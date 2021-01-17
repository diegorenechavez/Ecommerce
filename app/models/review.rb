# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  rating     :integer          not null
#  title      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  author_id  :integer          not null
#  product_id :integer          not null
#
# Indexes
#
#  index_reviews_on_author_id   (author_id)
#  index_reviews_on_product_id  (product_id)
#
class Review < ApplicationRecord
    validates :body, :rating, :author_id, :business_id, presence:true
    validates :rating, inclusion:{in: (0..5)}
    
    belongs_to :product,
    primary_key: :id,
    foreign_key: :product_id,
    class_name: :Product

    belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
end
