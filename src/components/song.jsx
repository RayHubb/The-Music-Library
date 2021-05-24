import axios from 'axios'
import React, { Component } from 'react'

class Song extends Components {
    state = { 
        song: []
    }
    componenrDidMount() {
        axios.get('http://127.0.0.1:8000/song/')
    }
}
