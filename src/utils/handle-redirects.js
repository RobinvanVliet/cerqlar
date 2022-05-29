/**
 * Because Vercel uses 307 redirects instead of 301 redirects when
 * redirecting between domains, I created this custom functionality to
 * facilitate 301 redirects between domains.
 *
 * Suggested implementation: call this function first-thing in your
 * _app.js getInitialProps, this way it is done on every server-request.
 *
 * @param appContext - Context object containing req & res
 * @param status - HTTP status code to use with redirects
 * @param ENV - Object containing VERCEL_URL & PRODUCTION_URL
 */
export default function handleRedirects (
  appContext,
  status = 301,
  ENV = process.env
) {
  const { ctx: { req, res } } = appContext

  if (req && ENV) {
    const { VERCEL_URL, PRODUCTION_URL } = ENV
    const { url } = req

    if (
      PRODUCTION_URL &&
      VERCEL_URL !== PRODUCTION_URL &&
      res && res.writeHead && res.end
    ) {
      res.writeHead(301, {
        Location: `https://${PRODUCTION_URL}${url}`
      })
      res.end()
    }
  }
}
