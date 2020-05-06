class CreatePlaylistIds < ActiveRecord::Migration[6.0]
  def change
    create_table :playlist_ids do |t|
      t.string :name

      t.timestamps
    end
  end
end
