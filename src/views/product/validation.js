export function validation(form) {
    if (form.product_name.length === 0 || form.product_description.length === 0) {
        return {
            code: 500,
            message: 'Please Fill Up The Required Fields'
        }
    }

    return {
        code: 200
    }
}