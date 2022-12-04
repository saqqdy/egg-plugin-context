module.exports = options => {
	if (typeof options !== 'object') options = {}
	return async function widthContext(ctx, next) {
		const { helper } = ctx
        //
		return await next()
	}
}
