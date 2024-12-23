const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

// MongoDB connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'gym-management-system';

// Connect to MongoDB
MongoClient.connect(url, function(err, client) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to MongoDB');

        const db = client.db(dbName);

        const classesCollection = db.collection('classes');
        const bookingsCollection = db.collection('bookings');
        const attendanceCollection = db.collection('attendance');

        // API Endpoints

        // Get all classes
        app.get('/api/classes', function(req, res) {
            classesCollection.find().toArray(function(err, result) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(result);
                }
            });
        });

        // Create new class
        app.post('/api/classes', function(req, res) {
            const newClass = req.body;
            classesCollection.insertOne(newClass, function(err, result) {
                if (err) {
                    console.log(err);
                } else {
                    res.json({ message: 'Class created successfully' });
                }
            });
        });

        // Get all bookings
        app.get('/api/bookings', function(req, res) {
            bookingsCollection.find().toArray(function(err, result) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(result);
                }
            });
        });

        // Create new booking
        app.post('/api/bookings', function(req, res) {
            const newBooking = req.body;
            bookingsCollection.insertOne(newBooking, function(err, result) {
                if (err) {
                    console.log(err);
                } else {
                    res.json({ message: 'Booking created successfully' });
                }
            });
        });

        // Get all attendance records
        app.get('/api/attendance', function(req, res) {
            attendanceCollection.find().toArray(function(err, result) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(result);
                }
            });
        });

        // Create new attendance record
        app.post('/api/attendance', function(req, res) {
            const newAttendance = req.body;
            attendanceCollection.insertOne(newAttendance, function(err, result) {
                if (err) {
                    console.log(err);
                } else {
                    res.json({ message: 'Attendance record created successfully' });
                }
            });
        });
    }
});

// Start server
const port = 3000;
app.listen(port, function() {
    console.log(`Server started on port ${port}`);
});
