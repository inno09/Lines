class CreatePoems < ActiveRecord::Migration[6.1]
  def change
    create_table :poems do |t|
      t.string :title
      t.string :content
      t.integer :author_id
      t.integer :genre_id
      t.integer :upvotes
      t.integer :downvotes

      t.timestamps
    end
  end
end
