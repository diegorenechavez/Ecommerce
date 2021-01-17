# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  rating     :integer          not null
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
end
