class User
  include Mongoid::Document
  field :firstname, type: String
  field :lastname, type: String
  field :age, type: Integer
  field :gender, type: String
  field :created_at, type: Time, default: Time.now
  field :updated_at, type: Time, default: Time.now
  validates_presence_of :firstname,:lastname,message: "必填!"
  validates_numericality_of :age, greater_than: 0
  validates_inclusion_of :gender, in: ["Male", "Female","Others"],message: "必須為 Male or Female or Others"
end
