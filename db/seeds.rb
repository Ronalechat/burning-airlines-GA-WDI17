Airplane.destroy_all
a1 = Airplane.create :name => "747", :row => "24", :column => "4"
a2 = Airplane.create :name => "747", :row => "24", :column => "4"
a3 = Airplane.create :name => "777", :row => "50", :column => "5"

Flight.destroy_all

fl1 = Flight.create :date => "11/11/2016", :flight_num => "BA400", :origin => "LAS", :destination => "LHR", :airplane => a1
fl2 = Flight.create :date => "15/11/2016", :flight_num => "BA401", :origin => "LAS", :destination => "LAX", :airplane => a2
fl3 = Flight.create :date => "18/11/2016", :flight_num => "BA403", :origin => "LAS", :destination => "SYD", :airplane => a3
fl4 = Flight.create :date => "11/11/2016", :flight_num => "BA402", :origin => "LAS", :destination => "CAE", :airplane => a1
fl5 = Flight.create :date => "01/12/2016", :flight_num => "BA500", :origin => "LAS", :destination => "HKG", :airplane => a1
fl6 = Flight.create :date => "19/11/2016", :flight_num => "BA404", :origin => "SYD", :destination => "LHR", :airplane => a1
fl7 = Flight.create :date => "21/11/2016", :flight_num => "BA408", :origin => "SYD", :destination => "LAX", :airplane => a2
fl8 = Flight.create :date => "28/11/2016", :flight_num => "BA410", :origin => "SYD", :destination => "SYD", :airplane => a3
fl9 = Flight.create :date => "15/11/2016", :flight_num => "BA420", :origin => "SYD", :destination => "CAE", :airplane => a2
fl10 = Flight.create :date => "06/12/2016", :flight_num => "BA502", :origin => "SYD", :destination => "HKG", :airplane => a2
fl11 = Flight.create :date => "23/12/2016", :flight_num => "BA504", :origin => "LAX", :destination => "LHR", :airplane => a3
fl12 = Flight.create :date => "01/12/2016", :flight_num => "BA500", :origin => "LAX", :destination => "LAX", :airplane => a1
fl13 = Flight.create :date => "06/12/2016", :flight_num => "BA508", :origin => "LAX", :destination => "SYD", :airplane => a2
fl14 = Flight.create :date => "23/12/2016", :flight_num => "BA514", :origin => "LAX", :destination => "CAE", :airplane => a3
fl15 = Flight.create :date => "18/11/2016", :flight_num => "BA513", :origin => "LAX", :destination => "HKG", :airplane => a3
fl16 = Flight.create :date => "19/11/2016", :flight_num => "BA804", :origin => "CAE", :destination => "LHR", :airplane => a1
fl17 = Flight.create :date => "21/11/2016", :flight_num => "BA708", :origin => "CAE", :destination => "LAX", :airplane => a2
fl18 = Flight.create :date => "28/11/2016", :flight_num => "BA810", :origin => "CAE", :destination => "SYD", :airplane => a3
fl19 = Flight.create :date => "01/12/2016", :flight_num => "BA700", :origin => "CAE", :destination => "CAE", :airplane => a1
fl20 = Flight.create :date => "23/12/2016", :flight_num => "BA724", :origin => "CAE", :destination => "HKG", :airplane => a3
fl21 = Flight.create :date => "06/12/2016", :flight_num => "BA742", :origin => "HKG", :destination => "LHR", :airplane => a2
fl22 = Flight.create :date => "23/12/2016", :flight_num => "BA814", :origin => "HKG", :destination => "LAX", :airplane => a3
fl23 = Flight.create :date => "06/12/2016", :flight_num => "BA822", :origin => "HKG", :destination => "SYD", :airplane => a2
fl24 = Flight.create :date => "23/12/2016", :flight_num => "BA809", :origin => "HKG", :destination => "CAE", :airplane => a3
fl25 = Flight.create :date => "23/12/2016", :flight_num => "BA811", :origin => "HKG", :destination => "HKG", :airplane => a3

# fl1.airplane = a1
# fl1.save

User.destroy_all
u1 = User.create :name => "Chanel Onfire", :email => "user@one.com", :password => "chicken", :admin => true
u2 = User.create :name => "Bob", :email => "bob@bob.com", :password => "chicken", :admin => false
u3 = User.create :name => "Sally Field", :email => "sally@sally.com", :password => "chicken", :admin => false

Reservation.destroy_all
r1 = Reservation.create :flight_id => 1, :user_id => 1
r2 = Reservation.create :flight_id => 2, :user_id => 2
r3 = Reservation.create :flight_id => 3, :user_id => 3
