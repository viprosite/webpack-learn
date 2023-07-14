import { getContacts } from "../contacts";

export async function loader() {
    const contacts = await getContacts()
    return { contacts }
}

export async function testLoader() {
    return [1, 2, 3]
}