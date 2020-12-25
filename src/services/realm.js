import Realm from 'realm'
import UserSchema from '../schemas/users'
import Fav from '../schemas/saveChannel'

export default function getRealm() {
    return Realm.open({
        schema: [UserSchema, Fav]
    })
}