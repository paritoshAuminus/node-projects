import http from "k6/http"
import { sleep } from "k6"

// options for the test script
export const options = {
    vus: 20,
    duration: '10s'
}


// default function
export default function () {
    // make a GET request to the target
    http.get(`http://localhost:3000/notes/getNotes/`)
    
    // 1 second gap to simulate real world scenarios
    sleep(1)
}