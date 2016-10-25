Airplane.destroy_all
a1 = Airplane.create :name => "747", :row => "24", :column => "4"
a2 = Airplane.create :name => "747", :row => "24", :column => "4"
a3 = Airplane.create :name => "777", :row => "50", :column => "5"

Flight.destroy_all
fl1 = Flight.create :date => "11/11/2016", :flight_num => "BA666", :origin => "LAS", :destination => "LHR", :airplane_id => 1
fl2 = Flight.create :date => "15/11/2016", :flight_num => "BA234", :origin => "SYD", :destination => "LAX", :airplane_id => 2
fl3 = Flight.create :date => "18/11/2016", :flight_num => "BA389", :origin => "LAX", :destination => "SYD", :airplane_id => 3

User.destroy_all
u1 = User.create :name => "Chanel Onfire", :email => "user@one.com", :password_digest => "chicken", :admin => true
u2 = User.create :name => "Bob", :email => "bob@bob.com", :password_digest => "chicken", :admin => false
u3 = User.create :name => "Sally Field", :email => "sally@sally.com", :password_digest => "chicken", :admin => false

Reservation.destroy_all
r1 = Reservation.create :flight_id => 1, :user_id => 1
r2 = Reservation.create :flight_id => 2, :user_id => 2
r3 = Reservation.create :flight_id => 3, :user_id => 3
