class EntertainmentController < ApplicationController
  def index
    test = ["stub","view","index","entertainment"];
    render_with_protection    test.to_json
  end

  def show
  end
end
