class PoemSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :author_id, :genre_id, :upvotes, :downvotes
end
