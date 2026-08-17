import Razorpay from "razorpay";

let razorpayInstance: Razorpay | null = null;

export function getRazorpay(): Razorpay {
  if (!razorpayInstance) {
    const key_id = process.env.RAZORPAY_KEY_ID || "dummy_key_id";
    const key_secret = process.env.RAZORPAY_KEY_SECRET || "dummy_key_secret";
    razorpayInstance = new Razorpay({
      key_id,
      key_secret,
    });
  }
  return razorpayInstance;
}

const razorpay = new Proxy({} as Razorpay, {
  get(_target, prop, receiver) {
    const instance = getRazorpay();
    const value = Reflect.get(instance, prop, receiver);
    return typeof value === "function" ? value.bind(instance) : value;
  },
});

export default razorpay;