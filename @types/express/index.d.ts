

declare namespace Express {
    interface Response {
        // add arbitrary keys to the request
        success: any
        failure: any
        internalServerError: any
        badRequest: any
        recordNotFound: any
        validationError: any
        unAuthorized: any
        serverError: any
        notFound: any
    }
    interface Request {
        user: any
        file: any
        files: any
        session:any
    }
}