class PlaylistIdsController < ApplicationController
  before_action :set_playlist_id, only: [:show, :update, :destroy]

  # GET /playlist_ids
  def index
    @playlist_ids = PlaylistId.all

    render json: @playlist_ids
  end

  # GET /playlist_ids/1
  def show
    render json: @playlist_id
  end

  # POST /playlist_ids
  def create
    @playlist_id = PlaylistId.new(playlist_id_params)

    if @playlist_id.save
      render json: @playlist_id, status: :created, location: @playlist_id
    else
      render json: @playlist_id.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /playlist_ids/1
  def update
    if @playlist_id.update(playlist_id_params)
      render json: @playlist_id
    else
      render json: @playlist_id.errors, status: :unprocessable_entity
    end
  end

  # DELETE /playlist_ids/1
  def destroy
    @playlist_id.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_playlist_id
      @playlist_id = PlaylistId.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def playlist_id_params
      params.require(:playlist_id).permit(:name)
    end
end
