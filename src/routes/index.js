const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    tagMe: true,
    blogList: [
      {
        id: 1,
        title: 'a'
      },
      {
        id: 2,
        title: 'b'
      },
      {
        id: 3,
        title: 'c'
      },
    ]
  })
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/profile/:userName', async(ctx, next) => {
  const { userName } = ctx.params
  ctx.body = {
    title: 'this is profile page',
    userName
  }
})

module.exports = router
