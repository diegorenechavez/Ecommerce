# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  name            :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  username        :string           not null
#
# Indexes
#
#  index_users_on_session_token  (session_token) UNIQUE
#  index_users_on_username       (username) UNIQUE
#
class User < ApplicationRecord
     attr_reader :password
     validates :username, :session_token, presence: true, uniqueness: true
     validates :email, presence:true, uniqueness:true
     validates :password, length: { minimum: 6 , allow_nil: true}
     validates :password_digest, presence: true
     validates :name, presence: true

     has_many :likes,
     primary_key: :id,
     foreign_key: :user_id,
     class_name: :LikedItem

     has_many :reviews,
     primary_key: :id,
     foreign_key: :author_id,
     class_name: :Review

     has_many :cart_items,
     primary_key: :id,
     foreign_key: :user_id,
     class_name: :CartItem

     has_many :liked_products,
     through: :likes,
     source: :product




     after_initialize :ensure_session_token

   def self.find_by_credentials(username, password)
       user = User.find_by(username: username)
       return nil if user.nil?
        user.is_password?(password) ? user : nil 
   end

   def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
   end

   def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
   end 


   def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
   end


   def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
   end 
end
