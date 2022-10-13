class AuthorSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description
  has_many :poems
end
