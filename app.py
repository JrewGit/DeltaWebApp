from flask import Flask, render_template, url_for, flash, redirect
from forms import RegistrationForm, LoginForm, FlightForm
import csv

app = Flask(__name__)
app.config['SECRET_KEY'] = '9884a64812975334df8afb9412e2fafd'

table_header = []
flight_list = []

with open('flights.csv', mode='r') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            table_header.append(row)
            line_count += 1
        line_count += 1
        flight_list.append(row)


@app.route('/about')
def about():
    return render_template('about.html', title='Jrew')


@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        flash(f'Account created for {form.username.data}!', 'success')
        return redirect(url_for('flights'))
    return render_template('register.html', title='Register', form=form)


@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        if form.email.data == 'admin@blog.com' and form.password.data == 'password':
            flash(f'You have been logged in!', 'success')
            return redirect(url_for('flights'))
        else:
            flash(f'Login Unsuccessful. Please check username and password', 'danger')
    return render_template('login.html', title='Login', form=form)


@app.route('/', methods=['GET', 'POST'])
@app.route('/flights', methods=['GET', 'POST'])
def flights():
    final_flight_list = []
    stations = []
    station_count = 0
    count = 0
    form = FlightForm()

    # Logic for flight lookup
    if form.validate_on_submit():
        for flight in flight_list:
            if flight['origin'] not in stations:
                stations.append(flight['origin'])
                station_count += 1
            if flight['destination'] not in stations:
                stations.append(flight['destination'])
                station_count += 1
            if flight['origin'] == form.origin.data.upper() and flight['destination'] == form.destination.data.upper():
                count += 1
                final_flight_list.append(flight)
        if count > 0:
            flash(f'There are {count} flights that match your criteria!', 'success')
        else:
            flash(f'There are no flights that match your criteria!', 'danger')

    return render_template('flights.html', title='Flight', form=form, final_flight_list=final_flight_list)


@app.route('/origin/<city>', methods=['GET', 'POST'])
def origin(city):
    final_flight_list = []
    stations = []
    station_count = 0
    count = 0
    form = FlightForm()

    # Logic for flight lookup
    if form.validate_on_submit():
        for flight in flight_list:
            if flight['origin'] not in stations:
                stations.append(flight['origin'])
                station_count += 1
            if flight['destination'] not in stations:
                stations.append(flight['destination'])
                station_count += 1
            if flight['origin'] == city and flight['destination'] == 'SAV':
                count += 1
                final_flight_list.append(flight)
        if count > 0:
            flash(f'There are {count} flights that match your criteria!', 'success')
        else:
            flash(f'There are no flights that match your criteria!', 'danger')

    return render_template('flights.html', title='Flight', form=form, final_flight_list=final_flight_list)


@app.route('/destination/<city>')
def destination(city):
    return f'Now boarding to {city}!'.format(city=city)


if __name__ == "__main__":
    app.run(debug=True)
