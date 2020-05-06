require 'test_helper'

class PlaylistIdsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @playlist_id = playlist_ids(:one)
  end

  test "should get index" do
    get playlist_ids_url, as: :json
    assert_response :success
  end

  test "should create playlist_id" do
    assert_difference('PlaylistId.count') do
      post playlist_ids_url, params: { playlist_id: { name: @playlist_id.name } }, as: :json
    end

    assert_response 201
  end

  test "should show playlist_id" do
    get playlist_id_url(@playlist_id), as: :json
    assert_response :success
  end

  test "should update playlist_id" do
    patch playlist_id_url(@playlist_id), params: { playlist_id: { name: @playlist_id.name } }, as: :json
    assert_response 200
  end

  test "should destroy playlist_id" do
    assert_difference('PlaylistId.count', -1) do
      delete playlist_id_url(@playlist_id), as: :json
    end

    assert_response 204
  end
end
