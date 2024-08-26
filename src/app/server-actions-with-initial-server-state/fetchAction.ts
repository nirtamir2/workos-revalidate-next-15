"use server"

export async function fetchAction(_: string, formData: FormData) {
    return Promise.resolve(`Value from server is ${formData.get("name")}`)
}
