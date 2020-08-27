require 'test_helper'

class ConsultantsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @consultant = consultants(:one)
  end

  test "should get index" do
    get consultants_url
    assert_response :success
  end

  test "should get new" do
    get new_consultant_url
    assert_response :success
  end

  test "should create consultant" do
    assert_difference('Consultant.count') do
      post consultants_url, params: { consultant: { email: @consultant.email, name: @consultant.name, notes: @consultant.notes, talents: @consultant.talents } }
    end

    assert_redirected_to consultant_url(Consultant.last)
  end

  test "should show consultant" do
    get consultant_url(@consultant)
    assert_response :success
  end

  test "should get edit" do
    get edit_consultant_url(@consultant)
    assert_response :success
  end

  test "should update consultant" do
    patch consultant_url(@consultant), params: { consultant: { email: @consultant.email, name: @consultant.name, notes: @consultant.notes, talents: @consultant.talents } }
    assert_redirected_to consultant_url(@consultant)
  end

  test "should destroy consultant" do
    assert_difference('Consultant.count', -1) do
      delete consultant_url(@consultant)
    end

    assert_redirected_to consultants_url
  end
end
