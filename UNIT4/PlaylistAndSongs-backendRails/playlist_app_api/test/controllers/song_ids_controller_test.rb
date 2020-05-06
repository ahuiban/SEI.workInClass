require 'test_helper'

class SongIdsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @song_id = song_ids(:one)
  end

  test "should get index" do
    get song_ids_url, as: :json
    assert_response :success
  end

  test "should create song_id" do
    assert_difference('SongId.count') do
      post song_ids_url, params: { song_id: { name: @song_id.name } }, as: :json
    end

    assert_response 201
  end

  test "should show song_id" do
    get song_id_url(@song_id), as: :json
    assert_response :success
  end

  test "should update song_id" do
    patch song_id_url(@song_id), params: { song_id: { name: @song_id.name } }, as: :json
    assert_response 200
  end

  test "should destroy song_id" do
    assert_difference('SongId.count', -1) do
      delete song_id_url(@song_id), as: :json
    end

    assert_response 204
  end
end
