class Flight < ActiveRecord::Base
  belongs_to :airplane

  def rows
    airplane.row
  end

end
