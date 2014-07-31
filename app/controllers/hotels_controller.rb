class HotelsController < ApplicationController
  def index
    test = ["stub","view","index","hotel"];
    render_with_protection    test.to_json
  end

  def show
  end
end
