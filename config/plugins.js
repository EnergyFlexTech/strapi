module.exports = ({ env }) => ({
  upload: {
    enabled: true,
    config: {
      provider: "@strapi/provider-upload-aws-s3",
      providerOptions: {
        s3Options: {
          accessKeyId: env("AWS_ACCESS_KEY_ID"),
          secretAccessKey: env("AWS_SECRET_ACCESS_KEY"),
          region: env("AWS_REGION", "ap-southeast-2"),
          params: {
            ACL: null,
            signedUrlExpires: env("AWS_SIGNED_URL_EXPIRES", 15 * 60),
            Bucket: env("AWS_BUCKET"),
          },
        },
      },
      actionOptions: {
        upload: {
          ACL: null,
        },
        uploadStream: {
          ACL: null,
        },
        delete: {},
      },
    },
  },
});
