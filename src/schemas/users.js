export default class UserSchema {
    static schema = {
        name: "user",
        primaryKey: 'id',
        properties: {
            id: 'string',
            name: "string",
            pass: "string"
        }
    }
}