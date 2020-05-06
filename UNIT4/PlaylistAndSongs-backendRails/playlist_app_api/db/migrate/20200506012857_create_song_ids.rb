class CreateSongIds < ActiveRecord::Migration[6.0]
  def change
    create_table :song_ids do |t|
      t.string :name

      t.timestamps
    end
  end
end
