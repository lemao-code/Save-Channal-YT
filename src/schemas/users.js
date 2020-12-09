export default class Users {
    static schema = {
        name: "user",
        pass: "password",
        primaryKey: "id",
        properties: {
            id: { type: 'int', indexed: true},
            name: "string",
            password: "string"
        }
    }
}