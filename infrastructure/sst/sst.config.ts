/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "link-shortify",
      removal: input?.stage === "prod" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: { region: "eu-central-1" },
      },
    };
  },
  async run() {
    const isProd = $app.stage === "prod";
    const domain = isProd ? "julab.space" : `${$app.stage}.julab.space`;

    const site = new sst.aws.Nextjs("Client", {
      path: "../../client",
      domain: {
        name: domain,
        ...(isProd ? { redirects: [`www.${domain}`] } : {}),
        // Existing wildcard ACM cert created by CertificateStack (must be in us-east-1)
        cert: process.env.CERTIFICATE_ARN!,
        // DNS is managed manually in Cloudflare — SST outputs the CloudFront domain as CNAME target
        dns: false,
      },
      environment: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL!,
        NEXT_PUBLIC_COGNITO_DOMAIN: process.env.NEXT_PUBLIC_COGNITO_DOMAIN!,
        NEXT_PUBLIC_COGNITO_CLIENT_ID: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID!,
        NEXT_PUBLIC_COGNITO_USER_POOL_ID: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID!,
        NEXT_PUBLIC_AUTH_CALLBACK_URL: `https://${domain}/api/auth/callback`,
        NEXT_PUBLIC_AUTH_LOGOUT_URL: process.env.NEXT_PUBLIC_AUTH_LOGOUT_URL!,
      },
    });

    return {
      url: site.url,
    };
  },
});
