export function isValidNumber(contact: string): boolean {
    const regex = /^(\([1-9]{2}\) ?\d{4,5}-?\d{4})$/
    return regex.test(contact)
}

export const isValidUsername = (username: string): boolean => {
    const regex = /^[a-z0-9]{1,12}$/
    return regex.test(username)
}

export const isValidZipCodeCuiaba = (zipCode: string): boolean => {
    const regex = /^78[0-9]{3}-[0-9]{3}$/;
    return regex.test(zipCode)
}