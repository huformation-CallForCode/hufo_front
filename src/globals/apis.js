export let ADDRESS;

if (__DEV__) {
  ADDRESS = "http://192.168.0.66:8000";
} else {
  ADDRESS = "http://192.168.0.66:8000";
}

export const URL_GET_DAILY_CARDS = `${ADDRESS}/cards/daily/`;
export const URL_GET_EVENT_CARDS = `${ADDRESS}/cards/event/`;
export const URL_GET_NAGATIVE_CARDS = `${ADDRESS}/cards/`;
