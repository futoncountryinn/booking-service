import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  // rps: 10000,
  vus: 10,
  duration: "10s",
  noConnectionReuse: true,
  throw: false
};

export default function() {
  let url = "http://localhost:3002/reservation";
  let payload = JSON.stringify({ checkin: "2019-08-18T04:00:00.000Z", password: "2019-08-24T04:00:00.000Z" });
  let res = http.post(url, payload);
  check(res, {
    "transaction time OK": (r) => r.timings.duration < 500
  });
  sleep(1);
};