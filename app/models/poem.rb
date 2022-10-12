class Poem < ApplicationRecord
    validates :content, presence: true
    validates :title, presence: true
    validates :content, length: { minimum:20}

    belongs_to :author
    belongs_to :genre

end
