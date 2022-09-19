export default function (context) {
  console.log(context.store.getters.isLoggedIn)
  if (!context.store.getters.isLoggedIn) {
    context.redirect('/admin/auth')
  }
}
