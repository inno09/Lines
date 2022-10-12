class Author < ApplicationRecord
    validates :description, presence: true
    validates :description, length: { minimum:10}

    has_many :poems
    has_many :genres, through: :poems
end
