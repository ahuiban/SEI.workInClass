class SongIdsController < ApplicationController
  before_action :set_song_id, only: [:show, :update, :destroy]

  # GET /song_ids
  def index
    @song_ids = SongId.all

    render json: @song_ids
  end

  # GET /song_ids/1
  def show
    render json: @song_id
  end

  # POST /song_ids
  def create
    @song_id = SongId.new(song_id_params)

    if @song_id.save
      render json: @song_id, status: :created, location: @song_id
    else
      render json: @song_id.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /song_ids/1
  def update
    if @song_id.update(song_id_params)
      render json: @song_id
    else
      render json: @song_id.errors, status: :unprocessable_entity
    end
  end

  # DELETE /song_ids/1
  def destroy
    @song_id.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_song_id
      @song_id = SongId.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def song_id_params
      params.require(:song_id).permit(:name)
    end
end
