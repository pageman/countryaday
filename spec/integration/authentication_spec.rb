require_relative 'integration_helper'

describe 'registration' do
  it 'creates user' do
    expect{ register }.to change{ User.all.count }.by(1)
  end

  it 'sets current country to their first country' do
    set_first_country_cookie('US')
    register
    expect(passed_data('current-country')).to eq('US')
  end

  it 'randomizes current country when a first country has NOT been selected' do
    register
    expect(passed_data('current-country').length).to eq(2)
  end
end

describe 'authentication' do
  before(:each) { register_and_signout }

  it 'allows users to sign out' do
    signin
    signout
    expect(passed_data('signed-in')).to eq('false')
  end

  it 'allows users to sign in' do
    expect{ signin }.to_not change{ User.all.count }
    expect(passed_data('signed-in')).to eq('true')
  end
end

describe 'services' do
  it 'allows facebook sign in' do
    expect{ visit '/auth/facebook/callback' }.to change{ User.all.count }.by(1)
  end

  it 'allows github sign in' do
    expect{ visit '/auth/github/callback' }.to change{ User.all.count }.by(1)
  end

  it 'allows google sign in' do
    expect{ visit '/auth/google_oauth2/callback' }.to change{ User.all.count }.by(1)
  end

  it 'allows twitter sign in' do
    expect{ visit '/auth/twitter/callback' }.to change{ User.all.count }.by(1)
  end
end
