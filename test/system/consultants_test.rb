require "application_system_test_case"

class ConsultantsTest < ApplicationSystemTestCase
  setup do
    @consultant = consultants(:one)
  end

  test "visiting the index" do
    visit consultants_url
    assert_selector "h1", text: "Consultants"
  end

  test "creating a Consultant" do
    visit consultants_url
    click_on "New Consultant"

    fill_in "Email", with: @consultant.email
    fill_in "Name", with: @consultant.name
    fill_in "Notes", with: @consultant.notes
    fill_in "Talents", with: @consultant.talents
    click_on "Create Consultant"

    assert_text "Consultant was successfully created"
    click_on "Back"
  end

  test "updating a Consultant" do
    visit consultants_url
    click_on "Edit", match: :first

    fill_in "Email", with: @consultant.email
    fill_in "Name", with: @consultant.name
    fill_in "Notes", with: @consultant.notes
    fill_in "Talents", with: @consultant.talents
    click_on "Update Consultant"

    assert_text "Consultant was successfully updated"
    click_on "Back"
  end

  test "destroying a Consultant" do
    visit consultants_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Consultant was successfully destroyed"
  end
end
