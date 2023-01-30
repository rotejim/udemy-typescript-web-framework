import { User } from "./User";

const user = new User({ name: " Pedro", age: 75 })

user.set({ name: 'Marilyn', age: 65 })

user.on('change', () => console.log('change event triggered'))
user.on('update', () => console.log('update event triggered'))

user.trigger('change')
user.trigger('update')

console.log(user)