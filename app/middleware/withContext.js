const setProperty = require('js-cool/lib/setProperty')
const getType = require('js-cool/lib/getType')

module.exports = (options = {}, config = {}) => {
    return async function withContext(ctx, next) {
        const { contextName = 'context' } = config
        if (getType(options) === 'function') options = (await options(ctx)) || {}
        if (getType(options) !== 'object')
            throw new Error('options must be an object, or a function, and return an object')
        ctx[contextName] = ctx[contextName] || {}
        for (const key in options) {
            let value = options[key]
            if (getType(options[key]) === 'function') value = (await options[key](ctx)) || null
            // write to ctx[contextName]
            setProperty(ctx[contextName], key, value)
        }

        return await next()
    }
}
