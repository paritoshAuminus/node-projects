// 1. PROMISE VERSION

const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
            .catch((error) => { next(error) })
    }
}

export { asyncHandler }


// Second way of doing this

/*
const asyncHandler = () => {}
const asyncHandler = (func) => {}

In order to execute the func that we have accepted as an argument for the parent func
const asyncHandler = (func) => {() => {}}

If we remove the `{}` inside the parent func, it won't make a difference
const asyncHandler = (func) => () => {}

To make the inside function async while executing
const asyncHandler = (func) => async () => {}
*/


// 2. TRY CATCH VERSION

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }
