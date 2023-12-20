/** @type {import('next').NextConfig} */
const nextConfig = {}

const { withContentlayer } = require("next-contentlayer")

const withTM = require('next-transpile-modules')(['gsap']);
module.exports = withTM();

module.exports = withContentlayer(nextConfig)
