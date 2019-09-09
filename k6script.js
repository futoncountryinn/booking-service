import http from "k6/http";
import { sleep } from "k6";

export let options = {
  rps: 300,
  vus: 300,
  duration: "10s"
};

export default function() {
  http.get("http://localhost:3002/");
  sleep(1);
};