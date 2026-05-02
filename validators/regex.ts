import config from "@/@config";

export const passwordRegExp = new RegExp(
  `^(?!.*\\s)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[=\\\\\`\\/()\\+}{><,.~_\\-?:;"'\\]\\[|!@#$%^&*]).{${config.passwordMinLength},}$`,
);
