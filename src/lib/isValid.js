class isValid {

    static user( user ) {
        let result
        "user_id" in user
            ? result = true
            : result = false
        return result
    }
}

export default isValid