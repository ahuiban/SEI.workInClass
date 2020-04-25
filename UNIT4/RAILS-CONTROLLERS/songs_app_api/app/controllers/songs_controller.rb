class SongsController < ApplicationController
    def index
        #render json: ActiveRecord::Base.connection.execute('SELECT * FROM songs;')
        songs = Song.all
    render json: {status: 200, songs: songs}
    end

    def show
        #http://127.0.0.1:3000/songs/1
        puts params
        song = Song.find(params[:id])
        render json: {status: 200, song: song}
    end
end