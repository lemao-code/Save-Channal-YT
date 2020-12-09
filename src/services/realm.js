import Realm, { User } from 'realm'
import UserSchema from '../schemas/users'

export default function getRealm() {
    return Realm.open({
        schema: [UserSchema]
    })
}