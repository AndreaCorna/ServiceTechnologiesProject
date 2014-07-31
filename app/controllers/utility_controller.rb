class UtilityController < ApplicationController
  def index
    test = ["stub","view","index","utility"];
    render_with_protection    test.to_json
  end

  def show
  end
end
