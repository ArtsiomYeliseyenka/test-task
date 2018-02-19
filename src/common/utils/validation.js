export const email = emailValue => !!/^[a-z0-9.+_-]+@[a-z0-9_.-]+?\.[a-z0-9]{2,}$/i.exec(emailValue);
export const password = passwordValue => !!/^(.){6,16}$/.exec(passwordValue);
export const name = nameValue => !!/^[a-zA-Z]{1,256}$/i.exec(nameValue);
export const ip = nameValue => !!/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/ig.exec(nameValue);
