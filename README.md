# ODS Full Stack Coding Assignment

## Assignment

Create a web application that allows a user to search for flights and display the results in a tabular view.

## Features

1. Allow the user to enter a station (destination or origin) to search flights. Display the results in a table.

2. Provide an auto-suggest feature for station.

3. Provide two RESTful endpoints supporting the functionality listed in steps 1 and 2.

## Datasource

A zipped CSV file of flights is available in /data/flights.csv. Each row in the CSV file represents a flight.

## Usage

The app was made using the Flask Web Framework. To use follow the proceeding steps:

1.  While in the root project folder, enter `python app.py`.

* If you have difficulty with running app.py with python. Try entering the following into your terminal: 
`export FLASK_APP=app.py`, followed by `flask run`.

2. A browser will open up, taking you to the http://127.0.0.1:5000/ route. There you will be able to book a flight of
your choosing. Enter a station code in both the 'origin' and the 'destination' field and valid stations will begin to
auto-suggest options for you to choose from in the input field; select two stations and click enter.

3. If you entered valid station codes and a flight exists with your options, then the flights will be displayed in a
table below the form.

4. In addition to the '/' route, at the route '/<origin_city>/<destination_city' you will be able to fill in the
'origin_city' and 'destination_city' variables for the same functionality available to you as the form.

## Closing

Thank you for the opportunity!