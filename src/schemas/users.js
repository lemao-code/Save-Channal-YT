export default class UserSchema {
    static schema = {
        name: "user",
        primaryKey: 'id',
        properties: {
            id: 'int',
            name: "string",
            pass: "string"
        }
    }
}