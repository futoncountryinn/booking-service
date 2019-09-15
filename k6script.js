import http from "k6/http";
import { check, sleep } from "k6";

let request = 'post';

export let options = {
  rps: 1000,
  vus: 100,
  duration: "10s"
};

if (request === 'get') {
  export default function() {
    let url = "http://localhost:3002/";
    let res = http.get(url);
    check(res, {
      "transaction time OK": (r) => r.timings.duration < 200
    });
    sleep(1);
  };
} else if (request === 'post') {
    export default function() {
      let url = "http://localhost:3002/";
      let payload = JSON.stringify({ checkin: "2019-08-18T04:00:00.000Z", password: "2019-08-24T04:00:00.000Z" });
      let res = http.post(url, payload);
      check(res, {
        "transaction time OK": (r) => r.timings.duration < 200
      });
      sleep(1);
    };
};