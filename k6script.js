import http from "k6/http";
import { sleep } from "k6";

export let options = {
  rps: 1000,
  vus: 100,
  duration: "30s"
};

export default function() {
  http.get("http://localhost:3002/");
  sleep(1);
};